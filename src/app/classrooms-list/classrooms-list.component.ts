import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ClassroomService } from '../classroom.service';
import { Classroom } from '../interfaces/classroom';

@Component({
  selector: 'app-classrooms-list',
  templateUrl: './classrooms-list.component.html',
  styleUrls: ['./classrooms-list.component.css']
})
export class ClassroomsListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<Classroom>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'temperature', 'humidity', 'watt'];

  constructor(private router: Router, private classroomService: ClassroomService){}

  ngOnInit() {
    this.classroomService.getClassroom(81004).subscribe(classroom => console.log(classroom));
    this.classroomService.getAllClassrooms().subscribe(classroomsData => this.dataSource.data = classroomsData as Classroom[]);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  selectRow(classroom) {
    this.router.navigate(['/classroom', classroom.id]);
  }

}
