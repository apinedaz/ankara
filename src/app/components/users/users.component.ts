import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


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
export class UsersComponent 
{
  public dataSource = [{Usuario:'admin',Nombre:'administrador',Correo:'afpineda1@poligran.edu.co',Telefono:'313 439 37 43'}];

  public column = ['Usuario','Nombre','Correo','Telefono','editar'];
}
