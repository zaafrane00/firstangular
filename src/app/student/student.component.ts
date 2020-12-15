import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StudentService } from './../services/student-service.service';

@Component({
  selector: '[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: any;
  constructor(public studentservice: StudentService, private route: Router) {
    this.students = [];
  }

  ngOnInit(): void {
    this.studentservice.getListStudent().subscribe((res) => {
      console.log(res);
      this.students = res;
    });
  }
  hello2 = true;
  testv = ' ';

  onClick() {
    alert(this.testv);
  }

  delete(id: BigInteger) {
    this.studentservice.deleteStudent(id);
    this.route.navigate(['']);
    this.studentservice.getListStudent().subscribe((res) => {
      console.log(res);
      this.students = res;
    });
  }
}
