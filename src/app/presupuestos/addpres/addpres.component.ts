import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.scss']
})
export class AddpresComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;

  constructor(private pf: FormBuilder) {
  }

  ngOnInit(): void {
    this.presupuestoForm = this.pf.group(
        {
          proveedor: ['', Validators.required],
          fecha: '',
          concepto: '',
          base: '',
          tipo: '',
          iva: '',
          total: '',
        });
  }
  savePresupuesto() {
    console.log('HOla mundo');
    const savePresupuesto = {
    proveedor: this.presupuestoForm.get('proveedor').value,
    fecha: this. presupuestoForm.get('fecha').value,
    concepto: this.presupuestoForm.get('concepto').value,
    base: this.presupuestoForm.get('base').value,
    tipo: this.presupuestoForm.get('tipo').value,
    iva: this.presupuestoForm.get('iva').value,
    total: this.presupuestoForm.get('total').value
  }; return savePresupuesto; }

  onSubmit() { this.presupuesto = this.savePresupuesto();}

}





