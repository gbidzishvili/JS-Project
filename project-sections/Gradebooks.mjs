import { validatePupil, validateId, validateRecord } from "./validations.mjs";
const map = new Map();
export class Gradebooks {
  constructor(groups, teachers, lms) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
  }
  add(groupid) {
    validateId(groupid);
    map.set(groupid, []);
  }
  clear(und) {
    if (und !== undefined) throw new Error("clear must be empty");
    map.clear();
    // console.log(map);
  }
  addRecord(gradebookId, record) {
    // console.log(map);
    validateId(gradebookId);
    validateRecord(record);
    let student = "";
    let teacher = "";
    let subject = "";
    let lesson = record.lesson;
    let mark = record.mark;
    for (let i = 0; i < this.groups.readAll().length; i++) {
      this.groups.readAll()[i].pupils.forEach((value, key, arr) => {
        if (value.id === record.pupilId) {
          student = `${value.name.first} ${value.name.last}`;
        }
        // map.set(gradebookId, { name: student });
      });
    }
    teacher = `${this.teachers.read(record.teacherId).name.first} ${
      this.teachers.read(record.teacherId).name.last
    }`;
    for (let i = 0; i < this.lms.readAll().length; i++) {
      if (this.lms.readAll()[i].id === record.subjectId)
        subject = this.lms.readAll()[i].title;
    }
    // const obj = { teacher, subject, lesson, mark };
    let pupilId = record.pupilId;
    let obj = {
      pupilId,
      body: {
        name: student,
        records: [{ teacher, subject, lesson, mark }],
      },
    };
    // console.log(obj);
    map.get(gradebookId).push(obj);

    // console.log(map.get(gradebookId)[0]);
  }
  read(gradebookId, pupilId) {
    validateId(gradebookId);
    validateId(pupilId);
    // console.log(map.get(gradebookId));
    map.get(gradebookId).forEach((value, key) => {
      if (value.pupilId === pupilId) console.log(value.body);
    });
  }
  readAll(gradebookId) {
    validateId(gradebookId);
    const objArray = [];
    map.get(gradebookId).forEach((value, key, ownMap) => {
      // console.log(value.body);
      objArray.push(value.body);
    });
    console.log(objArray);
    return objArray;
  }
}
