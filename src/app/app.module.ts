import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';



import { NoteDialogComponent } from './note-dialog/note-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NoteDialogComponent],
})
export class AppModule { }
