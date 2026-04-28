import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { UsersModule } from './users/users.module';
import { RepositoriesModule } from './repositories/repositories.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    UsersModule,
    RepositoriesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
