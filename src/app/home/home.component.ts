import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[]=[];
  constructor(private foood:FoodService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      if(params['searchItem'])
      this.foods=this.foood.getAll().filter(food=>food.name.toLocaleLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag']){
        this.foods=this.foood.getAllByTag(params['tag'])
      }
      else
      this.foods=this.foood.getAll();
    })

  }

}
