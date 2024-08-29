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
  public isLoading = false;

  constructor(private taskservice: TaskService) {}

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.isLoading = true;
    this.taskservice.getData().subscribe(
      (response) => {
        this.responseData = response;
        this.tasks =  this.responseData
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
