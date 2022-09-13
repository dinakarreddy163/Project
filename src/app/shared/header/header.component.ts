import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue: any;
  cartItemLen: number = 0;
  constructor(private router: Router, private app: AppService, private dialog: MatDialog) { }
  title: any = ''
  checkAuth: any = false;
  getLogin: boolean = true;
  ngOnInit(): void {
    this.app.getTitle().subscribe(e => {
      this.title = e;
    })
    this.checkIsAuth();
    this.getProducts();
  }
  search() {
    this.router.navigate(['/products/search/' + this.searchValue])
  }
  checkIsAuth() {
    this.app.getAuth().subscribe(data => {
      this.checkAuth = data;
    })
  }
  open() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  logout() {
    this.app.setAuth(false);
  }
  getProducts() {
    this.app.getAddToCart().subscribe((val: any) => {
      this.cartItemLen = val.length;
    })
  }
}
