import {
  validateName,
  validateDateOfBirth,
  validateEmails,
  validatePhones,
  validateSex,
  validateSubject,
  validatedescription,
} from "./validations.mjs";
let map = new Map();
export class Teachers {
  constructor() {}
  add(teacher) {
    validateName(teacher.name);
    validateDateOfBirth(teacher.dateOfBirth);
    validateEmails(teacher.emails);
    validatePhones(teacher.phones);
    validateSex(teacher.sex);
    validateSubject(teacher.subjects);
    validatedescription(teacher.description);
    let teacherId = Math.random().toString().slice(2);
    map.set(teacherId, teacher);
    return teacherId;
  }
  read(teacherId) {
    // console.log(map.get(teacherId));
    return map.get(teacherId);
  }
  update(teacherId, updatedProfile) {
    const old = { ...map.get(teacherId) };
    const spreaded = { ...updatedProfile };
    const updated = { ...old, ...spreaded };
    map.set(teacherId, updated);
    // console.log(updated);
    return updated;
  }
}
