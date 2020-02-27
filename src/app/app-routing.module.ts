import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsViewComponent } from './views/posts-view/posts-view.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { PostContainerComponent } from './components/post-container/post-container.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: PostsViewComponent,

        children: [
            {
                path: '',
                component: PostContainerComponent,
            },
            {
                path: 'categories/:category',
                component: PostContainerComponent,
            },
        ]
    }, {
        path: 'create-post',
        component: CreatePostComponent,
    }, {
        path: 'edit-post/:id',
        component: CreatePostComponent,
    }, {
        path: '**',
        component: NotFoundComponent
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
