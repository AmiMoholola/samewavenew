import { Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import { NoteDialogComponent } from './note-dialog/note-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Samewave';
  constructor(public dialog: MatDialog){}
  ngOnInit() {
    
  }
  openDialog(): void {
  let dialogRef = this.dialog.open(NoteDialogComponent, {
    width: '283px',
    panelClass: 'custom-dialog-container',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });

  }

  }


  



