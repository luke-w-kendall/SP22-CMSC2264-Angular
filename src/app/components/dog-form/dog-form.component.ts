import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {

  @Output()
  private addDog: EventEmitter<{ price: number, breed: string, color: string, birthdate: Date, weight: number }> =
    new EventEmitter<{ price: number; breed: string; color: string; birthdate: Date; weight: number }>();

  formData: { price: number, breed: string, color: string, birthdate: Date, weight: number } = {
    price: 0,
    breed: '',
    color: '#000000',
    birthdate: new Date(),
    weight: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  submit = () => {
    this.addDog.emit(this.formData);
  }

}
