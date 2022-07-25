import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductType } from 'src/type';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getProducts(){
    const url='https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.httpClient.get<ProductType[]>(url);
  }

  doCheckout(data:any){
    const url='https://my-app-2675f-default-rtdb.firebaseio.com/b6-data.json';
    return this.httpClient.post(url,data);
  }
}
