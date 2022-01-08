import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './generate/generate.component';
import { DeveloperComponent } from './developer/developer.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {path:"generate" , component:GenerateComponent},
  {path:"developer" , component:DeveloperComponent},
  {path:"input", component:InputComponent},
  {path:'',redirectTo:'input', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
