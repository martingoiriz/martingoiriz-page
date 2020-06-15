import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent implements OnInit {
  constructor(private api: ApiService) {}

  dataForm: any = {};

  ngOnInit() {}

  send() {
    if (this.dataForm.name && this.dataForm.email && this.dataForm.msg) {
      this.api.sendContact(this.dataForm).subscribe(res => {
        let status = JSON.parse(res["_body"])["data"];
        if (status === "done") {
          this.dataForm = {};
          alert("¡Mensaje enviado!");
        }
      });
    } else {
      alert("Por favor, completá todos los campos.");
    }
  }
}
