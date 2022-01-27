import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value: string) {
    if (value == "" || value.indexOf("https://") == 0 || value.indexOf("http://") == 0)
      localStorage.setItem('dataSource', value);

    this.router.navigate(['/']);
  }
  
}
