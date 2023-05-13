import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food';
  constructor(private titleService: Title){
    setTimeout(() => {
      this.titleService.setTitle('Order Now 😊 !!');
    }, 3000);
    setTimeout(() => {
      this.titleService.setTitle('Delicious Taste ❤....');
    }, 6000);
    setTimeout(() => {
      this.titleService.setTitle('LeoTarus Food Corner');
    }, 8000);
    setTimeout(() => {
      this.titleService.setTitle('Order Now 😊 !!');
    }, 12000);
    setTimeout(() => {
      this.titleService.setTitle('Quality + Taste ❤...');
    }, 15000);
    setTimeout(() => {
      this.titleService.setTitle('LeoTarus Food Corner 😊');
    }, 19000);
  }
}
