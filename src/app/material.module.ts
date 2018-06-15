import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";




@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatIconModule,MatDialogModule,HttpClientModule],
  exports: [MatButtonModule, MatToolbarModule,MatIconModule,MatDialogModule,HttpClientModule],
})
export class MaterialModule { }