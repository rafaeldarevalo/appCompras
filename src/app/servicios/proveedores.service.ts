import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  proveedores: any = [
      {
          nombre: 'Telefónica',
          cif: 'B12',
          direccion: 'Cara 45 No. 103-23',
          localidad: 'Suba',
          telefono: '8149036',
          email: 'info@telefonica.com.co',
          contacto: 'Paula Ortiz Arévalo'
      },
      {
          nombre: 'Claro',
          cif: 'B15',
          direccion: 'Cara 25 No. 123-23',
          localidad: 'Chapinero',
          telefono: '8234524',
          email: 'info@claro.com.co',
          contacto: 'Juan Ortiz Arévalo'
      }
      ,
      {
          nombre: 'Claro',
          cif: 'B15',
          direccion: 'Cara 25 No. 123-23',
          localidad: 'Chapinero',
          telefono: '8234524',
          email: 'info@claro.com.co',
          contacto: 'Elissa Taylor'
      }
  ];
  getProveedores(){
      return this.proveedores; } // Método para enviar al componente
  constructor() { }
}
