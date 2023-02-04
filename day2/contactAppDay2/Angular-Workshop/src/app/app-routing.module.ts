import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {path: "",component:ContactListComponent},
  {path: "list",component:ContactListComponent},
  {path: "add",component:ContactAddComponent},
  {path: "edit",component:ContactEditComponent},
  {path: "details",component:ContactDetailsComponent},
  {path: "**",component:ContactDetailsComponent},
];
// if no route matches, it goes to ** above path and that will show error.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
