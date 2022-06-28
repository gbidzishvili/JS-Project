import {
  validateTitle,
  validateLessons,
  validatedescription,
} from "./validations.mjs";
const map = new Map();
export class Subject {
  constructor(subject) {
    validateTitle(subject.title);
    validateLessons(subject.lessons);
    validatedescription(subject.description);
    this.title = subject.title;
    this.lessons = subject.lessons;
    if (subject.description !== undefined) {
      this.description = subject.description;
    }
    let subjectId = Math.random().toString().slice(2);
    this.id = subjectId;
  }
}
export class LMS {
  add(subject) {
    validateTitle(subject.title);
    validateLessons(subject.lessons);
    validatedescription(subject.description);
    map.set(subject.id, subject);
  }
  remove(subject) {
    validateTitle(subject.title);
    validateLessons(subject.lessons);
    validatedescription(subject.description);
    map.delete(subject.id);
  }
  verify(subject) {
    validateTitle(subject.title);
    validateLessons(subject.lessons);
    validatedescription(subject.description);
    return map.has(subject.id);
  }
  readAll(und) {
    if (und !== undefined) throw new Error("readAll must be empty");
    const subjectsArray = [];
    map.forEach((value, key, ownMap) => {
      subjectsArray.push(value);
    });
    // console.log(subjectsArray);
    return subjectsArray;
  }
}

const history = new Subject({
  title: "History",
  lessons: 24,
  // description: "history is savage",
});
const Biology = new Subject({
  title: "Biology",
  lessons: 18,
  description: "history is savage",
});
// console.log(history);
// console.log(Biology);
// console.log(history.lessons);
// console.log(history.id);
// const lms = new LMS();
// lms.add(history); // should add subject to lms
// lms.add(Biology); // should add subject to lms
// lms.remove(history); // should remove subject from lms
// console.log(lms.verify(history));
// lms.readAll();
