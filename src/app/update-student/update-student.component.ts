import { Component, OnInit } from '@angular/core';
import { Student } from './../student';
import { StudentService } from './../services/student-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  student: any;
  constructor(
    public studentservice: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: number = 0;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.studentservice.getStudent(this.id).subscribe((res) => {
      console.log(this.student);
      console.log('sd', res);

      this.student = res;
      console.log('res', this.student);
    });
  }

  submitUpdate() {
    this.studentservice
      .updateStudent(this.id, this.student)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/']);
      });

    this.studentservice.getListStudent();
  }
}
