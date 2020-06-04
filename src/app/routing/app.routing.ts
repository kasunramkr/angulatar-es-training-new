import { Routes, RouterModule } from '@angular/router';
import { MwMediaItemListComponent } from '../componets/mw-media-item-list/mw-media-item-list.component';
import { MwMediaItemFormComponent } from '../componets/mw-media-item-form/mw-media-item-form.component';

const appRoutes: Routes = [
  { path: 'add', component: MwMediaItemFormComponent },
  { path: ':medium', component: MwMediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
