import {Component} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput, MatInputModule} from "@angular/material/input";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule} from "@angular/material/core";
import {ZikeyDateAdapter} from "./zikey-date-adapter";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS} from "@angular/material-moment-adapter";
import {JALALI_MOMENT_FORMATS} from "./jalali_moment_formats";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    NgIf,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,],
  providers: [
    {
      provide: DateAdapter,
      useClass: ZikeyDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_LOCALE, useValue: 'fa-IR'}, // Set you// r desired locale
    {provide: MAT_DATE_FORMATS, useValue: JALALI_MOMENT_FORMATS}, // Optional: You can provide custom date formats here
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}
