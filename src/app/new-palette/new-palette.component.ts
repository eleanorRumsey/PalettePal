import { Component, OnInit } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field";
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-new-palette',
  templateUrl: './new-palette.component.html',
  styleUrls: ['./new-palette.component.css'],
  moduleId: module.id,
})
export class NewPaletteComponent implements OnInit {

  paletteName: string = '';
  palettes: any;
  valid: boolean = true;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if(params["palettes"]){
        let p = JSON.parse(params["palettes"]);
        console.log("p: " + p);
        if(p.length > 0){
          this.palettes = p;
        }
      }
    });
  }

  ngOnInit() {
  }

  setPaletteName(args){
    let textField = <TextField>args.object;
    this.paletteName = textField.text;
    this.valid = true;
  }

  verifyName(){
    if(this.paletteName.length > 0){
      this.valid = true;
    } else {
      this.valid = false;
    } 
  }

  custom(){
    this.verifyName();
    console.log(this.valid);
    if(this.valid){
      let navigationExtras: NavigationExtras = {
        queryParams: {
            "paletteName": this.paletteName,
            "palettes": JSON.stringify(this.palettes)
        }
      };
      this.router.navigate(["palette"], navigationExtras);
    }
  }

  theme(){
    this.verifyName();
    console.log(this.valid); 
    if(this.valid){
      let navigationExtras: NavigationExtras = {
        queryParams: {
            "paletteName": this.paletteName,
            "palettes": JSON.stringify(this.palettes)
        }
      };
      this.router.navigate(["theme-picker"], navigationExtras);
    }
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}