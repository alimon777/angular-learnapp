import { Component } from '@angular/core';

@Component({
  // template
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnapp';
  x:number = 10;
  y:number = 20;
}
