import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/type';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  @Input() currentCurrency!: string;
  hasError:boolean=false;
  plist: ProductType[] = [];

  constructor(private productService:ProductService,
    private router:Router,
    private currencyService:CurrencyService) {}

  ngOnInit(): void {
    this.getData();
    this.getCode();
  }
  addItem(data: any) {
    console.log('add to cart', data);
    this.router.navigate(['/cart']);
  }

  getCode(){
    this.currencyService.currencyObservable.subscribe((code)=>{
    this.currentCurrency=code;}
    );
  }
  getData() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('SUCCESS', data);
        this.plist=data;
      },
      (error) => {
        console.log('ERROR', error);
        this.hasError=true;
      }
    );
  }
}
