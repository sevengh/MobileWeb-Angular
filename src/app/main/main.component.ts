import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isFrame: boolean = true;

  constructor(private router: Router) {
    this.isFrame = localStorage.getItem('iframe') == "true";

    let url: string | null = "";

    if (url == "" || url == null)
      url = localStorage.getItem('dataSource');

    if (url == "" || url == null) {
      this.router.navigate(['/register']);
      return;
    }

    if (this.isFrame == true)
      return;

    window.open(url, "_self");
  }

}
