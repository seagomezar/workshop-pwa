import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { AccountsComponent } from "../components/accounts/accounts.component";
import { ExpenseFormComponent } from "../components/expense-form/expense-form.component";

@NgModule({
  entryComponents: [AccountsComponent, ExpenseFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, AccountsComponent, ExpenseFormComponent]
})
export class HomePageModule {}
