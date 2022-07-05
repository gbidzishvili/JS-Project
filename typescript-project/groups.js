"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = void 0;
class Groups {
    constructor() {
        this.map = new Map();
    }
    // constructor(
    // ) {}
    add(room) {
        // validateRoom(room);
        const groupId = Math.random().toString().slice(2);
        this.map.set(groupId, { id: groupId, room, pupils: [] });
        return groupId;
    }
    addPupil(groupId, pupil) {
        // validatePupil(pupil);
        // validateId(groupId);
        if (this.map.get(groupId) !== undefined)
            this.map.get(groupId).pupils.push(pupil);
    }
    removePupil(groupId, pupilId) {
        const remains = [];
        this.map.get(groupId).pupils.forEach((value, key, obj) => {
            if (value.id !== pupilId) {
                remains.push(value);
            }
        });
        this.map.get(groupId).pupils = remains;
    }
    update(groupId, obj) {
        const old = Object.assign({}, this.map.get(groupId));
        const spreaded = Object.assign({}, obj);
        const updated = Object.assign(Object.assign({}, old), spreaded);
        this.map.set(groupId, updated);
        return updated;
    }
    read(groupId) {
        return this.map.get(groupId);
    }
    readAll() {
        // let public arr: readAllT
        if (arguments.length !== 0)
            throw new Error("readAll must be empty");
        this.arr = [
            {
                id: "7610163988037475",
                room: NaN,
                pupils: [
                    {
                        name: { first: "ann", last: "salvador" },
                        dateOfBirth: "11-31-1975",
                        phones: [
                            {
                                phone: "string",
                                primary: true,
                            },
                        ],
                        sex: "male",
                        id: "9636383839655223",
                    },
                ],
            },
        ];
        // console.log(this.arr);
        let i = 0;
        this.map.forEach((value) => {
            if (i === 0)
                this.arr[0] = value;
            else {
                this.arr.push(value);
            }
            i++;
            // console.log(this.arr, value);
        });
        return this.arr;
    }
}
exports.Groups = Groups;
// const groups = new Groups();
// // Create a new group. add methods takes integer as a parameter. returns id of group
// const groupId = groups.add(200);
// console.log(groupId);
// // Add this pupil to this group
// groups.addPupil(groupId, {
//   name: { first: "guram", last: "guramishvili" },
//   dateOfBirth: "11-31-1975",
//   phones: [
//     {
//       phone: "557 84 84 96",
//       primary: true,
//     },
//     {
//       phone: "555 77 55 33",
//       primary: false,
//     },
//   ],
//   sex: "male", // male or female
// });
// // Remove this pupil from this group
// // groups.removePupil(groupId, pupil.id);
// // Update room for this group
// // groups.update(groupId, {
// //   room: 237,
// // });
// // Read information about group
// // console.log(groups.read(groupId));
// // {
// //   id: 'JEF5H43H',
// //   room: 237,
// //   pupils:[], // array of pupils.
// // }
// // It will return array of groups
// // groups.readAll()
