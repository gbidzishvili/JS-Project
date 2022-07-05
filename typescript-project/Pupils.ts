// let map = new Map();
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
interface intAdd {
  add(pupil: PupilT): PupilT;
  read(pupilId: string): PupilT;
  update<T>(pupilId: string, updatedProfile: T): T;
  remove(pupilId: string): void;
}
export class Pupils implements intAdd {
  public map = new Map<string, PupilT>();
  id: string;
  constructor() {}
  add(pupil: PupilT): PupilT {
    let pupilId = Math.random().toString().slice(2);
    pupil.id = pupilId;
    this.map.set(pupilId, pupil);
    return this.map.get(pupilId);
  }
  read(pupilId: string): PupilT {
    return this.map.get(pupilId);
  }
  update<PupilT>(pupilId: string, updatedProfile: PupilT): PupilT {
    const old = { ...this.map.get(pupilId) };
    const spreaded = { ...updatedProfile };
    const updated = { ...old, ...spreaded };
    this.map.set(pupilId, updated);
    return updated;
  }
  remove(pupilId: string): void {
    this.map.delete(pupilId);
  }
}
