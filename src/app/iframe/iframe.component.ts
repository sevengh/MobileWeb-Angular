import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  url: string | null | undefined = "";

  constructor() { 
    this.url = localStorage.getItem('dataSource');
  }

  ngOnInit(): void {
  }

}
