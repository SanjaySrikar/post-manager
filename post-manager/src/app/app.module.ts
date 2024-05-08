import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { UserListComponent } from './admin/components/user-list/user-list.component';
import { PostFeedComponent } from './admin/components/post-feed/post-feed.component';
import { UserPostComponent } from './common-components/user/user-post/user-post.component';
import { UserProfileComponent } from './common-components/user/user-profile/user-profile.component';
import { CreatePostComponent } from './admin/components/create-post/create-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    UserListComponent,
    PostFeedComponent,
    UserPostComponent,
    UserProfileComponent,
    CreatePostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
