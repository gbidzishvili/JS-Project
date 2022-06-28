import {
  validateName,
  validateDateOfBirth,
  validateEmails,
  validatePhones,
  validateSex,
  validateSubject,
  validatedescription,
  validateId,
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
    validateId(teacherId);
    // console.log(map.get(teacherId));
    return map.get(teacherId);
  }
  update(teacherId, updatedProfile) {
    validateId(teacherId);
    if (updatedProfile.name !== undefined) validateName(updatedProfile.name);
    if (updatedProfile.dateOfBirth !== undefined)
      validateDateOfBirth(updatedProfile.dateOfBirth);
    if (updatedProfile.emails !== undefined)
      validateEmails(updatedProfile.emails);
    if (updatedProfile.phones !== undefined)
      validatePhones(updatedProfile.phones);
    if (updatedProfile.sex !== undefined) validateSex(updatedProfile.sex);
    if (updatedProfile.subjects !== undefined)
      validateSubject(updatedProfile.subjects);
    if (updatedProfile.description !== undefined)
      validatedescription(updatedProfile.description);
    const old = { ...map.get(teacherId) };
    const spreaded = { ...updatedProfile };
    const updated = { ...old, ...spreaded };
    map.set(teacherId, updated);
    // console.log(updated);
    return updated;
  }
  remove(teacherId) {
    validateId(teacherId);
    // console.log(map.get(teacherId));
    map.delete(teacherId);
  }
}
