import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { TableComponent } from './components/table/table.component';
import { Vendor1Component } from './components/vendor1/vendor1.component';
import { Vendor2Component } from './components/vendor2/vendor2.component';
import { Vendor3Component } from './components/vendor3/vendor3.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ldlt3Component } from './components/ldlt3/ldlt3.component';
import { RecallButtonComponent } from './components/recall-button/recall-button.component';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { Ldlt4Component } from './components/ldlt4/ldlt4.component';
import { Ldlt1Component } from './components/ldlt1/ldlt1.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { QuotaButtonComponent } from './components/quota-button/quota-button.component';

import { TableFilterPipe } from './components/ldlt3/table-filter.pipe';
import { FindButtonComponent } from './components/find-button/find-button.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { Ldlt2Component } from './components/ldlt2/ldlt2.component';
import { KeysPipe } from './components/ldlt2/keys.pipe';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vendor1', component: Vendor1Component },
  { path: 'vendor2', component: Vendor2Component },
  { path: 'vendor3', component: Vendor3Component },
  { path: 'ldlt3', component: Ldlt3Component },
  { path: 'ldlt4', component: Ldlt4Component },
  { path: 'ldlt1', component: Ldlt1Component },
  { path: 'ldlt2', component: Ldlt2Component },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    ContentHeaderComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableComponent,
    Vendor1Component,
    Vendor2Component,
    Vendor3Component,
    SaveButtonComponent,
    DatePickerComponent,
    Ldlt3Component,
    RecallButtonComponent,
    DropdownListComponent,
    Ldlt4Component,
    Ldlt1Component,
    DeleteButtonComponent,
    QuotaButtonComponent,
    TableFilterPipe,
    FindButtonComponent,
    Ldlt2Component,
    KeysPipe



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
