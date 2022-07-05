"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lms_1 = require("./lms");
const lms_2 = require("./lms");
const teachers_1 = require("./teachers");
const Pupils_1 = require(".//Pupils");
const groups_1 = require("./groups");
const gradebooks_1 = require("./gradebooks");
const history = new lms_1.Subject({
    title: "History",
    lessons: 24,
    description: "history is savage",
});
// const Biology = new Subject({
//   title: "Biology",
//   lessons: 18,
//   description: "history is savage",
// // });
// console.log(history);
const lms = new lms_2.LMS();
lms.add(history); // should add subject to lms
// lms.remove(history); // should add subject to lms
// console.log(lms.verify(history));
// console.log(lms.readAll());
// ////////////////////////////////
let teacher1 = {
    name: { first: "Elizabeth", last: "Holms" },
    dateOfBirth: "07-22-2000",
    emails: [
        {
            email: "teach@example.com",
            primary: true,
        },
        {
            email: "Elizabeth@example.com",
            primary: false,
        },
    ],
    phones: [
        {
            phone: "557 84 84 84",
            primary: true,
        },
        {
            phone: "558 55 55 55",
            primary: false,
        },
    ],
    sex: "female",
    subjects: [
        {
            subject: "Biology", // just name property of subject.
        },
    ],
    description: "description text",
};
let teacher2 = {
    name: { first: "saba", last: "someone" },
    dateOfBirth: "05-15-1990",
    emails: [
        {
            email: "teach@example.com",
            primary: true,
        },
        {
            email: "saba@example.com",
            primary: false,
        },
        {
            email: "sabaushka@example.com",
            primary: false,
        },
    ],
    phones: [
        {
            phone: "557 84 84 96",
            primary: true,
        },
        {
            phone: "555 77 55 33",
            primary: false,
        },
    ],
    sex: "male",
    subjects: [
        {
            subject: "history", // just name property of subject.
        },
    ],
};
const teachers = new teachers_1.Teachers();
const teacherId = teachers.add({
    name: { first: "Elizabeth", last: "Holms" },
    dateOfBirth: "07-22-2000",
    emails: [
        {
            email: "teach@example.com",
            primary: true,
        },
        {
            email: "Elizabeth@example.com",
            primary: false,
        },
    ],
    phones: [
        {
            phone: "557 84 84 84",
            primary: true,
        },
        {
            phone: "558 55 55 55",
            primary: false,
        },
    ],
    sex: "female",
    subjects: [
        {
            subject: "Biology", // just name property of subject.
        },
    ],
    description: "description text",
});
const teacher2Id = teachers.add({
    name: { first: "saba", last: "someone" },
    dateOfBirth: "05-15-1990",
    emails: [
        {
            email: "teach@example.com",
            primary: true,
        },
        {
            email: "saba@example.com",
            primary: false,
        },
        {
            email: "sabaushka@example.com",
            primary: false,
        },
    ],
    phones: [
        {
            phone: "557 84 84 96",
            primary: true,
        },
        {
            phone: "555 77 55 33",
            primary: false,
        },
    ],
    sex: "male",
    subjects: [
        {
            subject: "history", // just name property of subject.
        },
    ],
});
// console.log(teacherId);
// console.log(teachers.read(teacherId));
// teachers.read(teacherId);
// teachers.read(teacher2Id);
// update Teachers profile//////////////////
const updatedProfile = {
    name: { first: "ana", last: "jgenti" },
    // sex: "female",
};
const teacherIdUpd = teachers.update(teacherId, updatedProfile);
// console.log(teacherIdUpd);
// teachers.remove(teacher2Id);
// /////////////////////////////////////
let pupil1 = {
    name: { first: "guram", last: "guramishvili" },
    dateOfBirth: "11-31-1975",
    phones: [
        {
            phone: "557 84 84 96",
            primary: true,
        },
        {
            phone: "555 77 55 33",
            primary: false,
        },
    ],
    sex: "male", // male or female
};
let pupil2 = {
    name: { first: "Oliver", last: "Black" },
    dateOfBirth: "11-31-1975",
    phones: [
        {
            phone: "11-31-1975",
            primary: "11-31-1975",
        },
        {
            phone: "555 77 55 33",
            primary: false,
        },
    ],
    sex: "male", // male or female
};
let pupils = new Pupils_1.Pupils();
let pupil = pupils.add({
    name: {
        first: "Oliver",
        last: "Black",
    },
    dateOfBirth: "11-31-1975",
    phones: [
        {
            phone: "11-31-1975",
            primary: true,
        },
        {
            phone: "555 77 55 33",
            primary: false,
        },
    ],
    sex: "male", // male OR female
});
// const pupil_2 = pupils.add(pupil2);
// console.log(pupil.id, pupil);
// // will return Pupils data including pupil's id
// console.log(pupils.read(pupil.id));
// // // will update Pupil. This method should use the same validation as a add method
const updatedProfile2 = {
    name: { first: "nika", last: "lafachi" },
};
// pupils.update(pupil.id, updatedProfile2);
// console.log(pupils.read(pupil.id));
// will remove pupil
// pupils.remove(pupil.id);
// console.log(pupils.read(pupil.id));
// ///////////////////
const groups = new groups_1.Groups();
// Create a new group. add methods takes integer as a parameter. returns id of group
const groupId = groups.add(200);
// console.log(groupId);
// Add this pupil to this group
groups.addPupil(groupId, pupil);
// Remove this pupil from this group
// groups.removePupil(groupId, pupil.id);
// Update room for this group
// groups.update(groupId, {
//   room: 237,
// });
// Read information about group
// console.log(groups.read(groupId));
// {
//   id: 'JEF5H43H',
//   room: 237,
//   pupils:[], // array of pupils.
// }
// It will return array of groups
// console.log(groups.readAll());
// console.log(groups);
// ////////////////////////////////////////////////
const pupilId = pupil.id;
// console.log(pupilId,);
const teacherId1 = teacherId;
// console.log(teacherId1);
const gradebooks = new gradebooks_1.Gradebooks(groups, teachers, lms);
// Create a new gradebook.
const gradebook = gradebooks.add(groupId);
// console.log(gradebook);
let gradebookId = groupId;
// console.log(groupId);
// // Destroy all data inside this gradebook
// gradebooks.clear();
// console.log(gradebook);
// // shceme of a record. all fields are required.
const record = {
    pupilId: pupilId,
    teacherId: teacherId,
    subjectId: history.id,
    lesson: 1,
    mark: 9,
};
gradebooks.addRecord(gradebookId, record);
// // Read information about oliver results
const oliver = gradebooks.read(gradebookId, pupilId);
console.log(oliver);
// {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }
// // Read information about all students in this gradebook
const students = gradebooks.readAll(gradebookId); // It will return the array of objects
console.log(students);
