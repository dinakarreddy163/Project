import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  constructor(private router:ActivatedRoute,private app:AppService) { }

  ngOnInit(): void {
    this.app.setTitle('Search-'+this.router.snapshot.params['id'])
    console.log(this.router.snapshot.params)
  }

}
