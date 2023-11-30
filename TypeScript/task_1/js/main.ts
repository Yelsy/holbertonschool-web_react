interface Teacher {
  //set during initialization of an object, readonly
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number, //Optional
  location: string,
  [key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
  firstName: string, 
  lastname: string,
}

function printTeacher (firstName: Teacher["firstName"], lastName: Teacher["lastName"]) {
  const sliptFirstName = firstName.split('');
  const firstElement = sliptFirstName[0];
  return (`${firstElement}.${lastName}`);
}

interface student {
  firstName: string,
  lastName: string,
}

class StudentClass implements student {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
 
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
  
}
