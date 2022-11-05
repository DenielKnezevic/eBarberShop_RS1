import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { ZaposleniciComponent } from './zaposlenici/zaposlenici.component';
import { LokacijeComponent } from './lokacije/lokacije.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { NovostiComponent } from './novosti/novosti.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { TerminComponent } from './termin/termin.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { ArhivaComponent } from './arhiva/arhiva.component';
import { EditProizvodiComponent } from './proizvodi/edit-proizvodi/edit-proizvodi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import { ZModalComponent } from './zaposlenici/zmodal/zmodal.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { PModalComponent } from './proizvodi/pmodal/pmodal.component';
import {MatSelectModule} from "@angular/material/select";
import { LModalComponent } from './lokacije/lmodal/lmodal.component';
import { PonudaModalComponent } from './ponuda/ponuda-modal/ponuda-modal.component';
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from "@angular/material/tabs";
import { PonudaPregledComponent } from './ponuda-pregled/ponuda-pregled.component';
import { ProizvodiPregledComponent } from './proizvodi-pregled/proizvodi-pregled.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatPaginatorModule} from "@angular/material/paginator";
import { TerminiEditComponent } from './termini-edit/termini-edit.component';
import { TmodalComponent } from './termini-edit/tmodal/tmodal.component';
import { AdministracijaComponent } from './administracija/administracija.component';
import { RouterPanelComponent } from './router-panel/router-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        ZaposleniciComponent,
        LokacijeComponent,
        ProizvodiComponent,
        PonudaComponent,
        NovostiComponent,
        GalerijaComponent,
        TerminComponent,
        RegistracijaComponent,
        ArhivaComponent,
        EditProizvodiComponent,
        ZModalComponent,
        PModalComponent,
        LModalComponent,
        PonudaModalComponent,
        LoginComponent,
        PonudaPregledComponent,
        ProizvodiPregledComponent,
        TerminiEditComponent,
        TmodalComponent,
        AdministracijaComponent,
        RouterPanelComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'zaposleniciEdit', component: ZaposleniciComponent },
            { path: 'galerijaEdit', component: GalerijaComponent },
            { path: 'lokacijeEdit', component: LokacijeComponent },
            { path: 'ponudaEdit', component: PonudaComponent },
            { path: 'proizvodiEdit', component: ProizvodiComponent },
            { path: 'novostiEdit', component: NovostiComponent },
            { path: 'arhivaEdit', component: ArhivaComponent },
            { path: 'rezervacijaEdit', component: TerminComponent },
            { path: '', component: LoginComponent },
            { path: 'termini', component: PonudaPregledComponent },
            { path: 'proizvodi', component: ProizvodiPregledComponent },
            { path: 'terminiEdit', component: TerminiEditComponent },
            { path: 'administracija' , component: AdministracijaComponent},
        ]),
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatTabsModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatPaginatorModule,
        NgChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
