import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSpace',
  standalone: true
})
export class AddSpacePipe implements PipeTransform {

  transform(value: string): string {

    return value.replace(/_/g,' ');
  }

}
