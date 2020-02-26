import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PostComponent } from './components/post/post.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { PrimaryNavbarComponent } from './components/navbars/primary-navbar/primary-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/inputs/select/select.component';
import { TextareaComponent } from './components/inputs/textarea/textarea.component';
import { FileComponent } from './components/inputs/file/file.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { SecondaryNavbarComponent } from './components/navbars/secondary-navbar/secondary-navbar.component';
import { SearchRoundedComponent } from './components/inputs/search-rounded/search-rounded.component';
import { PostsViewComponent } from './views/posts-view/posts-view.component';
import { FeaturedPostContainerComponent } from './components/featured-post-container/featured-post-container.component';
import { LatestPostContainerComponent } from './components/latest-post-container/latest-post-container.component';
import { PostContainerComponent } from './components/post-container/post-container.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        FeaturedPostComponent,
        LatestPostComponent,
        PrimaryNavbarComponent,
        FooterComponent,
        HeaderComponent,
        SelectComponent,
        TextareaComponent,
        FileComponent,
        CreatePostComponent,
        SecondaryNavbarComponent,
        SearchRoundedComponent,
        PostsViewComponent,
        FeaturedPostContainerComponent,
        LatestPostContainerComponent,
        PostContainerComponent,
        TimeAgoPipe,

    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
