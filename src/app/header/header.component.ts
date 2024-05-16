import { Component } from "@angular/core";

import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
    standalone: true,
    selector: "app-header",
    // template: `
    //     <h3>This is a header</h3>
    // `
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
    imports: [
        TopMenuComponent,
        MainMenuComponent
    ],
})

export class HeaderComponent {

}