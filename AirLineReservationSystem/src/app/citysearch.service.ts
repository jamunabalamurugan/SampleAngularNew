import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitysearchService {

  constructor() { }

  cities = [
    {city:"Bangalore"},
    {city:"Mumbai"},
    {city:"Pune"},
    {city:"Chennai"},
    {city:"Goa"},
    {city:"Thiruvanathapuram"},
    {city:"Delhi"},
  ]

}
