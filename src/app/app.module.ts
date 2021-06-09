import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputFieldComponent } from './input-field/input-field.component';
import { Routes, RouterModule } from '@angular/router';
import { TableDataComponent } from './table-data/table-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ApiDataService } from './api-data.service'


const routes: Routes = [
  { path: 'home', component: TableDataComponent },
  { path: 'input', component: InputFieldComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'input/:id', component: InputFieldComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    TableDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
