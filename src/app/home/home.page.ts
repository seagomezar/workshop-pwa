import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Account } from "../models/Account";
import { AccountsComponent } from "../components/accounts/accounts.component";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";
import { ExpenseFormComponent } from "../components/expense-form/expense-form.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public fullBalance: number;
  private accountList: Account[];

  constructor(
    private firestore: AngularFirestore,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getAccountList()
      .valueChanges()
      .subscribe(accounts => {
        this.accountList = accounts;
        this.fullBalance = 0;
        accounts.forEach(account => {
          this.fullBalance += account.balance;
        });
      });
  }

  getAccountList(): AngularFirestoreCollection<Account> {
    return this.firestore.collection("accounts");
  }

  async displayAccountList(): Promise<void> {
    const accountListModal = await this.modalCtrl.create({
      component: AccountsComponent,
      componentProps: { accounts: this.accountList }
    });
    return await accountListModal.present();
  }

  async displayExpenseForm(): Promise<void> {
    const expenseFormModal = await this.modalCtrl.create({
      component: ExpenseFormComponent,
      componentProps: {}
    });
    return await expenseFormModal.present();
  }
}
