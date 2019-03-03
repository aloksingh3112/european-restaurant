import { AppService } from './appservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContentListComponent } from './content/content-list/content-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ContentComponent,
    FooterComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule,
     NgxPaginationModule,
     HttpClientModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
