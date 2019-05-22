import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { Router } from '@angular/router';
import { ClassroomService } from '../classroom.service';
import { Classroom } from '../interfaces/classroom';
import { DataSource } from '@amcharts/amcharts4/core';

@Component({
  selector: 'app-classrooms-list',
  templateUrl: './classrooms-list.component.html',
  styleUrls: ['./classrooms-list.component.css']
})
export class ClassroomsListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<Classroom>();

  /** Columns displayed in the table. Columns numbers can be added, removed, or reordered. */
  displayedColumns = ['number', 'temperature', 'humidity', 'watt'];

  constructor(private router: Router, private classroomService: ClassroomService){}

  ngOnInit() {
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
    this.router.navigate(['classroom'], {state: {"classroom": classroom}});
  }

}
