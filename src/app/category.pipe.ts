import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(data:any[],cat:any): any {
    if (cat==undefined){
      return data
    }
    else{


    let products=data.filter((pro:any)=>{
      if(pro.category==cat){
        return true
      }
      else{
        return false
      }
    })
    return products
  }
}

}
