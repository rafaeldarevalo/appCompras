import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.scss']
})
export class AddproveeComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  proveedor: any;
  constructor() {
    this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      localidad: '',
      telefono: '',
      email: '',
      contacto: ''
    };
  }
  onSubmit(){
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;
    this.formpro.reset();
  }
  ngOnInit(): void {
  }

}
