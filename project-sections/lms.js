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
console.log(history.title);
console.log(history.lessons);
console.log(history.id);
