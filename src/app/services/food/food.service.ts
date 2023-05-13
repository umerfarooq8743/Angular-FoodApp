import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find((food)=>food.id == id)!;
  }
  getAllByTag(tag:string):Foods[]{
    return tag=="All"? this.getAll():this.getAll().filter((food)=>food.tags?.includes(tag));
  };
  getAllTag():Tag[]{
    return[
      {name:'All',count:12},
      {name:'FastFood',count:3},
      {name:'Pizza',count:3},
      {name:'Lunch',count:4},
      {name:'Dinner',count:9},
      {name:'Desi',count:3},
      {name:'Soup',count:3},
    ]
  }
  getAll():Foods[] {
    return [
      {
        id: 1,
        name: 'Burger',
        price: 400,
        favorite: false,
        star: 4.5,
        tags: ['FastFood','Dinner'],
        imageUrl: 'assets/food-1.jpg',
        cookTime: '10-15',
        origins: ['asian','american'],
      },
      {
        id: 2,
        name: 'Pizza',
        price: 800,
        favorite: true,
        star: 5,
        tags: ['Pizza','Dinner'],
        imageUrl: 'assets/food-2.jpg',
        cookTime: '10-15',
        origins: ['asian','american'],
      },
      {
        id: 3,
        name: 'Pasta',
        price: 1100,
        favorite: false,
        star: 3.5,
        tags: ['Pizza','Dinner'],
        imageUrl: 'assets/food-3.jpg',
        cookTime: '10-15',
        origins: ['asian','american'],
      },
      {
        id: 4,
        name: 'Lazania',
        price: 1300,
        favorite: true,
        star: 4,
        tags: ['Pizza','Lunch'],
        imageUrl: 'assets/food-4.jpg',
        cookTime: '10-15',
        origins: ['asian','american'],
      },
      {
        id: 5,
        name: 'Sandwich',
        price: 600,
        favorite: true,
        star: 3,
        tags: ['Lunch','FastFood'],
        imageUrl: 'assets/food-5.jpg',
        cookTime: '10-15',
        origins: ['asian','american'],
      },
      {
        id: 6,
        name: 'Biryani',
        price: 320,
        favorite: true,
        star: 5,
        tags: ['Lunch','Desi'],
        imageUrl: 'assets/food-6.jpg',
        cookTime: '10-15',
        origins: ['asian','american'],
      },
      {
        id: 7,
        name: 'Chicken Soup',
        price: 280,
        favorite: false,
        star: 2.5,
        tags: ['Dinner','Soup'],
        imageUrl: 'assets/food-7.jpg',
        cookTime: '5-10',
        origins: ['asian','chinese'],
      },
      {
        id: 8,
        name: 'Seekh Kabab',
        price: 410,
        favorite: true,
        star: 4.8,
        tags: ['Lunch','Dinner','Desi'],
        imageUrl: 'assets/food-8.jpg',
        cookTime: '20-25',
        origins: ['pakistani','indian'],
      },
      {
        id: 9,
        name: 'Fries',
        price: 120,
        favorite: false,
        star: 4.5,
        tags: ['FastFood','Dinner'],
        imageUrl: 'assets/food-9.jpg',
        cookTime: '10-15',
        origins: ['asian','russian'],
      },
      {
        id: 10,
        name: 'Gol Gappy',
        price: 180,
        favorite: true,
        star: 4.1,
        tags: ['Dinner','Desi'],
        imageUrl: 'assets/food-10.jpg',
        cookTime: '2-5',
        origins: ['asian','african'],
      },
      {
        id: 11,
        name: 'Dragon Chicken',
        price: 890,
        favorite: false,
        star: 3.1,
        tags: ['Dinner','Soup'],
        imageUrl: 'assets/food-11.jpg',
        cookTime: '12-25',
        origins: ['korean','chinese'],
      },
      {
        id: 12,
        name: 'Peking Chowmein',
        price: 980,
        favorite: true,
        star: 2.8,
        tags: ['Dinner','Soup'],
        imageUrl: 'assets/food-12.jpg',
        cookTime: '22-35',
        origins: ['asian','african'],
      },
    ]
  }
}
