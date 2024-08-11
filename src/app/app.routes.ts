import { Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './pantalal-principal/pantalal-principal.component';
import { PanelPintarComponent } from './panel-pintar/panel-pintar.component';
import { IdentificadorComponent } from './identificador/identificador.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

    {path : 'principal', component:PantallaPrincipalComponent},
    {path : '',redirectTo:'principal',pathMatch:'full'},
    {path : 'panel-pintar', component:PanelPintarComponent},
    {path : 'identificador', component:IdentificadorComponent},
    {path : 'proyectos', component:ProyectosComponent},
    {path : 'about', component:AboutComponent}

];