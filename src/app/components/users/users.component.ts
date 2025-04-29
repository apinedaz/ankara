import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UsersService } from '../../services/users.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-users',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit
{
  public dataSource:any[];

  public column = ['Usuario','Nombre','Correo','Telefono','editar'];

  constructor (private usersService: UsersService)
  {
    this.dataSource = [];
  }

  ngOnInit(): void {
    firstValueFrom(this.usersService.getUsers()).then(resp =>
      {
        this.dataSource = resp    
      }
    )
  }


}
