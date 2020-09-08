import { Component, OnInit } from '@angular/core';
import {ProveedoresService} from '../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any;
  // Parámetro en el constructor que iguala a la clase ProveedoresService del servicio
  constructor(private proveedoresService: ProveedoresService) {}
  ngOnInit(): void { // Cuando Angular cargue el componente se iguala la propiedad mensaje a una propiedad que llama al método getProveedores del servicio
    this.proveedores = this.proveedoresService.getProveedores();
  }

}
