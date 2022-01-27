import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  url: string | null = "";

  constructor(private router: Router) {
    if (this.url == "" || this.url == null)
      this.url = localStorage.getItem('dataSource');

    if (this.url == "" || this.url == null) {
      this.router.navigate(['/register']);
      return;
    }
    
    window.open(this.url, "_self");
  }

}
