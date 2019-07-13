import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ns-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css'],
  moduleId: module.id,
})
export class PaletteComponent implements OnInit {

  palette = [
    { index: 0, code: ''}, 
    { index: 1, code: ''}, 
    { index: 2, code: ''}, 
    { index: 3, code: ''}, 
    { index: 4, code: ''}, 
    { index: 5, code: ''}, 
  ];

  codes = [];
  name: string = '';
  indexToChange: number = -1;
  newCode: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if(params["codes"]){
        this.codes = params["codes"];
      }

      if(params["paletteName"]){
        this.name = params["paletteName"];
        console.log("name: " + this.name);
      }

      if(params["index"] && params["code"]){
        this.indexToChange = params["index"];
        this.newCode = params["code"];
      } else if(!params["codes"] && !params["index"] && !params["code"]) {
        for(let color of this.palette){
          color.code = '#dcdfe3';
          this.codes.push('#dcdfe3');
        }
      }
    });

    for(let i in this.codes){
      this.palette[i].code = this.codes[i];
    }
  }

  ngOnInit() {
  }

  colorSelected(color: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "index": color.index,
          "code": color.code,
          "codes": this.codes
      }
    };
    this.router.navigate(["colorpicker"], navigationExtras);
  }

}
