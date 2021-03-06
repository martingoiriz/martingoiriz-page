import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  active: boolean = true;
  selectedItem: number = 1;

  goToHome() {
    this.router.navigate(["/"]);
    this.selectedItem = 1;
  }

  goToAbout() {
    this.router.navigate(["/about"]);
    this.selectedItem = 2;
  }

  goToBlog() {
    window.open("http://www.martingoiriz.com.ar/blog");
  }

  goToContacto() {
    this.router.navigate(["/contacto"]);
    this.selectedItem = 3;
  }
}
