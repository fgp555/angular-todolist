import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To do list CRUD';
  numberState = 1

  database = [{id: 1, name: "task 1", done: false}]

  create(data: string) {
    const id = this.database.length + 1
    this.database.push({id, name: data, done: false})
  }

  read(){
    return JSON.stringify(this.database, null, 3)
  }

  update(id: number, data: string) {
    const findItem = this.database.find(item => item.id === id)
    if(findItem) Object.assign(findItem, {name: data})
  }
  
  delete(id: number) {
    const itemIndex = this.database.findIndex(item => item.id === id)
    this.database.splice(itemIndex, 1)
  }
}
