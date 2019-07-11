import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ColorPickerComponent } from "./color-picker/color-picker.component";

const routes: Routes = [
    { path: "", redirectTo: "/colorpicker", pathMatch: "full" },
    { path: "colorpicker", component: ColorPickerComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
