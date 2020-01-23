import { Component, OnInit } from "@angular/core";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.scss"]
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  rightTooltip: any = "right";
  belowTooltip: any = "below";
  aboveTooltip: any = "above";
  leftTooltip: any = "left";

  ngOnInit() {}
}
