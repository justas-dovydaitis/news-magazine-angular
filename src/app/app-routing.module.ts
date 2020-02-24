import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsViewComponent } from './views/posts-view/posts-view.component';
import { CreatePostComponent } from './views/create-post/create-post.component';


const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: PostsViewComponent,
    data: {
        title: 'Home'
    }
}, {
    path: 'life',
    component: PostsViewComponent,
    data: {
        title: 'Life'
    },
    pathMatch: 'full',
}, {
    path: 'new-post',
    component: CreatePostComponent,
    data: {
        title: 'New post'
    }
}, {
    path: 'edit-post',
    component: CreatePostComponent,
    data: {
        title: 'Edit post'
    }
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
