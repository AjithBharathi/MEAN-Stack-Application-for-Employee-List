import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
MatExpansionModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatListModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DisplayEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatListModule

  ],
  exports: [DisplayEmployeeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
