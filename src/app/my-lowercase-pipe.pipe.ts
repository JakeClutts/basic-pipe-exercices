import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myLowercasePipe'
})
export class MyLowercasePipePipe implements PipeTransform {

  transform(value: string) {
    return value.toLowerCase();
  }

}
