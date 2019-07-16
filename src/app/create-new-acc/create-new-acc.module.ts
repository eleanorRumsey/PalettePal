import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "../app-routing.module";
import { CreateNewAccountComponent } from "./create-new-acc.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        CreateNewAccountComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class createNewAccModule { }