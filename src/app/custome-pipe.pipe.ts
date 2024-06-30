import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipe'
})
export class CustomePipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.toUpperCase() + ' - Custom Pipe';
  }

  

}
