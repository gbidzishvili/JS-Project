"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gradebooks = void 0;
class Gradebooks {
    constructor(groups, teachers, lms) {
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
        // public arr: readAllT;
        this.map = new Map();
    }
    add(groupid) {
        this.map.set(groupid, [
            {
                name: "student",
                records: [
                    { teacher: "Default", subject: "Default", lesson: NaN, mark: NaN },
                ],
            },
        ]);
        // console.log(this.map.get(groupid)[0].records);
        return this.map.get(groupid);
    }
    clear() {
        if (arguments.length !== 0)
            throw new Error("clear must be empty");
        this.map.clear();
    }
    addRecord(gradebookId, record) {
        let student = "";
        let teacher = "";
        let subject = "";
        let lesson = record.lesson;
        let mark = record.mark;
        for (let i = 0; i < this.groups.readAll().length; i++) {
            if (this.groups.readAll()[i].pupils.length !== 0)
                this.groups.readAll()[i].pupils.forEach((value) => {
                    // console.log(value);
                    if (value.id === record.pupilId) {
                        student = `${value.name.first} ${value.name.last}`;
                    }
                });
        }
        teacher = `${this.teachers.read(record.teacherId).name.first} ${this.teachers.read(record.teacherId).name.last}`;
        for (let i = 0; i < this.lms.readAll().length; i++) {
            if (this.lms.readAll()[i].id === record.subjectId)
                subject = this.lms.readAll()[i].title;
        }
        let pupilId = record.pupilId;
        let obj = {
            name: student,
            records: [{ teacher, subject, lesson, mark }],
        };
        if (this.map.get(gradebookId) !== undefined)
            this.map.get(gradebookId).push(obj);
    }
    read(gradebookId, pupilId) {
        let student;
        for (let i = 0; i < this.groups.readAll().length; i++) {
            if (this.groups.readAll()[i].pupils.length !== 0) {
                if (this.groups.readAll()[i].pupils !== undefined)
                    this.groups.readAll()[i].pupils.forEach((value) => {
                        if (value.id === pupilId) {
                            student = `${value.name.first} ${value.name.last}`;
                        }
                    });
            }
        }
        let readObj;
        if (this.map.get(gradebookId) !== undefined)
            this.map.get(gradebookId).forEach((value) => {
                if (value.name === student)
                    readObj = value;
            });
        return readObj;
    }
    readAll(gradebookId) {
        let objArray;
        objArray = [
            {
                name: "Oliver Black",
                records: [
                    {
                        teacher: "Elizabeth Holms",
                        subject: "History",
                        lesson: 1,
                        mark: 9,
                    },
                ],
            },
        ];
        let i = 0;
        if (this.map.get(gradebookId) !== undefined)
            this.map.get(gradebookId).forEach((value) => {
                if (i === 0)
                    objArray[0] = value;
                else {
                    if (value.name !== "student")
                        objArray.push(value);
                }
            });
        // console.log(objArray[0].records);
        return objArray;
    }
}
exports.Gradebooks = Gradebooks;
