// Import the required modules
// const fs = require('fs');
// const path = require('path');

// Define the path to your JSON file
const jsonFilePath = path.join(__dirname, 'data.json');

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Get the values of organisationAssessmentInfo and surveyCategory
    const organisationAssessmentInfo = jsonData.organisationAssessmentInfo;
    const surveyCategory = jsonData.surveyCategory;

    // Log the values to verify
    console.log('organisationAssessmentInfo:', organisationAssessmentInfo);
    console.log('surveyCategory:', surveyCategory);

    // You can now use these variables in your code as needed
  } catch (parseErr) {
    console.error('Error parsing JSON data:', parseErr);
  }
});


// let organizationId = 8;
// let assessmentId = 2;
// // let assignedOrganisationAssisment = 0;


// //get organisation and assessment level users
// let organisationAssessmentInfo = organisationAssessmentInfo



// let surveyCategory = surveyCategory

// // let surveyProgress = 

// // Function to find category IDs for a given survey
// function getCategoryIdsForSurvey(surveyId) {
//     return surveyCategory
//         .filter(category => category.surveyId === surveyId)
//         .map(category => category.categoryId);
// }

// // Function to check if a user has completed all categories for a given survey
// function hasUserCompletedSurvey(userId, surveyId) {
//     const requiredCategories = getCategoryIdsForSurvey(surveyId);
//     const userProgress = surveyProgress.filter(progress => progress.userId === userId && progress.surveyId === surveyId && progress.status === "Completed");
//     const completedCategories = userProgress.map(progress => progress.categoryId);
//     return requiredCategories.every(categoryId => completedCategories.includes(categoryId));

// }

// // Check for each user in organisationAssessmentInfo if they have completed the survey with assessmentId

// const result = organisationAssessmentInfo.map(info => ({
//     UserId: info.User_Id,
//     HasCompletedSurvey: hasUserCompletedSurvey(info.User_Id, assessmentId)
// }));




// // resolve({"yoki result": result})

// // if (organisationAssessmentInfo) {
// // assignedOrganisationAssisment = organisationAssessmentInfo.id;    

// //Get all the invited users in organisation
// /*    let organisationAssessmentUserList = await selectTableData({
//         compName: "AssessmentInvites",
//         recordCount: 0,
//         selectSpecs: [        
//             { fieldName: "userId" }
//         ],
//         whereSpecs: [
//             { fieldName: "OrgAssessmentId", fieldOperator: "=", fieldValue: organizationId},                
//         ]
//     });

//     let userIds = organisationAssessmentUserList.map(user => user.userId);
// */
// let organisationAssessmentCompletedUsersList = await selectTableData({
//     compName: "SMASurveyProgress",
//     recordCount: 0,
//     selectSpecs: [
//         { fieldName: "id" },
//         { fieldName: "surveyId" },
//         { fieldName: "userId" },
//         { fieldName: "clientId" },
//         { fieldName: "createdBy" }
//     ],
//     whereSpecs: [
//         { fieldName: "status", fieldOperator: "=", fieldValue: "Completed" },
//         // { fieldName: "surveyId", fieldOperator: "=", fieldValue: assessmentId},
//         // { fieldName: "clientId", fieldOperator: "=", fieldValue: organizationId},
//     ]
// });




// function getLatestUniqueEntries(data) {
//     const latestEntriesMap = new Map();
//     data.forEach(entry => {
//         const createdBy = entry.createdBy;
//         if (!latestEntriesMap.has(createdBy) || entry.id > latestEntriesMap.get(createdBy).id) {
//             latestEntriesMap.set(createdBy, entry);
//         }
//     });
//     return Array.from(latestEntriesMap.values());
// }

// let uniqueCompletedUsersList = getLatestUniqueEntries(organisationAssessmentCompletedUsersList);



// // let completedAssessmentId = uniqueCompletedUsersList.map(assessment => assessment.id);
// let completedAssessmentUsers = uniqueCompletedUsersList.map(assessment => assessment.createdBy);

// // resolve({"yoki completedAssessmentId": completedAssessmentId})
// // resolve({"yoki completedAssessmentUsers": completedAssessmentUsers})




// //Get name of the users
// let assessmentUsers
//     = await selectTableData({
//         compName: "users",
//         recordCount: 0,
//         selectSpecs: [
//             { fieldName: "id" }, { fieldName: "FullName" }
//         ],
//         whereSpecs: [
//             { fieldName: "id", fieldOperator: "IN", fieldValue: completedAssessmentUsers },
//         ]
//     });

// //Get all invited users & assessmentsId who completed the assessment with questions & answers
// let users = assessmentUsers.map(user => user.id);

// let completedAssessmentReport = await selectTableData({
//     compName: "SMACompletedSurveyReportView",
//     recordCount: 0,
//     selectSpecs: [
//         { fieldName: "title" },
//         { fieldName: "userId" },
//         { fieldName: "FullName" },
//         { fieldName: "categoryName" },
//         { fieldName: "subCategoryName" },
//         { fieldName: "questionText" },
//         { fieldName: "answerText" },
//         { fieldName: "score" },
//         { fieldName: "surveyId" },
//         { fieldName: "id" },
//         { fieldName: "answersCount" },
//         { fieldName: "created" },
//         { fieldName: "name" },
//     ],
//     whereSpecs: [
//         { fieldName: "id", fieldOperator: "=", fieldValue: assessmentId },
//         { fieldName: "userId", fieldOperator: "IN", fieldValue: users },
//         // { fieldName: "surveyId", fieldOperator: "IN", fieldValue: completedAssessmentId }
//     ],
//     type: "view",
// });

// // resolve({"yoki 1": completedAssessmentReport})


// // Process the completed assessment report to structure the response
// let assessmentReport = {};

// completedAssessmentReport.forEach(question => {
//     let completedAssessmentId = question.CompletedAssessmentId;
//     let createdDate = new Date(question.created); // Convert created to a Date object for easier comparison

//     // Check if a newer entry for the same CompletedAssessmentId exists
//     if (!assessmentReport[completedAssessmentId] || assessmentReport[completedAssessmentId].created < createdDate) {
//         // If it does not exist or the existing entry is older, replace or create the entry
//         assessmentReport[completedAssessmentId] = {
//             assessmentId: question.assessmentId,
//             userId: question.userId,
//             userName: question.FullName,  // Store the FullName as userName
//             assessmentName: question.title,
//             created: createdDate,
//             organisationId: organizationId,
//             organisationName: question.name,
//             subjects: {}
//         };
//     }

//     // Continue adding subjects and questions only if it is the most recent entry
//     if (assessmentReport[completedAssessmentId].created.getTime() === createdDate.getTime()) {
//         let subject = question.categoryName;
//         // Initialize the subject if it doesn't exist
//         if (!assessmentReport[completedAssessmentId].subjects[subject]) {
//             assessmentReport[completedAssessmentId].subjects[subject] = {
//                 subjectName: subject,
//                 questions: {}
//             };
//         }

//         // Create a unique identifier for the question
//         let questionKey = `${question.subCategoryName}-${question.questionText}`;

//         // Add the question details if not already added
//         if (!assessmentReport[completedAssessmentId].subjects[subject].questions[questionKey]) {
//             assessmentReport[completedAssessmentId].subjects[subject].questions[questionKey] = {
//                 topicName: question.topicName,
//                 questionText: question.questionText,
//                 answerText: question.answerText,
//                 score: question.score,
//                 maxScore: question.answersCount
//             };
//         }
//     }
// });

// // resolve({"yoki": assessmentReport})


// let reportData = Object.values(assessmentReport).map(entry => {
//     if (entry.userId !== 0) {
//         return {
//             assessmentId: entry.assessmentId,
//             userId: entry.userId,
//             userName: entry.userName,
//             assessmentName: entry.assessmentName,
//             created: entry.created,
//             organisationId: entry.organisationId,
//             organisationName: entry.organisationName,
//             subjects: Object.values(entry.subjects).map(subject => ({
//                 subjectName: subject.subjectName,
//                 questions: Object.values(subject.questions)
//             }))
//         };
//     }
//     // Return null or an empty object for entries with userId 0 (excluded from response)
//     return null;
// }).filter(Boolean); // Filter out any null values (entries with userId 0)

// resolve({ reportData: reportData, message: "", statusCode: 200 });

// /*} else {
//     resolve({ message: "Assessment Not Found For The Organisation!", statusCode: 404 });
// }
// */