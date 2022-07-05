"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
class Pupils {
  constructor() {
    this.map = new Map();
  }
  add(pupil) {
    let pupilId = Math.random().toString().slice(2);
    pupil.id = pupilId;
    this.map.set(pupilId, pupil);
    return this.map.get(pupilId);
  }
  read(pupilId) {
    return this.map.get(pupilId);
  }
  update(pupilId, updatedProfile) {
    const old = Object.assign({}, this.map.get(pupilId));
    const spreaded = Object.assign({}, updatedProfile);
    const updated = Object.assign(Object.assign({}, old), spreaded);
    this.map.set(pupilId, updated);
    return updated;
  }
  remove(pupilId) {
    this.map.delete(pupilId);
  }
}
exports.Pupils = Pupils;
//
