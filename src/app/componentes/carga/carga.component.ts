import { Component, OnInit } from '@angular/core';
import { IndexModel } from 'src/app/models/index-model.model';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  index : IndexModel[]=[];

  constructor(private indexService: IndexService) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(){
    this.indexService.buscarIndex().subscribe(rtdo => this.index =  rtdo);
  }

  async indexar(){
    await this.indexService.indexar().subscribe(rtdo => this.index.push(rtdo));
  }


}
