//# Task one

console.log("");
console.log("-----------");
console.log("");

const data = {
  name: "France",
  continent: "Europe",
  currency: "Euro",
  population: "68 million",
};

class Country {
  constructor(name, cont, pop, curr) {
    this.name = name;
    this.cont = cont;
    this.pop = pop;
    this.curr = curr;
  }
  getOverview() {
    console.log(
      `${this.name} is a country in ${this.cont}. It's currency is the ${this.curr} and it has a current population of ${this.pop}`
    );
  }
  setPopulationSize(newSize) {
    this.pop = newSize;
  }
}

const country = new Country(
  data.name,
  data.continent,
  data.population,
  data.currency
);
country.getOverview();
country.setPopulationSize("72 million");
country.getOverview();

//# End of task one

console.log("");
console.log("-----------");
console.log("");

//# Task two
const register = [
  { name: "jeff", grades: [97, 87, 99] },
  { name: "john", grades: [75, 22, 85] },
  { name: "james", grades: [64, 77, 90] },
];

const teacher = "ms x";

class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }

  calcGPA() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return Math.floor(total / this.grades.length);
  }
  getGrades() {
    return this.grades;
  }
  checkPassing() {
    let gpa = this.calcGPA();
    return gpa > 70;
  }
}
class CourseRegister {
  constructor(register, teacher) {
    this.register = register.map(
      (student) => new Student(student.name, student.grades)
    );
    this.teacher = teacher;
  }
  student() {
    return this.register;
  }

  getStudents() {
    return this.register;
  }
}

const courseRegister = new CourseRegister(register, teacher);
const students = courseRegister.getStudents();

console.log(students);

students.forEach((student) => {
  console.log(
    `${student.name} is ${student.checkPassing() ? "Passing" : "Not Passing"}`
  );
});
//# End task two
console.log("");
console.log("-----------");
console.log("");
