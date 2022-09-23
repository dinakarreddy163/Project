import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: any, searchBy: string) {
    if (!searchTerm) {
      return items;
    }
    return items.filter(item => {
      const currentItem = item[searchBy];
      return currentItem.toString().toLowerCase().includes(searchTerm.trim().toLowerCase());
    });
  }
}
