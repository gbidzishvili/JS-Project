import { validatePupil, validateId, validateRoom } from "./validations.mjs";
const room = 236;
export class Groups {
  constructor() {
    const map = new Map();
    this.map = map;
  }
  add(room) {
    validateRoom(room);
    const groupId = Math.random().toString().slice(2);
    this.map.set(groupId, { id: groupId, room, pupils: [] });
    return groupId;
  }
  addPupil(groupId, pupil) {
    validatePupil(pupil);
    validateId(groupId);
    this.map.get(groupId).pupils.push(pupil);
  }
  removePupil(groupId, pupilId) {
    validateId(groupId);
    validateId(pupilId);
    const remains = [];
    this.map.get(groupId).pupils.forEach((value, key, obj) => {
      if (value.id !== pupilId) {
        remains.push(value);
      }
    });
    this.map.get(groupId).pupils = remains;
  }
  update(groupId, obj) {
    validateId(groupId);
    if (obj.room !== undefined) validateRoom(obj.room);
    validateRoom(obj.room);
    const old = { ...this.map.get(groupId) };
    const spreaded = { ...obj };
    const updated = { ...old, ...spreaded };
    this.map.set(groupId, updated);
    // console.log(updated);
    return updated;
  }
  read(groupId) {
    validateId(groupId);
    // console.log(this.map.get(groupId));

    return this.map.get(groupId);
  }
  readAll(und) {
    if (und !== undefined) throw new Error("readAll must be empty");
    const arr = [];
    this.map.forEach((value, key, obj) => {
      arr.push(value);
    });
    // console.log(arr);
    return arr;
  }
}

// const groups = new Groups();

// Create a new group. add methods takes integer as a parameter. returns id of group
// const groupId = groups.add(room);
// console.log(groupId);
// Add this pupil to this group
// groups.addPupil(groupId, pupil);
// Remove this pupil from this group
// groups.removePupil(groupId, pupil.id);

// Update room for this group
// groups.update(groupId, {
//   room: 237,
// });

// Read information about group
// groups.read(groupId);
// {
//   id: 'JEF5H43H',
//   room: 237,
//   pupils:[], // array of pupils.
// }

// It will return array of groups
// groups.readAll()
