import { Component  } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.css']
})
export class MaterialDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  tempGauges = ["a", "b"]

  type = 'line';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July","test"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 200],
        borderColor:"black" ,
        pointRadius:5,
        backgroundColor: "black",
        pointBackgroundColor:"white"    ,
        lineTension:0,
        fill:false,
      }
    ]
  };
  options = {  
    
    chartArea:{
      backgroundColor:"black",
    },
    legends:{
      label:{
        fontColor:"black",
      }
    },
    title:{
      fontColor:"black"
    },
    responsive: true,
    maintainAspectRatio: false, 
    scales:{
      xAxes:[
     
        {ticks:{fontColor:'black'}
      }],
      yAxes:[
     
        {ticks:{fontColor:'black'}
      }]
    }
  };
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
