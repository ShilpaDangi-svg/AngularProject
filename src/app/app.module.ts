import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomePipePipe } from './custome-pipe.pipe';
import { TotalElementPipe } from './total-element.pipe';
import { EmployeeServiceService } from './employee-service.service';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomePipePipe,
    TotalElementPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    UserComponent
  //  HeaderComponent,
  // FooterComponent
    // Other modules to import as needed (e.g., HttpClientModule, FormsModule, ReactiveFormsModule)
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }