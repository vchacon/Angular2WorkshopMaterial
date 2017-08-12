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
    
    let result = filterString.split(' ');
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => item.name.indexOf(filterString) !== -1);
}

}