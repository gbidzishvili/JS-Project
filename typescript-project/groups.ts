// import { validatePupil, validateId, validateRoom } from "./validations.mjs";
// const room = 236;
type PupilT = {
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string; // format date
  phones: {
    phone: string;
    primary: boolean;
  }[];

  sex: string; // male OR female
  id?: string;
};
type updObj = {
  room: number;
};
type updated = {
  room: number;
  id: string;
  pupils: PupilT[];
};
type readT = {
  id: string;
  room: number;
  pupils: PupilT[];
};
type readAllT = {
  id: string;
  room: number;
  pupils: PupilT[];
}[];
interface intAdd {
  add(room: number): string;
  addPupil(groupId: string, pupil: PupilT): void;
  removePupil(groupId: string, pupilId: string): void;
  update(groupId: string, obj: updObj): updated;
  read(groupId: string): readT;
  readAll(): readAllT;
}
export class Groups implements intAdd {
  public map = new Map<
    string,
    { id: string; room: number; pupils: PupilT[] }
  >();
  public arr: readAllT; //
  // constructor(

  // ) {}
  add(room: number) {
    // validateRoom(room);
    const groupId = Math.random().toString().slice(2);
    this.map.set(groupId, { id: groupId, room, pupils: [] });
    return groupId;
  }
  addPupil(groupId: string, pupil: PupilT) {
    // validatePupil(pupil);
    // validateId(groupId);
    if (this.map.get(groupId) !== undefined)
      this.map.get(groupId).pupils.push(pupil);
  }
  removePupil(groupId: string, pupilId: string) {
    const remains = [];
    this.map.get(groupId).pupils.forEach((value, key, obj) => {
      if (value.id !== pupilId) {
        remains.push(value);
      }
    });
    this.map.get(groupId).pupils = remains;
  }
  update(groupId: string, obj: updObj) {
    const old = { ...this.map.get(groupId) };
    const spreaded = { ...obj };
    const updated = { ...old, ...spreaded };
    this.map.set(groupId, updated);
    return updated;
  }
  read(groupId: string) {
    return this.map.get(groupId);
  }
  readAll() {
    // let public arr: readAllT
    if (arguments.length !== 0) throw new Error("readAll must be empty");
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
      if (i === 0) this.arr[0] = value;
      else {
        this.arr.push(value);
      }
      i++;
      // console.log(this.arr, value);
    });
    return this.arr;
  }
}

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
