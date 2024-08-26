function populateOrgReport(orgContent, data) {
    const subjectHeaderRow = document.createElement('div');
    subjectHeaderRow.className = 'header-row';
    orgContent.appendChild(subjectHeaderRow);
 
    const subjectDetailsContainer = document.createElement('div');
    subjectDetailsContainer.id = 'subjectDetailsContainer';
    subjectDetailsContainer.className = 'details-container';
    orgContent.appendChild(subjectDetailsContainer);
 
    const subjectAggregates = {};
 
    // Aggregate user-level averages for each subject (category)
    data.forEach(userReport => {
        userReport.subjects.forEach(subject => {
            const subjectName = subject.subjectName;
            if (!subjectAggregates[subjectName]) {
                subjectAggregates[subjectName] = { totalUserAvgScore: 0, userCount: 0 };
            }
 
            // Calculate the user's average score for this subject
            const userAvgScore = calculateAverageUserScore([subject]);
            subjectAggregates[subjectName].totalUserAvgScore += parseFloat(userAvgScore);
            subjectAggregates[subjectName].userCount++;
        });
    });
 
    // Display subjects and their details
    Object.entries(subjectAggregates).forEach(([subjectName, aggData]) => {
        const averageScore = aggData.userCount > 0 ? (aggData.totalUserAvgScore / aggData.userCount).toFixed(2) : 0; // Category average based on user averages
 
        const subjectButton = document.createElement('button');
        subjectButton.className = 'tab-button';
        subjectButton.textContent = aggData.userCount > 0 ? `${subjectName} - Avg Score: ${averageScore}` : `${subjectName} - No Data`;
        subjectButton.onclick = () => {
            const allButtons = orgContent.parentNode.querySelectorAll('.tab-button');
            allButtons.forEach(btn => btn.classList.remove('active-button'));
            subjectButton.classList.add('active-button');
            loadSubjectDetails(subjectName, aggData, subjectDetailsContainer);
        };
        subjectHeaderRow.appendChild(subjectButton);
    });
}
 
function loadSubjectDetails(subjectName, aggData, container) {
    container.innerHTML = ''; // Clear previous details
 
    const header = document.createElement('h3');
    header.className = 'subject-header';
    header.textContent = `${subjectName} - Avg Score: ${(aggData.totalUserAvgScore / aggData.userCount).toFixed(2)}`;
    container.appendChild(header);
 
    const list = document.createElement('ul');
 
    Object.entries(aggData.questions || {}).forEach(([questionText, questionData]) => {
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
 
    container.appendChild(list);
}