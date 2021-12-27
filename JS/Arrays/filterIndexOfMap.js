/**
 * ############ ####### "########" ######## ######.
 * @indexOf
 * @filter ### "########".
 */

// const getMessagesForPassedStudent = (allStudents, failedStudents) => {
//   const passedStudents = allStudents.filter(
//     (name) => failedStudents.indexOf(name) === -1
//   );

//   return passedStudents;
// };

// const allStudents = ["Ann", "Tom", "Bob", "Kate"];
// const failedStudents = ["Tom", "Bob"];

// console.log(getMessagesForPassedStudent(allStudents, failedStudents));

/**
 * ############ ####### "########" ######## ######.
 * @indcludes
 * @filter + Map {String} buttonTag ### "########".
 */

// const getMessagesForPassedStudent = (allStudents, failedStudents) => {
//   const passedStudents = allStudents.filter(
//     (name) => !failedStudents.includes(name)
//   );

//   const message = passedStudents.map((name) => "Goog job, " + name);

//   return message;
// };

// const allStudents = ["Ann", "Tom", "Bob", "Kate"];
// const failedStudents = ["Tom", "Bob"];

// console.log(getMessagesForPassedStudent(allStudents, failedStudents));

/**
 * ############ ####### "########" ######## ######.
 * @short vesion
 * @filter + map {String} buttonTag ### "########".
 */

 const getMessagesForPassedStudent = (allStudents, failedStudents) =>
 allStudents
   .filter((name) => !failedStudents.includes(name))
   .map((name) => "Goog job, " + name);

const allStudents = ["Ann", "Tom", "Bob", "Kate"];
const failedStudents = ["Tom", "Bob"];

console.log(getMessagesForPassedStudent(allStudents, failedStudents));