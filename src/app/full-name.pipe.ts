import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(person: any, args?: any): any {
    return person.firstName + ' ' + person.lastName;
  }

}
