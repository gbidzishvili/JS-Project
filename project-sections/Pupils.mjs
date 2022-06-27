import {
  validateName,
  validateDateOfBirth,
  validatePhones,
  validateSex,
  validatedescription,
} from "./validations.mjs";
let map = new Map();
export class Pupils {
  constructor() {}
  add(pupil) {
    validateName(pupil.name);
    validateDateOfBirth(pupil.dateOfBirth);
    validatePhones(pupil.phones);
    validateSex(pupil.sex);
    validatedescription(pupil.description);
    let pupilId = Math.random().toString().slice(2);
    pupil.id = pupilId;
    map.set(pupilId, pupil);
    return map.get(pupilId);
  }
  read(pupilId) {
    // console.log(map.get(pupilId));
    return map.get(pupilId);
  }
  update(pupilId, updatedProfile) {
    const old = { ...map.get(pupilId) };
    const spreaded = { ...updatedProfile };
    const updated = { ...old, ...spreaded };
    map.set(pupilId, updated);
    // console.log(updated);
    return updated;
  }
  remove(pupilId) {
    map.delete(pupilId);
  }
}
