import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { Account } from "../../models/Account";

@Component({
  selector: "app-expense-form",
  templateUrl: "./expense-form.component.html",
  styleUrls: ["./expense-form.component.scss"]
})
export class ExpenseFormComponent implements OnInit {
  movement: Account = { name: "", balance: 0, description: "" };
  constructor(
    private modalCtrl: ModalController,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {}

  dismiss(): void {
    this.modalCtrl.dismiss();
  }

  saveMovement() {
    if (this.movement.name && this.movement.balance) {
      this.firestore.collection("accounts").add(this.movement);
      this.modalCtrl.dismiss();
    }
  }
}
