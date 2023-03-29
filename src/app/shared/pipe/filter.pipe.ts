import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      console.log(it);

      return (
        it.data.title.toLocaleLowerCase().includes(searchText) ||
        it.createAt.toLocaleLowerCase().includes(searchText)
      );
    });
  }
}
