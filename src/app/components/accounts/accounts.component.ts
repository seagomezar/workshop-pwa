import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Account } from "../../models/Account";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.scss"]
})
export class AccountsComponent implements OnInit {
  @Input() public accounts: Account[];
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss(): void {
    this.modalCtrl.dismiss();
  }
}
