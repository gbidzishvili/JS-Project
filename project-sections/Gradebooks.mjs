import { validatePupil, validateId, validateRecord } from "./validations.mjs";
export class Gradebooks {
  constructor(groups, teachers, lms) {
    const map = new Map();
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
    this.map = map;
  }
  add(groupid) {
    validateId(groupid);
    this.map.set(groupid, []);
    return this.map.get(groupid);
  }
  clear(und) {
    if (und !== undefined) throw new Error("clear must be empty");
    this.map.clear();
    // console.log(this.map);
  }
  addRecord(gradebookId, record) {
    // console.log(this.map);
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
        // this.map.set(gradebookId, { name: student });
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
    this.map.get(gradebookId).push(obj);

    // console.log(this.map.get(gradebookId)[0]);
  }
  read(gradebookId, pupilId) {
    validateId(gradebookId);
    validateId(pupilId);
    // console.log(this.map.get(gradebookId));
    let readObj;
    this.map.get(gradebookId).forEach((value, key) => {
      if (value.pupilId === pupilId) readObj = value.body;
    });
    return readObj;
  }
  readAll(gradebookId) {
    validateId(gradebookId);
    const objArray = [];
    this.map.get(gradebookId).forEach((value, key, ownMap) => {
      // console.log(value.body);
      objArray.push(value.body);
    });
    // console.log(objArray);
    return objArray;
  }
}
