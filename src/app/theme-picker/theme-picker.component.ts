import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application"; 
import { ListPicker } from "tns-core-modules/ui/list-picker";
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
  moduleId: module.id,
})
export class ThemePickerComponent implements OnInit {

  redThemes = [
    { name: "Monochromatic",
      colors: ['#FFD1A9', '#FF9E79', '#FB6D4C', '#C23B22', '#8A0000', '#580000']},
    { name: "Complementary",
      colors: ['#008F6B', '#B9F8E8', '#00DBA4', '#8F4A35', '#D63400', '#D62A1B']},
    { name: "Shades",
      colors: ['#BF2000', '#801500', '#FF2A00', '#400B00', '#E62600', '#2E0B00']}
  ];
    
  yellowThemes = [
    { name: "Monochromatic", 
      colors: ['#FBFBD4', '#FEFE95', '#FFB646', '#FFD300', '#E8BF8B', '#AC6C39']},
    { name: "Complementary",
      colors: ['#D9DB00', '#8E8F2E', '#6E00DB', '#D8B2FF', '#47008F', '#DBC900']},
    { name: "Shades",
      colors: ['#BF960F', '#80640A', '#FFC814', '#473806', '#E6B412', '#453806']} 
  ];

  blueThemes = [
    { name: "Monochromatic",
      colors: ['#9BD4F5', '#31B2E7', '#0C9ED9', '#0088CA', '#0066B3', '#001E41']},
    { name: "Complementary",
      colors: ['#00078F', '#D7D8FC', '#000BDB', '#8F824D','#DBB624','#DBBE6D']},
    { name: "Shades",
      colors: ['#0080FF', '#00254A', '#006EDB', '#0074E8', '#006AD4', '#000405']}
  ];

  colors = ["Red", "Yellow", "Blue"];

  colorChoice: string = 'Red';
  paletteName: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private routerExtensions: RouterExtensions) {
    this.route.queryParams.subscribe(params => {
      this.paletteName = params["paletteName"];
    });
  }

  ngOnInit() {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  selectedColorIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.colorChoice = this.colors[picker.selectedIndex];
  }

  getThemes(): any {
    switch(this.colorChoice){
      case "Red":
        return this.redThemes;
        break;
      case "Yellow":
        return this.yellowThemes;
        break;
      case "Blue":
        return this.blueThemes;
        break;
    }
  }

  tapTheme(theme: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "paletteName": this.paletteName,
          "codes": theme.colors
      }
    };
    this.router.navigate(["palette"], navigationExtras);
  }

}
