import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-editors',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './editors.component.html',
  styleUrl: './editors.component.css'
})
export class EditorsComponent {

}
