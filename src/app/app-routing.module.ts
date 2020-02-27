import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsViewComponent } from './views/posts-view/posts-view.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { PostContainerComponent } from './components/post-container/post-container.component';

const routes: Routes = [{
    path: '',
    component: PostsViewComponent,
    outlet: 'primary',
    children: [
        {
            path: '',
            component: PostContainerComponent,
        },
        {
            path: 'life',
            component: PostContainerComponent,

        }
    ]

}, {
    path: 'create-post',
    component: CreatePostComponent,

}, {
    path: 'edit-post/:id',
    component: CreatePostComponent,
},];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
