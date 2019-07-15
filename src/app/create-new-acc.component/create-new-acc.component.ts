import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";

@Component({
    selector: "CreateNewAccountComponent",
    moduleId: module.id,
    templateUrl: "./create-new-acc.html",
    styleUrls: ["./create-new-acc.css"]
})

export class CreateNewAccountComponent implements OnInit {

    username: string = '';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    createNewAcc(){
        console.log("Creating new account...");
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

}
