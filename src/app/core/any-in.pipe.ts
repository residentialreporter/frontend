import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anyIn'
})
export class AnyInPipe implements PipeTransform {

  transform(value: any[], ...array: any[]): boolean {
    for (const item in value) {
        if (array.indexOf(item) !== -1 ) {
            return true;
        }
    }
    return false;
  }

}
