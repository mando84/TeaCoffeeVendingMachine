import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  order: any = {};
  drinkList: any[] = [
    { drinkType: "Tea", cost: 5 },
    { drinkType: "BlackTea", cost: 10 },
    { drinkType: "Coffee", cost: 15 },
    { drinkType: "BlackCoffee", cost: 10 },
  ];

  err: any = {};
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {}

  getDrinkSubmit() {
    console.log(JSON.stringify(this.order));
    this.homeService.getDrink(2, "Tea").subscribe(
      (e) => {
        console.log("got drink");
      },
      (err) => {
        this.err = err.error;
      }
    );
  }
}
