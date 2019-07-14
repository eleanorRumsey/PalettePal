import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-existing-palettes',
  templateUrl: './existing-palettes.component.html',
  styleUrls: ['./existing-palettes.component.css'],
  moduleId: module.id,
})
export class ExistingPalettesComponent implements OnInit {

  constructor() { 
    var gardenTheme:String[];
    var paletteTheme:String[];
    var schoolProjectTheme:String[];
  }

    gardenTheme = ['#08BF20','#03400B','#058015','804B28','#BF6B34','#C27388'];
    paletteTheme = ['#FFBAB5','#FDF5CC','#CAFDCD','#D3EFFC','#E0C3FD','#FDFAAF'];
    schoolProjectTheme = ['#7D7C56','#BF9275','#C07892','#8F89C0','#7AB9C0','#6BC066'];

  ngOnInit() {}
}