import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  constructor(private service:ProductService){
        
  }

  products:Product[]=[];

   ngOnInit():void{
    this.products=this.getProducts();
   } 
   
 deleteProduct(id:number):void
{
this.service.deleteProductById(id).subscribe(
  (data) => {
    this.products=this.products.filter(item=>item.productId!==id);
  },
  (error) => {
    console.log('Error deleting the product:', error);
  }
)
}
   getProducts():any{
    this.service.getProducts().subscribe((products)=>{
    this.products=products;
   });

}

}
