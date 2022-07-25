import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
currencyCodes=['INR','USD','CAD','EUR','GDP'];
@Output() selected=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
updateCurrency(event:Event){
const ele=event.target as HTMLSelectElement;
this.selected.emit(ele.value);
}
}
