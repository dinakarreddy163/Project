import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue:any;
  constructor(private router:Router,private app:AppService){ }
  title:any=''
  ngOnInit(): void {
    this.app.getTitle().subscribe(e=>{
      this.title=e;
    })
  }
  search()
  {
    this.router.navigate(['/home/products/search/'+this.searchValue])
  }

}
