import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  base_path = 'http://localhost:3000/students';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(
      this.base_path,
      JSON.stringify(student),
      this.httpOptions
    );
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(this.base_path + '/' + id);
  }

  getListStudent(): Observable<Student> {
    return this.http.get<Student>(this.base_path);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(
      this.base_path + '/' + id,
      JSON.stringify(student),
      this.httpOptions
    );
  }

  deleteStudent(id: BigInteger) {
    return this.http
      .delete(this.base_path + '/' + id, this.httpOptions)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
