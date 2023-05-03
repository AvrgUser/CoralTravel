import { Component, OnInit } from '@angular/core';
import {Api} from '../coral-api/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'CoralTravel';
  ngOnInit() {
    Api.GetCities().then(res=>{
      let cities = res.split(' ')
      let text = ''
      cities.forEach(element => {
        text+=element+' '
      });
      console.log('cities: '+text)
    })
  }
}
