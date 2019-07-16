import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ExistingPalettesComponent } from './existing-palettes.component';



@NgModule({
  declarations: [ExistingPalettesComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExistingPalettesModule { }