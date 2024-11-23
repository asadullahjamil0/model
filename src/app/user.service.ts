import { Injectable } from '@angular/core';
import { datatype } from './file';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData: datatype = {
    name: "AsadUllah",
    id: 100,
    pakistani: true,
    address: "Skp 345 punjab"
  }
}
