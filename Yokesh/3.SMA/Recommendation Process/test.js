var searchParams = new URLSearchParams(window.location.search);

let client_id = window.__USER_SESSION__.clientId

console.log("Yoki",client_id)


let assessmentname;

var userId = parseInt(searchParams.get("userId") || "0");
var assessmentId = parseInt(searchParams.get("surveyId") || "0");

let globalUserTotalScore;
let globalFilteredRecommendation;
let globalOrgUserData;


function loadData() {
    fetch(window.__PATH__.appUrls.businessIntelligence + "api/process-api/sma/externaluserreport", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "X-API-Endpoint": "U2FsdGVkX18LfRdV8Qu68Pd2hgFUlGaGeoILfBxpSvgXqdjlnq6wPsABDfSD5tiarMn7nczPfWuwkJn2CmhK/4gWEn6h3aeVH0Yh9RPB1BMcziJg4F5E3EtKVF0e3gI23MOX+fZi96YlfdgBTAhPiwivp6f3VSIq4BfjQ35LXAhcisCJH4I2hBIzYLiOOXfDq4x0JXy1PaxRaC7eBAWw9ayurD3iAve9VIFeRPlZqd8lVPCWX69R6fQwT9M34Tvw"
        },
        body: JSON.stringify({
            "userId": userId,
            "assessmentId": assessmentId
        })
    }).then(async (res) => {
        let data = await res.json();
        setupScreen(data);
    });

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
        globalOrgUserData = data.reportData
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

    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';
    flexContainer.style.justifyContent = 'space-between';
    flexContainer.style.alignItems = 'center';

    const tabs = document.createElement('div');

    tabs.className = 'tabs';

    const tabRcmd = document.createElement('button');
    tabRcmd.textContent = 'Recommendations';
    tabRcmd.className = 'tablinks';

    const tabOrgRcmd = document.createElement('button');
    tabOrgRcmd.textContent = 'Organization Recommendations';
    tabOrgRcmd.className = 'tablinks';

    tabs.appendChild(tabRcmd);
    tabs.appendChild(tabOrgRcmd);
    flexContainer.appendChild(tabs);

    const downloadIcon = document.createElement('button');
    downloadIcon.className = 'download-btn';
    downloadIcon.innerHTML = '<i class="fas fa-download"></i>';
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
    container.appendChild(usersContent);
    container.appendChild(orgContent);

    usersContent.style.display = 'block';
    tabRcmd.className += ' active';

    tabRcmd.onclick = function () {
        openTab('Users');
        const allTabs = document.querySelectorAll('.tablinks');
        allTabs.forEach(tab => tab.classList.remove('active'));
        tabRcmd.classList.add('active');
    };
    tabOrgRcmd.onclick = function () {
        openTab('Organisation');
        const allTabs = document.querySelectorAll('.tablinks');
        allTabs.forEach(tab => tab.classList.remove('active'));
        tabOrgRcmd.classList.add('active');
    };

    function openTab(tabName) {
        let tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }

    function downloadCSVReport() {
        processDataAndDownloadCSV(reportData);
    }

    // Populate data into 'Users' tab
    populateUsersReport(usersContent, reportData);

    // Populate data into 'Organisation' tab
    populateOrgReport(orgContent, reportData);

    const rangeRecommendation = response.rangeRecommendation.value;

    globalFilteredRecommendation = rangeRecommendation.filter(data => (
        parseInt(data.Survey_Id, 10) === parseInt(assessmentId, 10) &&
        parseInt(data.Score_Range_From, 10) <= parseInt(globalUserTotalScore, 10) &&
        parseInt(data.Score_Range_To, 10) >= parseInt(globalUserTotalScore, 10)
    ));

}

function populateUsersReport(usersContent, data) {
    const userHeaderRow = document.createElement('div');
    userHeaderRow.className = 'header-row';
    usersContent.appendChild(userHeaderRow);

    const userDetailsContainer = document.createElement('div');
    userDetailsContainer.id = 'userDetailsContainer';
    userDetailsContainer.className = 'details-container';
    usersContent.appendChild(userDetailsContainer);

    data.forEach(userReport => {
        const userName = userReport.userName;
        globalUserTotalScore = calculateAverageUserScore(userReport.subjects);
        const userButton = document.createElement('button');
        userButton.className = 'tab-button';
        userButton.textContent = `${userName} - Avg Score: ${globalUserTotalScore}`;
        userButton.onclick = () => {
            const allButtons = usersContent.parentNode.querySelectorAll('.tab-button');
            allButtons.forEach(btn => btn.classList.remove('active-button'));
            userButton.classList.add('active-button');
            loadUserDetails(userName, userDetailsContainer);
        };
        userHeaderRow.appendChild(userButton);
    });
}

function populateOrgReport(orgContent, data) {
    const userHeaderRow = document.createElement('div');
    userHeaderRow.className = 'header-row';
    orgContent.appendChild(userHeaderRow);

    const userDetailsContainer = document.createElement('div');
    userDetailsContainer.id = 'orgDetailsContainer';
    userDetailsContainer.className = 'details-container';
    orgContent.appendChild(userDetailsContainer);

    const orgAvgScores = calculateOrgAverageScores(data);

    const orgButton = document.createElement('button');
    orgButton.className = 'tab-button';
    orgButton.textContent = `Organization Avg Score: ${orgAvgScores.avgScore}`;
    orgButton.onclick = () => {
        const allButtons = orgContent.parentNode.querySelectorAll('.tab-button');
        allButtons.forEach(btn => btn.classList.remove('active-button'));
        orgButton.classList.add('active-button');
        loadOrgDetails(orgAvgScores, userDetailsContainer);
    };
    userHeaderRow.appendChild(orgButton);
}

function calculateOrgAverageScores(data) {
    let totalScore = 0;
    let totalCount = 0;
    const subjectScores = {};

    data.forEach(userReport => {
        userReport.subjects.forEach(subject => {
            if (!subjectScores[subject.subjectName]) {
                subjectScores[subject.subjectName] = { total: 0, count: 0 };
            }
            subject.questions.forEach(question => {
                subjectScores[subject.subjectName].total += question.score;
                subjectScores[subject.subjectName].count++;
                totalScore += question.score;
                totalCount++;
            });
        });
    });

    const avgScores = Object.keys(subjectScores).map(subjectName => {
        const { total, count } = subjectScores[subjectName];
        return {
            subjectName,
            avgScore: (total / count).toFixed(2)
        };
    });

    return {
        avgScore: (totalScore / totalCount).toFixed(2),
        avgScores
    };
}

function loadOrgDetails(orgAvgScores, userDetailsContainer) {
    userDetailsContainer.innerHTML = '';

    const recommendationContainer = document.createElement('div');
    recommendationContainer.className = 'recommendation-container';
    recommendationContainer.style.marginTop = '10px';

    const recommendationHeader = document.createElement('div');
    recommendationHeader.className = 'recommendation-header';
    recommendationHeader.textContent = "Organization Average Scores";
    recommendationContainer.appendChild(recommendationHeader);

    const scoreList = document.createElement('ul');
    scoreList.className = 'recommendation-list';

    orgAvgScores.avgScores.forEach(avgScore => {
        const listItem = document.createElement('li');
        listItem.textContent = `${avgScore.subjectName}: ${avgScore.avgScore}`;
        scoreList.appendChild(listItem);
    });

    recommendationContainer.appendChild(scoreList);
    userDetailsContainer.appendChild(recommendationContainer);
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

function loadUserDetails(userName, userDetailsContainer) {
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

    globalFilteredRecommendation.forEach(rec => {
        const listItem = document.createElement('li');
        listItem.textContent = rec.Recommendation_Text;
        recommendationList.appendChild(listItem);
    });

    recommendationContainer.appendChild(recommendationList);
    userDetailsContainer.appendChild(recommendationContainer);
}

function processDataAndDownloadCSV(reportData) {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "User Name,Subject,Question,Score,Max Score\n";

    reportData.forEach(userReport => {
        const userName = userReport.userName;

        userReport.subjects.forEach(subject => {
            const subjectName = subject.subjectName;

            subject.questions.forEach(question => {
                const questionText = question.questionText;
                const score = question.score;
                const maxScore = question.maxScore;
                csvContent += `${userName},${subjectName},${questionText},${score},${maxScore}\n`;
            });
        });
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "user_report.csv");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
}

loadData();
