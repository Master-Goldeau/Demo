import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Adherent } from '../adherent';
import { NgForm } from '../../../node_modules/@angular/forms';
import { JsonPipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {
  adherent: Adherent;
  @Output() onCreate: EventEmitter<Adherent>;

  constructor() {
    this.adherent = new Adherent();
    this.onCreate = new EventEmitter();
   }

  ngOnInit() {
  }

  submit(form: NgForm) {
    this.onCreate.emit(JSON.parse(JSON.stringify(this.adherent)));
    form.resetForm();
  }
}
