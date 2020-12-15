import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './father/son/son.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentComponent } from './add-student/add-student.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    AboutComponent,
    StudentComponent,
    FatherComponent,
    SonComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
