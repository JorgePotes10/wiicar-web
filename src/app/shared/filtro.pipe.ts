import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[], filter: any): any[] {

    const result: any = [];

    if (!filter) {
      return items;
    } else {

      if (filter.data_search) {
        for (const item of items) {
          if (this._isContains(item, filter.data_search.toString(), filter.keys)) {
            result.push(item);
          }
        }
      } else {
        return items;
      }

    }

    return result;

  }

  _isContains(json: any, value: any, keys: any[]) {

    let result = keys.some((key, index) => {
      let contains = false;
      if (json[key]) {
        contains = (json[key].toString().toLowerCase().indexOf(value.toLowerCase()) !== -1);
      }
      return contains;
    });
    return result;

  }

}
