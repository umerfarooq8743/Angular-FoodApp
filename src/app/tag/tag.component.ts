import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(private foood:FoodService) { }
  @Input()
  foodPagetags?:string[];
  @Input()
  justifyContent:string='center';
  tags:Tag[]=[];
  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags=this.foood.getAllTag();
  }

}
