"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
class Teachers {
    constructor() {
        this.map = new Map();
    }
    add(teacher) {
        let teacherId = Math.random().toString().slice(2);
        this.map.set(teacherId, teacher);
        return teacherId;
    }
    read(teacherId) {
        return this.map.get(teacherId);
    }
    update(teacherId, updatedProfile) {
        const old = Object.assign({}, this.map.get(teacherId));
        const spreaded = Object.assign({}, updatedProfile);
        const updated = Object.assign(Object.assign({}, old), spreaded);
        this.map.set(teacherId, updated);
        return updated;
    }
    remove(teacherId) {
        this.map.delete(teacherId);
    }
}
exports.Teachers = Teachers;
