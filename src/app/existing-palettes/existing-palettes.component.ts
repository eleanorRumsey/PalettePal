import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";


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

      if(params["username"]){
        let name = params["username"];
        if(name.length > 0){
          name = ", " + name;
          this.user = name;
        }
      }

      if(params["name"] && params["codes"]){
        let newPalette = {
          name: params["name"],
          colors: params["codes"]
        }

        let exists = false;

        for(let palette of this.mockPalettes){
          if(palette.name === newPalette.name){
            exists = true;
            let index = this.mockPalettes.indexOf(palette);
            this.mockPalettes[index] = newPalette;
          }
        }

        if(!exists){
          this.mockPalettes.push(newPalette);
        }
      }
      
    });
  }

  ngOnInit() {
  }

  createNewPalette(){
    this.router.navigate(["new-palette"]);
  }

  editPalette(palette: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "index": -1,
          "code": '',
          "codes": palette.colors,
          "paletteName": palette.name
      }
    };
    this.router.navigate(["palette"], navigationExtras);
  }

}
