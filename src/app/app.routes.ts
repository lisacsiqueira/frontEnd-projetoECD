import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { PagOracoesComponent } from './components/pag-oracoes/pag-oracoes.component';
import { PagUserComponent } from './components/pag-user/pag-user.component';

export const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pag-oracoes', component: PagOracoesComponent},
  {path: 'pag-user', component: PagUserComponent},
  {path: '**', redirectTo: '' }
];
