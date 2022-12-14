import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';


const material = [
  MatTabsModule,
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],

  exports: [
    material
  ]
})
export class MatModule { }
