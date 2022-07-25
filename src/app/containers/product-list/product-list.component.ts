import { Component, Input, OnInit } from '@angular/core';
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
  plist: ProductType[] = [
    // {
    //   productId: 100,
    //   productName: 'Product',
    //   productPrice: 12999.653,
    //   productImage: '/assets/photo.jpg',
    //   // copy/paste image in assets folder
    //   productStock: 10,
    // },

    // {
    //   productId: 101,
    //   productName: 'shirt',
    //   productPrice: 13999.87,
    //   productImage: '/assets/photo.jpg',
    //   productStock: 20,
    // },
  ];
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getData();
  }
  addItem(data: any) {
    console.log('add to cart', data);
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
