import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";
import { PaletteComponent } from "./palette/palette.component";
import { ExistingPalettesComponent } from "./existing-palettes/existing-palettes.component";
import { NewPaletteComponent } from "./new-palette/new-palette.component";
import { ThemePickerComponent } from "./theme-picker/theme-picker.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "existing-palettes", component: ExistingPalettesComponent },
    { path: "login", component: LoginComponent},
    { path: "palette", component: PaletteComponent},
    { path: "colorpicker", component: ColorPickerComponent},
    { path: "new-palette", component: NewPaletteComponent},
    { path: "theme-picker", component: ThemePickerComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }