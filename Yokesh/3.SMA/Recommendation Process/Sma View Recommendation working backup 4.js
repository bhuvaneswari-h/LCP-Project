var searchParams = new URLSearchParams(window.location.search);

const client_id = window.__USER_SESSION__.clientId;
const userRolesJSON = window.__USER_SESSION__.userRoles;
const userRoles = userRolesJSON.map(role => role.name);
var userId = parseInt(searchParams.get("userId") || "0");
var assessmentId = parseInt(searchParams.get("surveyId") || "0");

function loadData() {
    fetch(window.__PATH__.appUrls.businessIntelligence + "api/process-api/sma/organizationreport", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "X-API-Endpoint": "U2FsdGVkX18MEmnMwzoLS4iKHOwi957c4pAFup3Z8Ga3VDdEst0B3eZAKiz2mmFeyeyNb6515i+WoMOWcHMHCE37dPYEkWA4TMJrCbLj/kMlzia3IQGCR917Ze3gCfqrstQV5cTWHBiU08ljjEZqHXzj1xHlCqxvcvEWHXzp2aHF4PB3NeW9DlmFOWVQgDe/SvTmQRXDb8ADlAswh7rHoL0i1sEox6H4fM6zOnSU+/weCBx9Z9tAULNiEUkAC0Gp"
        },
        body: JSON.stringify({
            "organizationId": client_id,
            "assessmentId": assessmentId
        })
    }).then(async (res) => {
        let data = await res.json();
        console.log("yoki data",data)
        setupScreen(data);
    });
}

function setupScreen(responseData) {
    const reportData = responseData.reportData;

    const container = document.getElementById('surveyContainer');
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    if (!Array.isArray(reportData) || reportData.length === 0) {
        console.error("No report data available.");

        const noDataMsg = document.createElement('h2');
        noDataMsg.textContent = 'No report data available.';
        noDataMsg.style.textAlign = 'center';
        container.appendChild(noDataMsg);

        return;
    }

    container.className = 'surveyContainer';
    container.innerHTML = '';

    // Flex container for tabs and download icon
    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    flexContainer.style.justifyContent = 'space-between';
    flexContainer.style.alignItems = 'center';

    // Create Tabs
    const tabs = document.createElement('div');
    tabs.className = 'tabs';

    const tabUsers = document.createElement('button');
    tabUsers.textContent = 'User Recommendations';
    tabUsers.className = 'tablinks';

    const tabOrg = document.createElement('button');
    tabOrg.textContent = 'Organisation Recommendations';
    tabOrg.className = 'tablinks';

    const tabCatOrg = document.createElement('button');
    tabCatOrg.textContent = 'Organisation Category Recommendations';
    tabCatOrg.className = 'tablinks';



    // Hide Organisation Recommendations Except External Admin
    if (!userRoles.includes("External Admin")) {
        tabOrg.classList.add('hide');
        tabCatOrg.classList.add('hide');
    }

    tabs.appendChild(tabUsers);
    tabs.appendChild(tabOrg);
    tabs.appendChild(tabCatOrg);


    flexContainer.appendChild(tabs);

    // Download icon button
    const downloadIcon = document.createElement('button');
    downloadIcon.className = 'download-btn';
    downloadIcon.innerHTML = '<i class="fas fa-download"></i>'; // Using Font Awesome icon
    downloadIcon.onclick = downloadCSVReport;
    flexContainer.appendChild(downloadIcon);

    container.appendChild(flexContainer);

    // Tab content containers
    const usersContent = document.createElement('div');
    usersContent.id = 'Users';
    usersContent.className = 'tabcontent';

    const orgContent = document.createElement('div');
    orgContent.id = 'Organisation';
    orgContent.className = 'tabcontent';

    const catOrgContent = document.createElement('div');
    catOrgContent.id = 'categoryOrganisation';
    catOrgContent.className = 'tabcontent';



    container.appendChild(orgContent);
    container.appendChild(usersContent);
    container.appendChild(catOrgContent);


    // Default open Org Report
    usersContent.style.display = 'block';
    tabUsers.className += ' active';

    // Implementing tab logic
    tabUsers.onclick = function () {
        openTab('Users');
        const allTabs = document.querySelectorAll('.tablinks');
        allTabs.forEach(tab => tab.classList.remove('active'));
        tabUsers.classList.add('active');
    };
    tabOrg.onclick = function () {
        openTab('Organisation');
        const allTabs = document.querySelectorAll('.tablinks');
        allTabs.forEach(tab => tab.classList.remove('active'));
        tabOrg.classList.add('active');
    };
    tabCatOrg.onclick = function () {
        openTab('categoryOrganisation');
        const allTabs = document.querySelectorAll('.tablinks');
        allTabs.forEach(tab => tab.classList.remove('active'));
        tabCatOrg.classList.add('active');
    };


    function openTab(tabName) {
        let tabcontent = document.getElementsByClassName("tabcontent");
        let tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }

    // Function to handle the downloading logic based on the active tab
    function downloadCSVReport() {
        processDataAndDownloadCSV(reportData);
    }


    // Populate data into 'Users' tab
    populateUsersReport(usersContent, reportData);

    // Populate data into 'Organisation' tab
    populateOrgReport(orgContent, reportData);

    // Populate data into 'Organisation' tab
    populateCatOrgReport(catOrgContent, reportData);

}

function populateOrgReport(orgContent, data) {
    const subjectHeaderRow = document.createElement('div');
    subjectHeaderRow.className = 'header-row';
    orgContent.appendChild(subjectHeaderRow);

    const subjectDetailsContainer = document.createElement('div');
    subjectDetailsContainer.id = 'subjectDetailsContainer';
    subjectDetailsContainer.className = 'details-container';
    orgContent.appendChild(subjectDetailsContainer);

    let averageTotal = 0;

    data.forEach(userReport => {
        averageTotal += parseFloat(calculateAverageUserScore(userReport.subjects));
    });

    const averageScore = (averageTotal / data.length).toFixed(2);

    const userButton = document.createElement('button');
    userButton.className = 'tab-button';
    userButton.textContent = `Organization Avg Score: ${averageScore}`;
    userButton.onclick = () => {
        const allButtons = orgContent.parentNode.querySelectorAll('.tab-button');
        allButtons.forEach(btn => btn.classList.remove('active-button'));
        userButton.classList.add('active-button');
        loadSubjectDetails(averageScore, subjectDetailsContainer);
    };
    subjectHeaderRow.appendChild(userButton);
}

function populateUsersReport(usersContent, data) {
    const userHeaderRow = document.createElement('div');
    userHeaderRow.className = 'header-row';
    usersContent.appendChild(userHeaderRow);

    const userDetailsContainer = document.createElement('div');
    userDetailsContainer.id = 'userDetailsContainer';
    userDetailsContainer.className = 'details-container';
    usersContent.appendChild(userDetailsContainer);

    data.filter(user => user.userId === userId).forEach(userReport => {
        const userName = userReport.userName;

        console.log("Org aggData", userReport.subjects)

        const averageScore = calculateAverageUserScore(userReport.subjects);
        const userButton = document.createElement('button');
        userButton.className = 'tab-button';
        userButton.textContent = `${userName} - Avg Score: ${averageScore}`;
        userButton.onclick = () => {
            const allButtons = usersContent.parentNode.querySelectorAll('.tab-button');
            allButtons.forEach(btn => btn.classList.remove('active-button'));
            userButton.classList.add('active-button');
            loadUserDetails(userReport.subjects, userDetailsContainer);
        };
        userHeaderRow.appendChild(userButton);
    });
}

function populateCatOrgReport(catOrgContent, data) {
    const catOrgHeaderRow = document.createElement('div');
    catOrgHeaderRow.className = 'header-row';
    catOrgContent.appendChild(catOrgHeaderRow);

    const catOrgDetailsContainer = document.createElement('div');
    catOrgDetailsContainer.id = 'catOrgDetailsContainer';
    catOrgDetailsContainer.className = 'details-container';
    catOrgContent.appendChild(catOrgDetailsContainer);

    const subjectAggregates = {};

    // Aggregate data
    data.forEach(userReport => {
        userReport.subjects.forEach(subject => {
            const subjectName = subject.subjectName;
            const categoryId = subject.categoryId;
            if (!subjectAggregates[subjectName]) {
                subjectAggregates[subjectName] = { totalScore: 0, totalMaxScore: 0, count: 0, questions: {}, categoryId: categoryId };
            }

            subject.questions.forEach(question => {
                if (!subjectAggregates[subjectName].questions[question.questionText]) {
                    subjectAggregates[subjectName].questions[question.questionText] = { totalScore: 0, totalMaxScore: 0, count: 0 };
                }
                subjectAggregates[subjectName].questions[question.questionText].totalScore += question.score;
                subjectAggregates[subjectName].questions[question.questionText].totalMaxScore += question.maxScore;
                subjectAggregates[subjectName].questions[question.questionText].count++;
                subjectAggregates[subjectName].totalScore += question.score;
                subjectAggregates[subjectName].totalMaxScore += question.maxScore;
                subjectAggregates[subjectName].count++;
            });
        });
    });

    // Display subjects and their details
    Object.entries(subjectAggregates).forEach(([subjectName, aggData]) => {
        const averageScore = aggData.totalMaxScore > 0 ? (aggData.totalScore / aggData.count) : 0;  // Average score calculation
        const subjectButton = document.createElement('button');
        subjectButton.className = 'tab-button';
        subjectButton.textContent = aggData.count > 0 ? `${subjectName} - Avg Score: ${averageScore.toFixed(2)}` : `${subjectName} - No Data`;
        subjectButton.onclick = () => {
            const allButtons = catOrgContent.parentNode.querySelectorAll('.tab-button');
            allButtons.forEach(btn => btn.classList.remove('active-button'));
            subjectButton.classList.add('active-button');
            loadCatOrgDetails(subjectName, aggData, catOrgDetailsContainer);
        };
        catOrgHeaderRow.appendChild(subjectButton);
    });
}

function loadCatOrgDetails(subjectName, aggData, catOrgDetailsContainer) {

    /*container.innerHTML = ''; // Clear previous details

    const averageScore = aggData.count > 0 ? (aggData.totalScore / aggData.count) : 0;

    // Update header with subject name and average score
    const header = document.createElement('h3');
    header.className = 'subject-header';
    header.textContent = `${subjectName} - Avg Score: ${averageScore.toFixed(2)}`;
    container.appendChild(header);

    const list = document.createElement('ul');



    Object.entries(aggData.questions).forEach(([questionText, questionData]) => {
        const item = document.createElement('li');
        const questionTextSpan = document.createElement('span');
        questionTextSpan.className = 'question-text';
        questionTextSpan.textContent = questionText;

        const progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'progress-bar-container';

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        const avgScore = (questionData.totalScore / questionData.count).toFixed(2);
        progressBar.style.width = `${(avgScore / 5) * 100}%`; // Assuming max score is 5 per question for visual representation

        const progressText = document.createElement('div');
        progressText.className = 'progress-text';
        progressText.textContent = avgScore;

        progressBarContainer.appendChild(progressBar);
        progressBar.appendChild(progressText);

        item.appendChild(questionTextSpan);
        item.appendChild(progressBarContainer);
        list.appendChild(item);
    });

    container.appendChild(list);*/

    catOrgDetailsContainer.innerHTML = '';

    const recommendationContainer = document.createElement('div');
    recommendationContainer.className = 'recommendation-container';
    recommendationContainer.style.marginTop = '10px';

    const recommendationHeader = document.createElement('div');
    recommendationHeader.className = 'recommendation-header';
    recommendationHeader.textContent = "Recommendation Points";
    recommendationContainer.appendChild(recommendationHeader);

    const recommendationList = document.createElement('ul');
    recommendationList.className = 'recommendation-list';

    console.log("catOrg aggData", aggData)

    const averageScore = aggData.count > 0 ? (aggData.totalScore / aggData.count) : 0;
    const rangeRecommendation = response.categoryRangeRecommendation.value;
    const categoryId = aggData.categoryId

    const filteredRecommendation = rangeRecommendation.filter(data => (
        parseInt(data.Category_id, 10) === parseInt(categoryId, 10) &&
        parseInt(data.Score_Range_From, 10) < parseInt(averageScore, 10) &&
        parseInt(data.Score_Range_To, 10) >= parseInt(averageScore, 10)
    ));

    filteredRecommendation.forEach(rec => {
        const listItem = document.createElement('li');
        listItem.textContent = rec.Recommendation_Text;
        recommendationList.appendChild(listItem);
    });

    recommendationContainer.appendChild(recommendationList);
    catOrgDetailsContainer.appendChild(recommendationContainer);


}

function calculateAverageUserScore(subjects) {
    let totalScore = 0;
    let totalCount = 0;

    subjects.forEach(subject => {
        subject.questions.forEach(question => {
            totalScore += question.score;
            totalCount++;
        });
    });

    return totalCount > 0 ? (totalScore / totalCount).toFixed(2) : "No Data";
}

function loadUserDetails(userData, userDetailsContainer) {
    userDetailsContainer.innerHTML = '';

    const recommendationContainer = document.createElement('div');
    recommendationContainer.className = 'recommendation-container';
    recommendationContainer.style.marginTop = '10px';

    const recommendationHeader = document.createElement('div');
    recommendationHeader.className = 'recommendation-header';
    recommendationHeader.textContent = "Recommendation Points";
    recommendationContainer.appendChild(recommendationHeader);

    const recommendationList = document.createElement('ul');
    recommendationList.className = 'recommendation-list';

    const averageScore = calculateAverageUserScore(userData);
    const rangeRecommendation = response.rangeRecommendation.value;

    const filteredRecommendation = rangeRecommendation.filter(data => (
        parseInt(data.Survey_Id, 10) === parseInt(assessmentId, 10) &&
        parseInt(data.Score_Range_From, 10) <= parseInt(averageScore, 10) &&
        parseInt(data.Score_Range_To, 10) >= parseInt(averageScore, 10)
    ));

    filteredRecommendation.forEach(rec => {
        const listItem = document.createElement('li');
        listItem.textContent = rec.Recommendation_Text;
        recommendationList.appendChild(listItem);
    });

    recommendationContainer.appendChild(recommendationList);
    userDetailsContainer.appendChild(recommendationContainer);
}

function loadSubjectDetails(averageScore, subjectDetailsContainer) {
    subjectDetailsContainer.innerHTML = '';

    const recommendationContainer = document.createElement('div');
    recommendationContainer.className = 'recommendation-container';
    recommendationContainer.style.marginTop = '10px';

    const recommendationHeader = document.createElement('div');
    recommendationHeader.className = 'recommendation-header';
    recommendationHeader.textContent = "Recommendation Points";
    recommendationContainer.appendChild(recommendationHeader);

    const recommendationList = document.createElement('ul');
    recommendationList.className = 'recommendation-list';

    const rangeRecommendation = response.rangeRecommendation.value;

    const filteredRecommendation = rangeRecommendation.filter(data => (
        parseInt(data.Survey_Id, 10) === parseInt(assessmentId, 10) &&
        parseInt(data.Score_Range_From, 10) <= parseInt(averageScore, 10) &&
        parseInt(data.Score_Range_To, 10) >= parseInt(averageScore, 10)
    ));

    filteredRecommendation.forEach(rec => {
        const listItem = document.createElement('li');
        listItem.textContent = rec.Recommendation_Text;
        recommendationList.appendChild(listItem);
    });

    recommendationContainer.appendChild(recommendationList);
    subjectDetailsContainer.appendChild(recommendationContainer);
}

function processDataAndDownloadCSV(reportData) {
    let csvContent = 'data:text/csv;charset=utf-8,';
    const headers = 'User Name,Question,Score\n';
    csvContent += headers;

    reportData.forEach(userReport => {
        userReport.subjects.forEach(subject => {
            subject.questions.forEach(question => {
                const row = `${userReport.userName},${question.questionText},${question.score}\n`;
                csvContent += row;
            });
        });
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'report_data.csv');
    document.body.appendChild(link);
    link.click();
}

loadData();
