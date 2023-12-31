interface DirectorInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workDirectorTasks(): string;   
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workTeacherTasks(): string;   
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  else return new Director();
}

function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) console.log(employee.workDirectorTasks());
  else console.log(employee.workTeacherTasks());
}

//literal type
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    console.log("Teaching Math");
  } else {
    console.log("Teaching History");
  }
}


//Exercise 7:
teachClass('Math'); // Teaching Math
teachClass('History'); // Teaching History


//Exercise 6
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); //Getting to director tasks

//Exercise 5
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
