import { Groups } from "./groups";
import { Teachers } from "./teachers";
import { LMS } from "./lms";
type PupilT = {
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string; // format date
  phones: {
    phone: string;
    primary: boolean;
  }[];
  sex: string; // male OR female
  id?: string;
};
type groupsT = {
  id: string;
  room: number;
  pupils: PupilT[]; // array of pupils.
};
type gradebookT = {
  name: string;
  records:
    | {
        teacher: string;
        subject: string;
        lesson: number;
        mark: number;
      }[];
};
type teacherT = {
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string;
  emails: {
    email: string;
    primary: boolean;
  }[];
  phones: {
    phone: string;
    primary: boolean;
  }[];
  sex: string;
  subjects: [
    {
      subject: string;
    }
  ];
  description?: string;
};
type subjectType = {
  title: string;
  lessons: number;
  description?: string;
};
type recordT = {
  pupilId: string;
  teacherId: string;
  subjectId: string;
  lesson: number;
  mark: number;
};
type objT<T, N> = {
  name: T;
  records: {
    teacher: T;
    subject: T;
    lesson: N;
    mark: N;
  }[];
}[];
type reacobjT = {
  name: string;
  records: {
    teacher: string;
    subject: string;
    lesson: number;
    mark: number;
  }[];
};
interface intAdd {
  add(groupid: string): reacobjT[];
  clear(): void;
  addRecord(gradebookId: string, record: recordT): void;
  read(gradebookId: string, pupilId: string): reacobjT;
  // readAll(gradebookId: string):
}
export class Gradebooks implements intAdd {
  // public arr: readAllT;
  public map = new Map<string, objT<string, number>>();
  constructor(
    public groups: Groups,
    public teachers: Teachers,
    public lms: LMS
  ) {}
  add(groupid: string) {
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
    if (arguments.length !== 0) throw new Error("clear must be empty");
    this.map.clear();
  }
  addRecord(gradebookId: string, record: recordT) {
    let student = "";
    let teacher = "";
    let subject = "";
    let lesson = record.lesson;
    let mark = record.mark;
    for (let i = 0; i < this.groups.readAll().length; i++) {
      if (this.groups.readAll()[i].pupils.length !== 0)
        this.groups.readAll()[i].pupils.forEach((value: PupilT) => {
          // console.log(value);
          if (value.id === record.pupilId) {
            student = `${value.name.first} ${value.name.last}`;
          }
        });
    }
    teacher = `${this.teachers.read(record.teacherId).name.first} ${
      this.teachers.read(record.teacherId).name.last
    }`;

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
  read(gradebookId: string, pupilId: string) {
    let student: string;
    for (let i = 0; i < this.groups.readAll().length; i++) {
      if (this.groups.readAll()[i].pupils.length !== 0) {
        if (this.groups.readAll()[i].pupils !== undefined)
          this.groups.readAll()[i].pupils.forEach((value: PupilT) => {
            if (value.id === pupilId) {
              student = `${value.name.first} ${value.name.last}`;
            }
          });
      }
    }
    let readObj: reacobjT;
    if (this.map.get(gradebookId) !== undefined)
      this.map.get(gradebookId).forEach((value: reacobjT) => {
        if (value.name === student) readObj = value;
      });
    return readObj;
  }
  readAll(gradebookId: string) {
    let objArray: [reacobjT];
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
        if (i === 0) objArray[0] = value;
        else {
          if (value.name !== "student") objArray.push(value);
        }
      });
    // console.log(objArray[0].records);
    return objArray;
  }
}
