import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.html',
  styleUrl: './macchina.css'
})
export class macchina {
  @Input() name!: string; // <-- Aggiungi la notazione @input
  constructor() {
     
  }
  ngOnInit() {}
}