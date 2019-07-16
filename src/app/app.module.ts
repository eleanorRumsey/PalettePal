import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ColorPickerComponent } from './color-picker/color-picker.component';
<<<<<<< Updated upstream
=======
import { PaletteComponent } from "./palette/palette.component";
import { ExistingPalettesComponent } from "./existing-palettes/existing-palettes.component";
import { NewPaletteComponent } from "./new-palette/new-palette.component";
import { ThemePickerComponent } from "./theme-picker/theme-picker.component";
import { CreateNewAccountComponent } from "./create-new-acc.component/create-new-acc.component";
>>>>>>> Stashed changes

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
<<<<<<< Updated upstream
        ItemsComponent,
        ItemDetailComponent,
        ColorPickerComponent
=======
        LoginComponent,
        ColorPickerComponent,
        PaletteComponent,
        ExistingPalettesComponent,
        NewPaletteComponent,
        ThemePickerComponent,
        CreateNewAccountComponent
>>>>>>> Stashed changes
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
