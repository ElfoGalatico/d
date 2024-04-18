import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'radioTs'
})
export class RadioTsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
