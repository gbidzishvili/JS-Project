import { Subject, LMS } from "./lms.mjs";
import { Teachers } from "./Teachers.mjs";
import { Pupils } from "./Pupils.mjs";
import { Groups } from "./Groups.mjs";
const history = new Subject({
  title: "History",
  lessons: 24,
  // description: "history is savage",
});
const Biology = new Subject({
  title: "Biology",
  lessons: 24,
  description: "history is savage",
});
// console.log(history);
// console.log(history.lessons);
// console.log(history.id);
// const lms = new LMS();
// lms.add(history); // should add subject to lms
// lms.add(Biology); // should add subject to lms
// lms.remove(history); // should remove subject from lms
// console.log(lms.verify(history));
// lms.readAll();
// /////////////////////////////////////////////////////
let teacher1 = {
  name: { first: "giorgi", last: "bidz" },
  dateOfBirth: "07-22-2000",
  emails: [
    {
      email: "teach@example.com",
      primary: true,
    },
    {
      email: "giorgi@example.com",
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
  sex: "male", // male or female
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
  sex: "male", // male or female
  subjects: [
    {
      subject: "history", // just name property of subject.
    },
  ],
};
const teachers = new Teachers();
const teacherId = teachers.add(teacher1);
// const teacher2Id = teachers.add(teacher2);
// console.log(teachers.read(teacherId));
// teachers.remove(teacherId);
// console.log(teachers.read(teacherId));
// teachers.read(teacherId);
// teachers.read(teacher2Id);
// update profile//////////////////
// const updatedProfile = {
//   name: { first: "ana", last: "jgenti" },
//   sex: "female",
// };
// const teacherIdUpd = teachers.update(teacherId, updatedProfile);
// console.log(teacherIdUpd);
// /////////////////////////////////////////////////////
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
  name: { first: "mariam", last: "vashakhmadze" },
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
  sex: "female", // male or female
};
const pupils = new Pupils();
const pupil = pupils.add(pupil1);
const pupil_2 = pupils.add(pupil2);
// console.log(pupil.id);
// // will return Pupils data including pupil's id
// console.log(pupils.read(pupil.id));
// // will update Pupil. This method should use the same validation as a add method
// const updatedProfile = {
//   name: { first: "nika", last: "lafachi" },
// };
// pupils.update(pupil.id, updatedProfile);
// console.log(pupils.read(pupil.id));
// // will remove pupil
// pupils.remove(pupil.id);
// console.log(pupils.read(pupil.id));
// //////////////////////////////////////////////////////////

const room = 236;
const groups = new Groups();
// Create a new group. add methods takes integer as a parameter. returns id of group
// const groupId = groups.add(room);
// const groupId2 = groups.add(700);
// // console.log(groupId);
// // Add this pupil to this group
// groups.addPupil(groupId, pupil1);
// groups.addPupil(groupId, pupil2);
// // Remove this pupil from this group
// groups.removePupil(groupId, pupil1.id);
// // Update room for this group
// groups.update(groupId, {
//   room: 857,
// });

// // Read information about group
// groups.read(groupId);
// // {
// //   id: 'JEF5H43H',
// //   room: 237,
// //   pupils:[], // array of pupils.
// // }

// // It will return array of groups
// groups.readAll();
