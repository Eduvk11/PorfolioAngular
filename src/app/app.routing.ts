// Importar los modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { ErrorComponent } from './component/error/error.component';
import { ArticleComponent } from './component/article/article.component';
import { SearchComponent } from './component/search/search.component';
import { ArticleNewComponent } from './component/article-new/article-new.component';
import { ArticleEditComponent } from './component/article-edit/article-edit.component';


// Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/crear', component: ArticleNewComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'blog/articulo/:id', component: ArticleComponent },
  { path: 'blog/editar/:id', component: ArticleEditComponent },
  { path: 'buscar/:search', component: SearchComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: '**', component: ErrorComponent }
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
