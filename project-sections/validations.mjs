export function validateRoom(room) {
  if (typeof room !== "number") throw new Error("room's type must be number");
}
export function validateId(id) {
  if (typeof id !== "string") throw new Error("id's type must be string");
}
export function validateTitle(title) {
  if (typeof title !== "string") throw new Error("title's type must be string");
}
export function validateLessons(lessons) {
  if (typeof lessons !== "number")
    throw new Error("lessons's type must be number");
}
export function validateName(name) {
  if (typeof name.first !== "string")
    throw new Error("firstname must be string");
  if (typeof name.last !== "string") throw new Error("lastname must be string");
}
export function validateDateOfBirth(dateOfBirth) {
  if (typeof dateOfBirth !== "string")
    throw new Error("dateOfBirth must be string");
  const res = /^(0[1-9]|1[0-2])\-([0-2]\d{1}|3[0-1])\-(19|20)\d{2}$/;
  if (!res.test(String(dateOfBirth).toLowerCase()))
    throw new Error("format of date must be mm-dd-yy(1900-20**)");
}
export function validateEmails(emails) {
  if (emails.length !== 0) {
    emails.forEach((value, key, arr) => {
      if (key === 0 && value.primary !== true)
        throw new Error("first email must be primary:true");
      if (key > 0 && value.primary !== false)
        throw new Error("secondary emails must be primary:false");
    });
  }
}
export function validatePhones(phones) {
  if (phones.length !== 0) {
    phones.forEach((value, key, arr) => {
      if (key === 0 && value.primary !== true)
        throw new Error("first phone must be primary:true");
      if (key > 0 && value.primary !== false)
        throw new Error("secondary phones must be primary:false");
    });
  }
}
export function validateSex(sex) {
  if (typeof sex !== "string") throw new Error("sex must be string");
  if (sex !== "male" && sex !== "female")
    throw new Error("sex must be male or female");
}
export function validateSubject(subjects) {
  if (subjects.length !== 0) {
    subjects.forEach((value, key, arr) => {
      if (typeof value.subject !== "string")
        throw new Error("subject's type must be string");
    });
  }
}
export function validatedescription(description) {
  if (typeof description !== "string" && description !== undefined) {
    throw new Error("description must be string");
  }
}
export function validatePupil(pupil) {
  validateName(pupil.name);
  validateDateOfBirth(pupil.dateOfBirth);
  validatePhones(pupil.phones);
  validateSex(pupil.sex);
}
export function validateRecord(record) {}
