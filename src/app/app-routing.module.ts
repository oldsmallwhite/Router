import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StockComponent} from './stock/stock.component';
import {Code404Component} from './code404/code404.component';
import {BuyerListComponent} from './buyer-list/buyer-list.component';
import {SellerListComponent} from './seller-list/seller-list.component';
import {ConsultComponent} from './consult/consult.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'consult', component: ConsultComponent , outlet: 'aux'},
  {path: 'stock/:id', component: StockComponent,
    children:[
      {path: '', component: BuyerListComponent},
      {path: 'seller/:id', component: SellerListComponent}
    ]
  },
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
