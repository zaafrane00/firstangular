import { Component, OnInit } from '@angular/core';

interface Student {
  name: string;
  lastname: string;
  email: string;
  birthdate: string;
}
const STUDENTSTAB: Student[] = [
  {
    name: 'hamza',
    lastname: 'zaafrane',
    email: 'zaafranehamza@gmail.com',
    birthdate: '24/10/1997',
  },
  {
    name: 'hamza2',
    lastname: 'zaafrane2',
    email: 'zaafranehamza2@gmail.com',
    birthdate: '24/10/1996',
  },
  {
    name: 'hamza3',
    lastname: 'zaafrane3',
    email: 'zaafranehamza3@gmail.com',
    birthdate: '24/10/1998',
  },
  {
    name: 'hamza4',
    lastname: 'zaafrane4',
    email: 'zaafranehamza4@gmail.com',
    birthdate: '24/10/1995',
  },
];
@Component({
  selector: '[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  hello2 = true;
  testv = ' ';
  students = STUDENTSTAB;
  onClick() {
    alert(this.testv);
  }
}
