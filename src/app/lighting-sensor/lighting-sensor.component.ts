import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lighting-sensor',
  templateUrl: './lighting-sensor.component.html',
  styleUrls: ['./lighting-sensor.component.css']
})
export class LightingSensorComponent implements OnInit{

  @Input() light: number;

  constructor() { }

  ngOnInit() {
  }

}
