import { Component, OnInit } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field";
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-new-palette',
  templateUrl: './new-palette.component.html',
  styleUrls: ['./new-palette.component.css'],
  moduleId: module.id,
})
export class NewPaletteComponent implements OnInit {

  paletteName: string = '';

  constructor(private router: Router, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  setPaletteName(args){
    let textField = <TextField>args.object;
    this.paletteName = textField.text;
  }

  custom(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "paletteName": this.paletteName
      }
    };
    this.router.navigate(["palette"], navigationExtras);
  }

  theme(){

  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }
}
