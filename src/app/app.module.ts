import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';

import { CatalogsComponent } from './catalogs/catalogs.component';
import { ConfigurationComponent } from './configuration/configuration.component';

//import {MatMenuModule} from '@angular/material/menu';

import { routing } from './app.routes';

import { AppRoutesModule } from './app.routes';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { NotaryComponent } from './catalogs/notary/notary.component';
import { JudgesComponent } from './catalogs/judges/judges.component';
import { CitiesComponent } from './catalogs/cities/cities.component';
import { UsersComponent } from './catalogs/users/users.component';
import { RecordingActsComponent } from './catalogs/recording-acts/recording-acts.component';
import { RelationsComponent } from './catalogs/relations/relations.component';
import { NotaryOfficeComponent } from './catalogs/notary-office/notary-office.component';
import { JudicialOfficeComponent } from './catalogs/judicial-office/judicial-office.component';
import { ReportsComponent } from './reports/reports.component';
import { OthersComponent } from './others/others.component';
import { RolesComponent } from './catalogs/roles/roles.component';
/*
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
*/

@NgModule({
  declarations: [
    AppComponent, HeaderComponent,
    FooterComponent, CatalogsComponent, 
    LoginComponent, SupportComponent, 
    NotaryComponent,  JudgesComponent, 
    CitiesComponent, UsersComponent, 
    RecordingActsComponent, RelationsComponent, 
    NotaryOfficeComponent, JudicialOfficeComponent, 
    ConfigurationComponent, ReportsComponent, 
    OthersComponent, RolesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
    {path:'catalogs', component:CatalogsComponent},
    {path:'login', component:LoginComponent},
    {path:'support', component:SupportComponent},
    {path:'configuration', component:ConfigurationComponent},
    {path:'reports', component:ReportsComponent},
    {path:'others', component:OthersComponent},
    {path:'catalogs/notary', component:NotaryComponent},
    {path:'catalogs/judges', component:JudgesComponent},
    {path:'catalogs/notaryOffice', component:NotaryOfficeComponent},
    {path:'catalogs/relations', component:RelationsComponent},
    {path:'catalogs/judicialOffice', component:JudicialOfficeComponent},
    {path:'catalogs/cities', component:CitiesComponent},
    {path:'catalogs/users', component:UsersComponent},
    {path:'catalogs/recordingsActs', component:RecordingActsComponent},
    {path:'catalogs/roles', component:RolesComponent}
    ])
  ],
/*
  exports: [
   // CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],*/

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
