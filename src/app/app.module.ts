import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MwMediaItemComponent } from './componets/mw-media-item/mw-media-item.component';
import { MwMediaItemListComponent } from './componets/mw-media-item-list/mw-media-item-list.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { CatogoryListPipe } from './pipes/catogory-list.pipe';
import { MwMediaItemFormComponent } from './componets/mw-media-item-form/mw-media-item-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {lookupListToken, lookupLists} from './const/privders';
import {HttpXhrBackend, HttpClientModule} from '@angular/common/http';
import {MockXHRBackend} from './mock-xhr-backend';
import {routing} from './routing/app.routing';
import { MwCategoryListComponent } from './componets/mw-category-list/mw-category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MwMediaItemComponent,
    MwMediaItemListComponent,
    FavoriteDirective,
    CatogoryListPipe,
    MwMediaItemFormComponent,
    MwCategoryListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
