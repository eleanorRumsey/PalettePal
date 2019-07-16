import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { PaletteComponent } from "./palette/palette.component";
import { ExistingPalettesComponent } from "./existing-palettes/existing-palettes.component";
import { NewPaletteComponent } from "./new-palette/new-palette.component";
import { ThemePickerComponent } from "./theme-picker/theme-picker.component";
import { CreateNewAccountComponent } from "./create-new-acc/create-new-acc.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ColorPickerComponent,
        PaletteComponent,
        ExistingPalettesComponent,
        NewPaletteComponent,
        ThemePickerComponent,
        CreateNewAccountComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }