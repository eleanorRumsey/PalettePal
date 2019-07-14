import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
  selector: 'ns-existing-palettes',
  templateUrl: './existing-palettes.component.html',
  styleUrls: ['./existing-palettes.component.css'],
  moduleId: module.id,
})
export class ExistingPalettesComponent implements OnInit {

  user = "";

  mockPalettes = [
    { name: "Palette 1",
      colors: ["red", "blue", "pink", "goldenrod", "blueviolet", "blue"]},
    { name: "Palette 2",
      colors: ["pink", "yellow", "yellowgreen", "black", "red", "lightblue"]},
    { name: "Palette 3",
      colors: ["aqua", "aliceblue", "aquamarine", "palegoldenrod", "turquoise", "blue"]}
  ];
  
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.user = params["username"];
    });
  }

  ngOnInit() {
  }

  createNewPalette(){
    this.router.navigate(["palette"]);
  }

  editPalette(palette: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "index": -1,
          "code": '',
          "codes": palette.colors
      }
    };
    this.router.navigate(["palette"], navigationExtras);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
