import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "../app-routing.module";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class loginModule { }
