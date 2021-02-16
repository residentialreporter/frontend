import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'in'
})
export class InPipe implements PipeTransform {

  transform(value: unknown, ...array: any[]): unknown {
      return array.indexOf(value) !== -1;
  }
}
