import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage : string = "Some error has happend. Contact support to *** - ***";

  constructor() { }

  ngOnInit(): void {
  }

}
