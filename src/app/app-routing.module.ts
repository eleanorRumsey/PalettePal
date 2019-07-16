import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";
<<<<<<< HEAD
import { PaletteComponent } from "./palette/palette.component";
import { ExistingPalettesComponent } from "./existing-palettes/existing-palettes.component";
import { NewPaletteComponent } from "./new-palette/new-palette.component";
import { ThemePickerComponent } from "./theme-picker/theme-picker.component";
import { CreateNewAccountComponent } from "./create-new-acc/create-new-acc.component";
=======
import { PaletteComponent } from "./palette/palette.component;
import { ExistingPalettesComponent } from "./existing-palettes/existing-palettes.component";
import { NewPaletteComponent } from "./new-palette/new-palette.component";
import { ThemePickerComponent } from "./theme-picker/theme-picker.component";
import { CreateNewAccountComponent } from "./create-new-acc.component/create-new-acc.component";
>>>>>>> master

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "existing-palettes", component: ExistingPalettesComponent },
    { path: "login", component: LoginComponent},
    { path: "palette", component: PaletteComponent},
    { path: "colorpicker", component: ColorPickerComponent},
    { path: "new-palette", component: NewPaletteComponent},
    { path: "theme-picker", component: ThemePickerComponent},
    { path: "create-new-acc", component: CreateNewAccountComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }