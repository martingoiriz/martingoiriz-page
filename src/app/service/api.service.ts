import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(public http: HttpClient, private httpPost: Http) {}

  api_url: string = "http://sd-1752000-h00001.ferozo.net/api/mg/";

  sendContact(dataContact) {
    let url = this.api_url + "sendContact.php";

    var headers = new Headers();
    headers = this.headersAppend(headers);
    const requestOptions = new RequestOptions({ headers: headers });

    var body = JSON.stringify(dataContact);

    console.log("BODY, ", body);

    return this.httpPost.post(url, body, {
      headers: headers,
      withCredentials: true
    });
  }

  headersAppend(headers) {
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    headers.append("Accept", "application/json");
    headers.append("content-type", "application/json");
    return headers;
  }
}
