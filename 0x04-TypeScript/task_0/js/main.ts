interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Tolu',
  lastName: 'Otayomi',
  age: 23,
  location: 'Nigeria',
};

const student2: Student = {
  firstName: 'Victor',
  lastName: 'Void',
  age: 24,
  location: 'Lagos, Nigeria',
};

const studentsList: Student[] = [student1, student2];

// Create a table and append it to the body
const table = document.createElement('table');
const tbody = document.createElement('tbody');

