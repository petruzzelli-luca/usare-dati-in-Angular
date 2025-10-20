import { Component } from '@angular/core';
import { macchina } from '../macchina/macchina';

@Component({
  selector: 'app-container',
  imports: [macchina],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class container {
  names: string[];  
  constructor() { 
     this.names = ["gru", "autocarro", "ruspa", "carro"]; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}