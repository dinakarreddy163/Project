import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(productList:any[],sortVal:any): any {
    if(!productList || !sortVal)
    {
      return productList;
    }
    productList.sort((a,b)=>{
      if(sortVal=='low') 
         return a.price - b.price;
      else 
         return b.price - a.price;
      });
    return productList;
  }

}
