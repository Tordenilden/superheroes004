import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'hero', component: HeroComponent },
  { path: 'test', component: TestComponent },
  { path: 'test/:id', component: TestComponent },
  // { path: 'banan', component: TestComponent },
  // { path: 'banan/:id', component: TestComponent },

];




// https://www.turing.com/kb/9-ways-to-pass-through-angular-routerstate
// How to get data again?? from other page => Queryparams

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
