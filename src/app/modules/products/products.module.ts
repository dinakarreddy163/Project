import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search-item/search-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ImportExportItemsComponent } from './import-export-items/import-export-items.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { HttpClientModule } from '@angular/common/http'
import { ProductsService } from './products.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AuthGuardGuard } from 'src/guards/auth-guard.guard';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'search/:id', component: SearchItemComponent,canActivate:[AuthGuardGuard]
  },
  {
    path: 'importItems', component: ImportExportItemsComponent
  },
  {
    path: 'item-detail/:id', component: ItemDetailComponent
  }
]

@NgModule({
  declarations: [
    SearchItemComponent,
    ImportExportItemsComponent,
    ItemDetailComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SpreadSheetsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService,AuthGuardGuard]
  // exports: [RouterModule]
})
export class ProductsModule { }
