import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiTermPipe',
  pure: false
})

export class MultiTermPipe implements PipeTransform {

  transform(items: any[], filterString: string): any {
    if (!items || !filterString) {
      return items;
    }
    debugger;
    let result = filterString.trim().split(' ');
    console.log(result);
    // filter items array, items which match and return true will be kept, false will be filtered out
    return this.filterLoop(items, result);
  };

  filterLoop(items, filters): any[] {
    let filteredArray = items.filter(
      function (el) { // executed for each item
        for (let i = 0; i < filters.length; i++) { // iterate over filter
          if (el.name.toLowerCase().indexOf(filters[i].toLowerCase()) != -1) {
            return true; // if this filter matches this item
          }
        }

        return false;
      }
    );

    return filteredArray;
  };
}
