import { Component } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { ClassroomService } from './classroom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'administrator-dashboard';

  constructor (private classroomService: ClassroomService, private authroizationService: AuthorizationService) {
    authroizationService.getToken();
    classroomService.getAllClassrooms();
  }
}
