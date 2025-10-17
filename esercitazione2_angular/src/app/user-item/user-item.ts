import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css'
})
export class UserItem {
  @Input() name!: string; // <-- Aggiungi la notazione @input

  constructor() {
     
  }

  ngOnInit() {}


}
