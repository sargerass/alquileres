import { AppMaterialModule } from './../material-modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentsLayoutComponent } from './departaments-layout/departaments-layout.component';

//import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DepartamentsLayoutComponent],
  imports: [
    CommonModule, AppMaterialModule
  ]
})
export class DepartamentsModule { }
