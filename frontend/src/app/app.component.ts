import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
