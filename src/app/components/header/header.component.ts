import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { OptionsService } from '../../services/options.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit
{
  public options: any[];
  
  constructor(private route:Router, private optionsService: OptionsService) 
  {
    this.options = [];
  }

  ngOnInit(): void {
    firstValueFrom(this.optionsService.getOptions()).then(resp => 
      {
        this.options = resp
      }
    )
  }

  public nav(url: string)
  {
    this.route.navigate([url])
  }

}
