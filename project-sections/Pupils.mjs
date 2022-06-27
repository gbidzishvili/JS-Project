import {
  validateId,
  validatePupil,
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
    validatePupil(pupil);
    let pupilId = Math.random().toString().slice(2);
    pupil.id = pupilId;
    map.set(pupilId, pupil);
    return map.get(pupilId);
  }
  read(pupilId) {
    validateId(pupilId);
    // console.log(map.get(pupilId));
    return map.get(pupilId);
  }
  update(pupilId, updatedProfile) {
    validateId(pupilId);
    if (updatedProfile.name !== undefined) validateName(updatedProfile.name);
    if (updatedProfile.dateOfBirth !== undefined)
      validateDateOfBirth(updatedProfile.dateOfBirth);
    if (updatedProfile.phones !== undefined)
      validatePhones(updatedProfile.phones);
    if (updatedProfile.sex !== undefined) validateSex(updatedProfile.sex);
    if (updatedProfile.description !== undefined)
      validatedescription(updatedProfile.description);
    const old = { ...map.get(pupilId) };
    const spreaded = { ...updatedProfile };
    const updated = { ...old, ...spreaded };
    map.set(pupilId, updated);
    // console.log(updated);
    return updated;
  }
  remove(pupilId) {
    validateId(pupilId);
    map.delete(pupilId);
  }
}
