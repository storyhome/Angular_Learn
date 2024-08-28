import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
  ],
  templateUrl : './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
    fb = inject(FormBuilder)

    form = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      favoriteFood: [''],
      dateOfBirth: [''],
    });
    title= 'BOARD GATE'
 }
