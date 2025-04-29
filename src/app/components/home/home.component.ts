import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ComicsService } from '../../services/comics.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit
{
  public comics:any[];

  constructor(private comicsService: ComicsService)
  {
    this.comics = [];
  }

  ngOnInit(): void
  {
    firstValueFrom(this.comicsService.getComics()).then( resp =>
      {
        this.comics = resp      
      }
    );
  }
}
