import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  moduleId: module.id,
})
export class ColorPickerComponent implements OnInit {

  mockArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  constructor() { }

  ngOnInit() {
  }

}
