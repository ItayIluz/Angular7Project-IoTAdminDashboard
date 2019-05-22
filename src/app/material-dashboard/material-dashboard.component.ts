import { Component, OnInit  } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.css']
})
export class MaterialDashboardComponent implements OnInit {
  private allClassrooms = [];
  private tempMinClassrooms = [];
  private tempMaxClassrooms = [];
  private energyMaxClassrooms = [];
  private notificationsData;

  constructor(private router: Router, private classroomService: ClassroomService) { }

  ngOnInit() {
    this.classroomService.getAllClassrooms().subscribe(classroomData => {
      this.allClassrooms = classroomData;

      this.classroomService.getNotificationsJSON().subscribe((notificationsData: any) => {
        this.notificationsData = notificationsData;

        this.allClassrooms.forEach(classroom => {

          if(classroom.watt >= notificationsData.energyMax)
            this.energyMaxClassrooms.push(classroom);

          if(classroom.temperature >= notificationsData.temperatureMax)
            this.tempMaxClassrooms.push(classroom);

          if(classroom.temperature <= notificationsData.temperatureMin)
            this.tempMinClassrooms.push(classroom);
        });
      });
    });
  } 

  viewClassroom(classroom){
    this.router.navigate(['classroom'], {state: {"classroom": classroom}});
  }
}


  /*type = 'line';
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
  // Based on the screen size, switch from standard to one column per row 
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
  );*/