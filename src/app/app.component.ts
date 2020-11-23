import { Component } from '@angular/core';
import {ToDoListItem} from "../app/to-do-list-item"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson1';  
  getTitle = function():string{
    return this.title;
  }
}
