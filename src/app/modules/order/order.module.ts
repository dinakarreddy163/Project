import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderSubmitComponent } from './order-submit/order-submit.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card'
import { OrderService } from './order.service';
const routes: Routes = [
  {
    path:'cart-items',component:CartItemsComponent
  },
  {
    path:'order-submit',component:OrderSubmitComponent
  }
]

@NgModule({
  declarations: [
    CartItemsComponent,
    OrderSubmitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatCardModule,
    
  ],
  providers:[OrderService]
})
export class OrderModule { }
