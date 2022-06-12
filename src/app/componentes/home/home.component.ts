import { Component, OnInit } from '@angular/core';
import { ResultadosQuery } from 'src/app/models/resultados-query';
import { TableModel } from 'src/app/models/table-model.model';
import { HomeService } from 'src/app/services/home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultados : ResultadosQuery[] = [];
  p: number = 1;
  query: string = "";


  constructor(private homeService: HomeService) { }

  

  ngOnInit(): void {
  }

  buscar() {
    if (this.query != "") {
      this.homeService.buscar(this.query).subscribe(rtdo => this.resultados =  rtdo);
    }

    console.log(this.resultados);

  }
}
