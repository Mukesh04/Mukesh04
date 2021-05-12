import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { IProduct } from "./product";
import { ProductServices } from "./product.service";

@Component({
  selector:'pm-products',
  templateUrl:'./product-list-component.html',
  styleUrls:['./product-list-component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: String ="Product List's";
  showImage:boolean = false;
  errorMessage : string = '';
  private _ListOfFilter: string = ' ';
  sub: any;

  get ListOfFilter():string {
    return this._ListOfFilter;
  }
  set ListOfFilter(value: string){
   this._ListOfFilter = value;
this.filteredProducts = this.performFilter(value);
  }


filteredProducts: IProduct[] = [];

  products: IProduct[] = [];



  toggleImage(): void{
    this.showImage = !this.showImage;
  }

//1
  ngOnInit():void{
    // this.products = this.productService.getProduct();
                                   //2            //4
   this.sub = this.productService.getProduct().subscribe({
                          //C
    next:products => {

    this.products = products;
    this.filteredProducts = this.products;
    },
    //D
    error: err => this.errorMessage =err
   });

   //5
    // this.filteredProducts = this.products;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
   let subd = this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));

   return subd;

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List : ' + message;
  }

  //services

  constructor(private productService : ProductServices){

  }
}
