import { Component } from '@angular/core';
import { TaskService } from '../../services/tasks.services';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
  responseData: any;
  public tasks: Task[] = [];
 
  constructor(private taskservice: TaskService) {}

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.taskservice.getData().subscribe(
      (response) => {
        this.responseData = response;
        this.tasks =  this.responseData
        console.log('Datos recibidos:', response);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
