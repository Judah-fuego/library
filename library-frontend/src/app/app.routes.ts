import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';
import { TrendingComponent } from './trending/trending.component';

export const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'about', component: AboutComponent },
  { path: 'trending', component: TrendingComponent }
];
