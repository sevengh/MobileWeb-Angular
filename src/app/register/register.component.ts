import { Component, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isFrame: boolean = false;
  url: string | null = "https://www.shamanayev.tk/mobile-web";

  constructor(private router: Router) {
    this.isFrame = localStorage.getItem('iframe') == "true";

    let url = localStorage.getItem('dataSource')
    
    if (url != null)
      this.url = url;
  }

  onSubmit(value: string) {
    if (value === "") {
      localStorage.removeItem('dataSource');
    }

    if (value.indexOf("https://") == 0 || value.indexOf("http://") == 0) {
      localStorage.setItem('dataSource', value);
    }

    this.router.navigate(['/']);
  }

  changeChecked() {
    localStorage.setItem('iframe', this.isFrame.toString());
  }

  setUrl(url: string) {
    this.url = url;
  }

}
