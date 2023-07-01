import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  Formulario : FormGroup = new FormGroup({
    sitioWeb : new FormControl('',[Validators.required,Validators.pattern('^(http|https)://[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]),
    edad : new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]), 
  })

  submitForm():void{
    alert(JSON.stringify(this.Formulario.value));
  }
}
