import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditorsService } from '../../services/editors.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-editors',
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './editors.component.html',
  styleUrl: './editors.component.css'
})
export class EditorsComponent implements OnInit
{
  public comics: any[];
  public editors:any[];
  
  constructor(private editorsService: EditorsService, private comicsService: ComicsService)
  {
    this.comics = [];
    this.editors = [];
  }

  ngOnInit(): void
  {
    firstValueFrom(this.editorsService.getEditors()).then( resp =>
      {
        this.editors = resp      
      }
    );
  }

  public searchEditor(editor: number)
  {
    firstValueFrom(this.comicsService.getComicsByEditor(editor)).then( resp =>
      {
        this.comics = resp      
      }
    )
  }

  public clear()
  {
    this.comics = [];
  }
}
