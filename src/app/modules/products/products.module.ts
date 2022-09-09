import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search-item/search-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[{
  path:'search/:id',component:SearchItemComponent
}]

@NgModule({
  declarations: [
    SearchItemComponent
  ],
 imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports: [RouterModule]
})
export class ProductsModule { }
