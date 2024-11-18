import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent {

  constructor(private http: HttpClient) {}

  buttonText = 'Hello World';
  toggle(): void {
    this.http.post<{ toggled: boolean }>('http://127.0.0.1:8000/api/toggle/', {})
      .subscribe(response => {
        this.buttonText = response.toggled ? 'Toggled On' : 'Hello World';
      });
  }
}
