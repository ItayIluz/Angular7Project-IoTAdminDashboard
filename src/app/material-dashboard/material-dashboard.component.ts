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