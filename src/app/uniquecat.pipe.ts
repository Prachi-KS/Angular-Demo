import { Pipe, PipeTransform } from '@angular/core';
import { toArray } from 'rxjs';

@Pipe({
  name: 'uniquecat'
})
export class UniquecatPipe implements PipeTransform {

  transform(products: any): any {



    //products.filter((v:any,i:any)=>products.findIndex((s:any)=>s.category==v.category)==i)
    // console.log(products)
    // let demo= (products,"category")

    // console.log(products)
    let key="category"
    const result=[...new Map(products.map((i:any)=>[i[key],i])).values()];
    return result


  }

}
