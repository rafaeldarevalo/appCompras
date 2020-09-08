import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProveedoresComponent} from './proveedores/proveedores/proveedores.component';
import {ProveedoresService} from './servicios/proveedores.service';
import {InicioComponent} from './inicio/inicio.component';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {AddproveeComponent} from './proveedores/addprovee/addprovee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddpresComponent} from './presupuestos/addpres/addpres.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'proveedores',
        component: ProveedoresComponent
    },
    {
        path: 'addprovee',
        component: AddproveeComponent
    },
    {
        path: 'addpres',
        component: AddpresComponent
    },
    {
        path: '**',
        component: InicioComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ProveedoresComponent,
        InicioComponent,
        HeaderComponent,
        AddproveeComponent,
        AddpresComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        ProveedoresService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
