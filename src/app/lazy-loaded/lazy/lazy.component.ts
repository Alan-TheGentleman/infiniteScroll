import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit {
  model: string = '';
  modelIsValid: boolean = false;
  control: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  private validateModel(valorDelInput: string) {
    return !!valorDelInput && valorDelInput.length > 4;
  }

  cambiarNombre(valorDelInput: string) {
    this.modelIsValid = this.validateModel(valorDelInput);
  }

  ngOnInit() {
    console.log(this.control);
  }
}
