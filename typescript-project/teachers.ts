// let map = new Map();
type teacherT = {
  name: {
    first: string;
    last: string;
  };
  dateOfBirth: string;
  emails: {
    email: string;
    primary: boolean;
  }[];
  phones: {
    phone: string;
    primary: boolean;
  }[];
  sex: string;
  subjects: [
    {
      subject: string;
    }
  ];
  description?: string;
};
interface intAdd {
  add(teacher: teacherT): string;
  read(teacherId: string): teacherT;
  update<T>(teacherId: string, updatedProfile: T): T;
  remove(teacherId: string): void;
}
export class Teachers implements intAdd {
  public map = new Map<string, teacherT>();
  constructor() {}
  add(teacher: teacherT) {
    let teacherId = Math.random().toString().slice(2);
    this.map.set(teacherId, teacher);
    return teacherId;
  }
  read(teacherId: string) {
    return this.map.get(teacherId);
  }
  update<teacherT>(teacherId: string, updatedProfile: teacherT) {
    const old = { ...this.map.get(teacherId) };
    const spreaded = { ...updatedProfile };
    const updated = { ...old, ...spreaded };
    this.map.set(teacherId, updated);
    return updated;
  }
  remove(teacherId: string) {
    this.map.delete(teacherId);
  }
}
