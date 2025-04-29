import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsersService } from '../../services/users.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit
{
  public user : FormControl;
  public name : FormControl;
  public email : FormControl;
  public phone : FormControl;
  constructor(private usersService: UsersService)
  {
    this.user = new FormControl('');
    this.name = new FormControl('');
    this.email = new FormControl('');
    this.phone = new FormControl('');
  }

  ngOnInit(): void 
  {
    firstValueFrom(this.usersService.getUserById(1)).then(resp =>
      {
        this.user.setValue(resp[0].Usuario)
        this.name.setValue(resp[0].Nombre)
        this.email.setValue(resp[0].Correo)
        this.phone.setValue(resp[0].Telefono)
      }
    );
  }

}
