import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.css']
})
export class NoteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        "exclamation-circle",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/icon-exclamation-circle.svg")
      );

      this.matIconRegistry.addSvgIcon(
        "tick-circle",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/icon-tick-circle.svg")
      );
      
     }

      dialog_heading:string = "";
      dialog_content:string = "";
      dialog_button_wording:string = "";
      dialog_icon_name:string = "";
      dialog_icon_colour:string = "";
      dialog_graphic_name:string ="";
      getvalues:object = {};
      
  ngOnInit()
  
  {

    let the_heading:string = "Please note";
    let the_content:string = "The values you have entered as future targets will be deleted if you change the frequency of this promise.";
    let the_button:string = "Got It";
    let icon_name:string = "exclamation-circle";
    let icon_color:string = "#ED4444";
    //let graphic_name:string = "graphic-stream-editor.svg";
    let graphic_name:string = "";
    
      /*
      Notes

      line 40 to line 46 is just there to simulate how to pass the variables to the function, it is not necessary
      but it creates easy layout for testing, alternativily you can just pass the values directly in the function as
      shown in line 67, this will also render the dynamic dialog with diffrent values.

      The diolog will render both icons and graphics, but will not render an icon and graphic as the same time, as this
      will be confusing to the user, there is a check implemented for this, that will return a message on the dialog to handle this. 
      uncomment Line 45 if you wish to render a graphic but also pass an empty string "" to iconname on line 43. 

    Pass an empty string""" for thebutton line 42 and that will not display the action button and the user click outside the
    dialog to close it.

    the values will be obvously coming in dinamically on the function call and not hardcoded like above :-)
      */


    //let getvalues = this.getDialogvalues("Please note","The values you have entered as future targets will be deleted etc","Got IT","tick-circle","");
    let getvalues = this.getDialogvalues(the_heading, the_content,the_button,icon_name,graphic_name);
    
    let geticoncolor = this.styleiconcolor(icon_color);

    this.dialog_heading = getvalues.heading;
    this.dialog_content = getvalues.content;
    this.dialog_button_wording = getvalues.button_wording;
    this.dialog_icon_name = getvalues.icon_name;
    this.dialog_icon_colour = icon_color;
    this.dialog_graphic_name = getvalues.graphic_file_name;
    //console.log(getvalues);

    if (this.dialog_button_wording)
    {
      this.dialogRef.disableClose = true;
    }
  }

  public getDialogvalues(heading:string,content:string,button_wording:string,icon_name:string,graphic_file_name:string)
  {
    let dialog_info = 
                     {
                         "heading": heading,
                         "content": content,
                         "button_wording":button_wording,
                         "icon_name":icon_name,
                         "graphic_file_name":graphic_file_name 
                     };
    return(dialog_info);
  }

  public styleiconcolor(color:string)
  {  
    if(!color)
    {
      let icon_colour = this.dialog_icon_colour; 
    return(icon_colour); 
    }
    else
    {
      return(color);
    }
      
  }

}
