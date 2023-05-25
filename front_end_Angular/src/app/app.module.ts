
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import{HttpClientModule} from'@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth-guard.service';





import { MenuadminComponent } from './admin/menuadmin/menuadmin.component';
import { EditprofileadminComponent } from './admin/editprofileadmin/editprofileadmin.component';
import { ListpartneracceuilComponent } from './admin/listpartners/listpartneracceuil/listpartneracceuil.component';
import { WelcomeComponent } from './admin/acceuiladmin/welcome/welcome.component';
import { ChoixadminComponent } from './admin/acceuiladmin/choixadmin/choixadmin.component';
import { AccadminComponent } from './admin/acceuiladmin/accadmin/accadmin.component';
import { ConnexionComponent } from './admin/connexionadmin/connexion/connexion.component';





import { FooterComponent } from './commun/footer/footer.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AcceuilComponent } from './commun/acceuil/acceuil.component';


import { ConnexionadminService } from './services/connexionadmin.service';

import { PartnerconnexionComponent } from './partner/connexionpartner/connexion/partnerconnexion/partnerconnexion.component';
import { PasswordComponent } from './admin/editprofileadmin/password/password.component';
import { InscriptionComponent } from './partner/inscription/inscription/inscription.component';
import { ListrequestComponent } from './admin/listrequest/listrequest/listrequest.component';
import { DatePipe } from '@angular/common';
import { AccComponent } from './partner/acceuilpartner/acc/acc.component';
import { ChoixpartnerComponent } from './partner/acceuilpartner/choixpartner/choixpartner.component';
import { WelcomepartnerComponent } from './partner/acceuilpartner/welcomepartner/welcomepartner.component';
import { MenupartnerComponent } from './partner/menupartner/menupartner/menupartner.component';
import { EditprofilepartnerComponentt} from './partner/editprofilepartner/editprofilepartner.component';
import { PartnerpasswordComponent } from './partner/editprofilepartner/partnerpassword/partnerpassword.component';
import { ListdocComponent } from './admin/docadmin/listdoc/listdoc.component';






const appRoutes: Routes = [

  { path: 'acceuil', component:AcceuilComponent},
  { path: '', component:AcceuilComponent},


  
  { path: 'inscription', component:InscriptionComponent},
  { path: 'acceuil/inscription', component:InscriptionComponent},

  { path: 'partnerconnexion', component:PartnerconnexionComponent},
  { path: 'acceuil/partnerconnexion', component:PartnerconnexionComponent},


  { path: 'partnercceuil', component:AccComponent},


  
{ path: 'partnereditprofile',component:EditprofilepartnerComponentt},
{ path: 'accpartner/partnereditprofile',component:EditprofilepartnerComponentt},
{ path: 'accpartner/partnereditprofile/editpassword/partnereditprofile', component:EditprofilepartnerComponentt},




{ path: 'partnereditpassword', component:PartnerpasswordComponent},
{ path: 'accpartner/partnereditprofile/partnereditpassword', component:PartnerpasswordComponent},













{ path: 'adminconnexion', component:ConnexionComponent},
{ path: 'acceuil/adminconnexion', component:ConnexionComponent},


{ path: 'adminacceuil', component:AccadminComponent},


{ path: 'admineditprofile',component:EditprofileadminComponent},
{ path: 'adminacceuil/admineditprofile',component:EditprofileadminComponent},
{ path: 'adminacceuil/admineditprofile/editpassword/admineditprofile', component:EditprofileadminComponent},

{path: 'adminacceuil/listrequest/adminpartnerlistacceuil',component:ListpartneracceuilComponent},

{ path: 'editpassword', component:PasswordComponent},
{ path: 'adminacceuil/admineditprofile/editpassword', component:PasswordComponent},




{ path: 'adminpartnerlistacceuil',component:ListpartneracceuilComponent},
{ path: 'adminacceuil/adminpartnerlistacceuil',component:ListpartneracceuilComponent},



  { path: "listrequest", component:ListrequestComponent},
  { path: "adminacceuil/listrequest", component:ListrequestComponent},



  { path: "listdoc", component:ListdocComponent},




  { path: 'adminmenu', component:MenuadminComponent},
  {path:'accpartner',component:AccComponent},
  

 

  






  


];



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuadminComponent,
    EditprofileadminComponent,
    WelcomeComponent,
    ChoixadminComponent,
    ListpartneracceuilComponent,
    MenuComponent,
    AcceuilComponent,
    AccadminComponent,
    ConnexionComponent,
    PartnerconnexionComponent,
    PasswordComponent,
    InscriptionComponent,
    ListrequestComponent,
    AccComponent,
    ChoixpartnerComponent,
    WelcomepartnerComponent,
    MenupartnerComponent,
    EditprofilepartnerComponentt,
    PartnerpasswordComponent,
    ListdocComponent,
  ],

 
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,

    HttpClientModule

  ],
  providers: [ConnexionadminService,AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
