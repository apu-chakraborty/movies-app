import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/shared/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopularItemsComponent } from './components/shared/popular-items/popular-items.component';
import { PopularItemComponent } from './components/shared/popular-item/popular-item.component';
import { MovieComponent } from './pages/movie/movie.component';
import {TabViewModule} from 'primeng/tabview';
import {ImageModule} from 'primeng/image';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { RecommendedVideosComponent } from './components/recommended-videos/recommended-videos.component';
import { MovieCreditComponent } from './components/movie-credit/movie-credit.component';
import {CarouselModule} from 'primeng/carousel';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    PopularItemsComponent,
    PopularItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    RecommendedVideosComponent,
    MovieCreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
