import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  moduleId: module.id,
})
export class ColorPickerComponent implements OnInit {

  constructor() { 
    var redHex:String[];
    var orangeHex:String[]
    var yellowHex:String[];
    var greenHex:String[];
    var blueHex:String[];
    var indigoHex:String[];
    var violetHex:String[];
  }

  redHex = ['#FF0000', '#ED1C24', 'C40233', '#F2003C','ED2939', '#EE204D', '#960018','#E62020',"#EA3C53",'#E60026','#E23D28','#C41E3A','#CE2029','#DA2C43', '#800000','#8B0000' ]
  orangeHex = ['#B44010','#E55300','#FF6900','#FF2B00','#FF4023','#FF5C00','#FF8106','#FF9F00','#FEA877','#FBC299',"FBD4B9", '#FFA500', '#FF7435', 'FF7300', '#FF6700', '#FF971A']
  yellowHex = ['#F8DE7E', '#FADASE','#F9A602','#FFD300','#D2B55B','#C3B091','#DAA520','#FCF4A3','#FCD12A','#FFC30B','#C49102','#FCE205','#FDA50F','#CC7722','#FFBF00','#EFFD5F']
  greenHex = ['#B2D3C2','#AEF35A','#B0FC38','#74B62E','#98EDC3','#98B464','#3BB143','#607D3B','#3CEC97','#5CBC63','#03AC13','#028910','#729C69','#597D35','#466D1E','#3A5311']
  blueHex = ['#89CFF0','#588BAE','#7EF9FF','#57A0D3','#468284','#6593F5','#0080FF','#0F52BA','#00BECC','#000080','#1034A6','#003152','#111E6C','#73C2FB','#B0DFE5','3FE0D0']
  indigoHex = ['#281E5D','#1338BE','#0A1172','#151E3D','#241571','#1F456E','#051094','#022D36','#1A237E','#283593','#212E66','#490080','#331177','#440088','#364EB9','#1F2179']
  violetHex =  ['#AF69EF','#4C0121','#2C041C','#67032F','#9867C5',"#9E8BB5",'#A45EE5','#663046','#BE93D4','#4D0F28','#311432','#E39FF6','#601A35','#A1045A','#B65FCF','#A32CC4']

  ngOnInit() {
  }

}
