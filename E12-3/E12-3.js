const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (type, id) {
    for (let k of this[type]) if (k.id === id) return k;
  },
  assignStudent: function (id, subj) {
    for (let teach of this.teachers) {
      for (let i = 0; i < teach.subjects.length; i++) {
        if (teach.subjects[i] === subj && teach.capacityLeft > 0) {
          let studname = this.students[i].name;
          teach.students.push(studname);
          teach.capacityLeft--;
        } else if (teach.capacityLeft === 0)
          console.log("sorry were out of place");
      }
    }
  },
  assignTeachersSubject: function (id, newsubj) {
    this.findPerson("teachers", id).subjects.indexOf(newsubj) === -1
      ? this.findPerson("teachers", id).subjects.push(newsubj)
      : null;
    console.log(this.teachers);
  },
  nameAndAge: function (id) {
    console.log(
      `${this.findPerson("students", id).name} is ${
        this.findPerson("students", id).age
      } years old`
    );
  },
};
