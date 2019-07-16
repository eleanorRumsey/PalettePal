import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import {Page} from "tns-core-modules/ui/page";


@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    username: string = '';

    constructor(private router: Router, page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    login(){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": this.username
            }
          };
          this.router.navigate(["existing-palettes"], navigationExtras);
    }

    createNewAcc(){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": this.username
            }
          };
          this.router.navigate(["create-new-acc"], navigationExtras);
    }

    confirmUserName(args){
        let textField = <TextField>args.object;
        this.username = textField.text;
    }

    confirmPassword(){
        console.log("Confirming password...");
    }

    guest(){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": ""
            }
          };
          this.router.navigate(["existing-palettes"], navigationExtras);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> master
