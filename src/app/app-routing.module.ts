import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent,data:{name:"Sign Up"}
  },
  {
    path:'home',component:HomeComponent,children:[{
      path:'products',loadChildren:()=>import('./modules/products/products.module').then(m=>m.ProductsModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
