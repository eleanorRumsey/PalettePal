import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import {Router, NavigationExtras, ActivatedRoute, RouteConfigLoadStart} from "@angular/router";
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

  palettes = [
    { name: "Garden Theme",
      colors: ['#08BF20','#03400B','#058015','#804B28','#BF6B34','#C27388']},
    { name: "Palette Theme",
      colors: ['#FFBAB5','#FDF5CC','#CAFDCD','#D3EFFC','#E0C3FD','#FDFAAF']},
    { name: "School Project Theme",
      colors: ['#7D7C56','#BF9275','#C07892','#8F89C0','#7AB9C0','#6BC066']}
  ]; 
  
  constructor(private router: Router, private route: ActivatedRoute, private routerExtensions: RouterExtensions) { 
    this.route.queryParams.subscribe(params => {

      if(params["username"]){
        let name = params["username"];
        if(name.length > 0){
          name = ", " + name;
          this.user = name;
        }
      }

      if(params["palettes"]){
        let p = JSON.parse(params["palettes"]);
        if(p.length > 0){
          this.palettes = p;
        }
      }

      if(params["name"] && params["codes"]){

        let newPalette = {
          name: params["name"],
          colors: params["codes"]
        }

        let exists = false;

        for(let palette of this.palettes){
          if(palette.name === newPalette.name){
            exists = true;
            let index = this.palettes.indexOf(palette);
            this.palettes[index] = newPalette;
          }
        }

        if(!exists){
          this.palettes.push(newPalette);
        }
      }
      
    });
  }

  ngOnInit() {
  }

  createNewPalette(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "palettes": JSON.stringify(this.palettes)
      }
    };
    this.router.navigate(["new-palette"], navigationExtras);
  }

  editPalette(palette: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "index": -1,
          "codes": palette.colors,
          "paletteName": palette.name,
          "palettes": JSON.stringify(this.palettes)
      }
    };
    this.router.navigate(["palette"], navigationExtras);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

}
