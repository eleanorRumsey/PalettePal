import { Component, OnInit } from '@angular/core';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'ns-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  moduleId: module.id,
})
export class ColorPickerComponent implements OnInit {

  mockArray = ['red', 'pink', 'plum', 'orangered',
              'orange', 'goldenrod', 'yellow', 'yellowgreen', 
              'green', 'turquoise', 'aquamarine', 'blue', 
              'blueviolet', 'violet', 'indigo', 'purple'];
  
  listPicker = new ListPicker();

  items=["Rainbow", "Option 2"];   
  
  indexToChange: number;
  code: string;
  codes: string[];

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.indexToChange = params["index"];
      this.code = params["code"];
      this.codes = params["codes"];
      console.log(this.codes);
    });
  }

  ngOnInit() {
  }

  colorSelected(color: string){
    this.code = color;
    console.log("Current code: " + this.code);
    console.log("Index to change: " + this.indexToChange);
    console.log("currently at index: " + this.codes[this.indexToChange]);
    this.codes[this.indexToChange] = this.code;
  }

  save(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "index": this.indexToChange,
          "code": this.code,
          "codes": this.codes
      }
    };
    
    this.router.navigate(["palette"], navigationExtras);
  
  }

}
