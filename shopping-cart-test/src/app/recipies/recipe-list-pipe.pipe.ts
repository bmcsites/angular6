import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeListPipe'
})
export class RecipeListPipePipe implements PipeTransform {

  transform(value: string, description: string) {
    if(description === undefined) {
      description = '';
    }
    let valueTranformd = value[0].toUpperCase() + value.substring(1);
    valueTranformd += ' ' + description;
    return valueTranformd;
  }

}
