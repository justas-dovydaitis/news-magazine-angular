import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PostComponent } from './components/post/post.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { PrimaryNavbarComponent } from'./components/navbars/primary-navbar/primary-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { SelectComponent } from './components/inputs/select/select.component';
import { TextareaComponent } from './components/inputs/textarea/textarea.component';
import { FileComponent } from './components/inputs/file/file.component';
import { HomeComponent } from './views/home/home.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { SecondaryNavbarComponent } from './components/navbars/secondary-navbar/secondary-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FeaturedPostComponent,
    LatestPostComponent,
    PrimaryNavbarComponent,
    FooterComponent,
    HeaderComponent,
    PostFormComponent,
    SelectComponent,
    TextareaComponent,
    FileComponent,
    HomeComponent,
    CreatePostComponent,
    SecondaryNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
