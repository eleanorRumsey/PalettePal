import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";

@Component({
    selector: "CreateNewAccountComponent",
    moduleId: module.id,
    templateUrl: "./create-new-acc.component.html",
    styleUrls: ["./create-new-acc.component.css"]
})

export class CreateNewAccountComponent implements OnInit {

    username: string = '';
    password: string = '';

    validUsername = true;
    validPassword = true;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    createNewAcc(){
        console.log("Creating new account...");
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": this.username,
                "password": this.password
            }
          };

          if(this.username.length === 0){
             this.validUsername = false;
          }

          if(this.password.length === 0){
            this.validPassword = false;
          }

          if (this.username.length !=0 && this.password.length != 0){
          this.router.navigate(["existing-palettes"], navigationExtras);
          }
    }

    confirmUserName(args){
        let textField = <TextField>args.object;
        this.username = textField.text;
    }

    confirmPassword(args){
        let textField = <TextField>args.object;
        this.password = textField.text;
    }

}