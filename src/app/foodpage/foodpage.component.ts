import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  constructor(private activated:ActivatedRoute,private foodser:FoodService,private cartservice:CartService, private router:Router) {
    activated.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodser.getFoodById(params['id'])

    })
   }
  food!:Foods;
  ngOnInit(): void {

  }
  addToCart(){
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
