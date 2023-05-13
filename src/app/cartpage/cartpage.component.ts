import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { Cart } from '../shared/models/Cart';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
cart!:Cart;
  constructor(private cartService:CartService, privatefoodService:FoodService) {
    // let foods=FoodService.getAll();
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[1]);
    this.setCart();
  }

  ngOnInit(): void {
  }
setCart(){
  this.cart=this.cartService.getCart();
}
removeFromCart(cartItem: CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
}
changeQantity(cartItem:CartItem, quantityInString:string){
  const quantity= parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id,quantity);
  this.setCart();
}
}
