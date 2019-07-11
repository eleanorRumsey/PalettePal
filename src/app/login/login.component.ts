import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.model";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }

    ngOnInit(): void {
    }

    login() {
        
    }

    guest() {
        
    }
}
