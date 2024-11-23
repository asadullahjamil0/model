import { Component } from '@angular/core';
import { datatype } from './file';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'model';
  getData: datatype = {
    name: "AsadUllah",
    id: 100,
    pakistani: true,
    address: "Skp 345 punjab"
  }
}
