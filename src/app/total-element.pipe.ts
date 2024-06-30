import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalElement'
})
export class TotalElementPipe implements PipeTransform {

  transform(value: number[], ...args: any[]): number {
    return value.reduce((a,b) => a+b);
  }

}
