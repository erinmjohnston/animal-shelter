import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component';
import { AdoptComponent } from './adopt/adopt.component';
import { AdoptLoginComponent } from './adopt-login/adopt-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    VolunteerComponent,
    HomeComponent,
    LostComponent,
    AdoptComponent,
    AdoptLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
