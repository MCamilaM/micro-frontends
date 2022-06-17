import { Component, OnInit } from '@angular/core';
import { Pais } from './Pais';
import { DatosService } from './services/datos-service.service';

@Component({
  selector: 'mf-footer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'footer';

  paises: any[] = [];
  pais: Pais = {
    name: "",
    population: 0,
    continents : [],
    capital: "",
    region: "",
    flag: "",
  };

  constructor(private datosService: DatosService) {
  }
  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.datosService.obtenerPaises().subscribe((datos : any) =>{
      this.paises = datos;
      //console.log(datos)
    //   datos.forEach((pais: any) => {
    //     this.pais.name = pais.name.common;
    //     this.pais.population = pais.population;
    //     this.pais.continents = pais.continents;
    //     this.pais.capital = pais.capital;
    //     this.pais.region = pais.region;
    //     this.pais.flag = pais.flags.png;
        
    // })
    //console.log(this.paises);
});


}

}
