const map = new Map();
class Subject {
  constructor({ title, lessons, description }) {
    if (typeof title !== "string")
      throw new Error("title's type must be string");
    if (typeof lessons !== "number")
      throw new Error("lessons's type must be number");
    if (typeof description !== undefined && typeof description !== "string")
      throw new Error("description's type is wrong");
    this.title = title;
    this.lessons = lessons;
    this.description = description;
    this.id = Math.random().toString().slice(2);
  }
}
const history = new Subject({
  title: "History",
  lessons: 24,
  description: "",
});
// console.log(history);
// console.log(history.lessons);
// console.log(history.id);

class LMS {
  add(subject) {
    map.set(subject.id, subject);
  }
  remove(subject) {
    map.delete(subject.id);
  }
  verify(subject) {
    return map.has(subject.id);
  }
  readAll(und) {
    if (und !== undefined) throw new Error("readAll must be empty");
    const subjectsArray = [];
    map.forEach((value, key, ownMap) => {
      // console.log(key, value);
      subjectsArray.push(value);
    });
    console.log(subjectsArray);
    return subjectsArray;
  }
}

const lms = new LMS();
lms.add(history); // should add subject to lms
// lms.remove(history); // should remove subject from lms
// console.log(lms.verify(history));
// lms.readAll();
