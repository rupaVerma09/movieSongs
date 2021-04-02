import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilterPipe'
})
export class MovieFilterPipePipe implements PipeTransform {

  transform(value: any[], searchTerm:any, properties:string[]): any[] {
    if (!value) return [];
    if (!searchTerm) return value;
    debugger;
    return value.filter(item => {
      var itemFound: Boolean;
      for (let i = 0; i < properties.length; i++) {
        if (item[properties[i]].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          itemFound = true;
          break;
        }
        }
      return itemFound;

    });
  }
}

