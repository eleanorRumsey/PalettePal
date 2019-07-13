import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    username: string = '';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    login(){
        console.log("Logging in...");
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": this.username
            }
          };
          this.router.navigate(["existing-palettes"], navigationExtras);
    }

    confirmUserName(args){
        let textField = <TextField>args.object;
        this.username = textField.text;
        console.log("Confirming username as " + this.username);
    }

    confirmPassword(){
        console.log("Confirming password...");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
