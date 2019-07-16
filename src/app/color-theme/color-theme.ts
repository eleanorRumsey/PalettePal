import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-color-theme',
  templateUrl: './color-theme.component.html',
  styleUrls: ['./color-theme.component.css'],
  moduleId: module.id,
})
export class ColorThemeComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { 
    var shadesThemeRed:String[];
    var shadesThemeBlue:String[];
    var shadesThemeYellow:String[];

    var complimentaryThemeRed:String[];
    var complimentaryThemeYellow:String[];
    var complimentaryThemeBlue:String[];

    var monoThemeRed:String[];
    var monoThemeBlue:String[];
    var monoThemeYellow:String[];
  }

    monoThemeRed = ['#FFD1A9','#FF9E79','#FB6D4C', '#C23B22','#8A0000','#580000'];
    monoThemeYellow = ['#FBFBD4','#FEFE95','#FFB646','#FFD300','#E8BF8B','#AC6C39'];
    monoThemeBlue = ['#9BD4F5', '#31B2E7', '#0C9ED9','#0088CA','#0066B3','#001E41'];

    complimentaryThemeRed = ['#008F6B', '#B9F8E8', '#00DBA4', '#8F4A35', '#D63400', '#D62A1B'];
    complimentaryThemeYellow = ['#D9DB00', '#8E8F2E', '#6E00DB', '#D8B2FF', '#47008F', '#DBC900'];
    complimentaryThemeBlue = ['#00078F', '#D7D8FC', '#000BDB', '#8F824D','#DBB624','#DBBE6D'];
    
    shadesThemeRed = ['#BF2000', '#801500', '#FF2A00', '#400B00', '#E62600', '#2E0B00'];
    shadesThemeYellow = ['#BF960F', '#80640A', '#FFC814', '#473806', '#E6B412', '#453806']; 
    shadesThemeBlue = ['#0080FF', '#00254A', '#006EDB', '#0074E8', '#006AD4', '#000405'];

  ngOnInit() {}

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

}