import { Subject, LMS } from "./lms.mjs";
import { Teachers } from "./Teachers.mjs";
import { Pupils } from "./Pupils.mjs";
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
// };
// const teacherIdUpd = teachers.update(teacherId, updatedProfile);
// console.log(teacherIdUpd);
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
const pupils = new Pupils();
const pupil = pupils.add(pupil1);
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
