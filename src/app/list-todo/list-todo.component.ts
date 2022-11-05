import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = [
    new Todo(1, "Learn Quran", new Date(), false),
    new Todo(2, "Learn Sura", new Date(), false),
    new Todo(3, "Learn Salah", new Date(), false),
    new Todo(4, "Learn Good Behiviour", new Date(), false),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
