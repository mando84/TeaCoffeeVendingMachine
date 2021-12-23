import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getDrink(cupNum: any, drinkType: any): Observable<any> {
    return this.httpClient.get("/api/drinks/" + cupNum + "/" + drinkType);
  }
}
