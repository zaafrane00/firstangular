import { StudentService } from './../services/student-service.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student = new Student(0, '', '', '', '');

  constructor(public studentservice: StudentService, private router: Router) {}
  submitcreate() {
    console.log(this.student);
    this.studentservice.createStudent(this.student).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {}
}
