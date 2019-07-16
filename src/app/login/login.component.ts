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
    password: string = '';
    valid: boolean = true;

    constructor(private router: Router, page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    login(){
      if(this.username.length > 0 && this.password.length > 0){
        let navigationExtras: NavigationExtras = {
          queryParams: {
              "username": this.username
          }
        };
        this.router.navigate(["existing-palettes"], navigationExtras);
      } else {
        this.valid = false;
      }
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
      this.valid = true;
      let textField = <TextField>args.object;
      this.username = textField.text;
    }

    confirmPassword(args){
      this.valid = true;
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
