import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search-item/search-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ImportExportItemsComponent } from './import-export-items/import-export-items.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { HttpClientModule } from '@angular/common/http'
import { ProductsService } from './products.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SortPipe } from '../../pipes/sort/sort.pipe';
import { MatSelectModule } from '@angular/material/select';
import { IsAuthGuard } from 'src/app/guard/is-auth.guard';


const routes: Routes = [
  {
    path: 'search/:id', component: SearchItemComponent,canActivate:[IsAuthGuard]
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
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SpreadSheetsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,MatSelectModule,
  ],
  providers: [ProductsService,IsAuthGuard]
  // exports: [RouterModule]
})
export class ProductsModule { }
