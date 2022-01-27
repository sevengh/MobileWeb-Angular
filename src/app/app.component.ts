import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mobile Web';

  name = 'Set iframe source';
  url: string | null = "";

  constructor() {
    if (this.url == "" || this.url == null)
      this.url = localStorage.getItem('dataSource');

    if (this.url == "" || this.url == null) {
      this.url = "https://www.shamanayev.tk/mobile-web";
      localStorage.setItem('dataSource', this.url);
    }
  }
}
