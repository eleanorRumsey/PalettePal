import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import {Router, NavigationExtras, ActivatedRoute} from "@angular/router";
import {Page} from "tns-core-modules/ui/page";

@Component({
    selector: "CreateNewAccountComponent",
    moduleId: module.id,
    templateUrl: "./create-new-acc.component.html",
    styleUrls: ["./create-new-acc.component.css"]
})

export class CreateNewAccountComponent implements OnInit {

    username: string = '';
    password: string = '';

    validUsername:boolean = true;
    validPassword:boolean = true;

    valid: boolean = true;

    constructor(private router: Router, page: Page) {
        page.actionBarHidden = true;
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
             this.valid = false;
          }
          if(this.password.length === 0){
            this.validPassword = false;
            this.valid = false;
          }
 
          if (this.username.length > 0 && this.password.length > 0){ 
            this.router.navigate(["existing-palettes"], navigationExtras);
          }
    }

    confirmUserName(args){ 
        this.valid = true;
        this.validUsername = true;
        let textField = <TextField>args.object;
        this.username = textField.text;
    }

    confirmPassword(args){
        this.valid = true;
        this.validPassword = true;
        let textField = <TextField>args.object;
        this.password = textField.text;
    } 

    guest(){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "username": ""
            }
          };
          this.router.navigate(["existing-palettes"], navigationExtras);
    }
}