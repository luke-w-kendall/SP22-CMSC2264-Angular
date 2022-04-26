import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListPageComponent } from './pages/dog-list-page/dog-list-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CatListPageComponent } from './pages/cat-list-page/cat-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'dog-list', component: DogListPageComponent},
  {path: 'cat-list', component: CatListPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
