import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { EncuestaService } from './services/encuesta.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    MatTabsModule, 
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'mashup-carta-oferta';

  showFilters: boolean = false;

  constructor(private encuestaService: EncuestaService){}


  ngOnInit(): void {


    this.encuestaService.getTest()
    .then((data:any) =>{
      console.log(data)
    })
    .catch((err:any) =>{
      console.log('err:',err)
    })

  }

  toggleSettings(){
    this.showFilters = !this.showFilters;
  }


}