"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = exports.Subject = void 0;
// let map = new Map<string, subjectType>();
// console.log(map);
class subjectModel {
}
class Subject extends subjectModel {
    constructor(subject) {
        super();
        this.title = subject.title;
        this.lessons = subject.lessons;
        if (this.description) {
            this.description = subject.description;
        }
        let subjectId = Math.random().toString().slice(2);
        this.id = subjectId;
    }
}
exports.Subject = Subject;
class LMS {
    constructor() {
        this.map = new Map();
    }
    // constructor(public map:){}
    add(subject) {
        this.map.set(subject.id, subject);
        // console.log(this.map.get(subject.id));
    }
    remove(subject) {
        // validateTitle(subject.title);
        // validateLessons(subject.lessons);
        // validatedescription(subject.description);
        this.map.delete(subject.id);
    }
    verify(subject) {
        // validateTitle(subject.title);
        // validateLessons(subject.lessons);
        // validatedescription(subject.description);
        return this.map.has(subject.id);
    }
    readAll() {
        if (arguments.length !== 0)
            throw new Error("readAll must be empty");
        let subjectsArray = [];
        this.map.forEach((value, key, ownMap) => {
            subjectsArray.push(value);
        });
        // console.log(subjectsArray);
        return subjectsArray;
    }
}
exports.LMS = LMS;
const history = new Subject({
    title: "History",
    lessons: 24,
    description: "history is savage",
});
// const Biology = new Subject({
//   title: "Biology",
//   lessons: 18,
//   description: "history is savage",
// });
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
