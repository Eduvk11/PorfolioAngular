import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from "angular-file-uploader";



import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SliderComponent } from './component/slider/slider.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { ErrorComponent } from './component/error/error.component';
import { PeliculaComponent } from './component/pelicula/pelicula.component';
import { EsParPipe } from './pipes/espar.pipe';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './component/articles/articles.component';
import { ArticleComponent } from './component/article/article.component';
import { SearchComponent } from './component/search/search.component';
import { ArticleNewComponent } from './component/article-new/article-new.component';
import { ArticleEditComponent } from './component/article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PeliculasComponent,
    ErrorComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
