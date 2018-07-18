import { Component, OnInit, Input } from '@angular/core';
import { Adherent } from '../adherent';


@Component({
  selector: 'app-carte-pdf',
  templateUrl: './carte-pdf.component.html',
  styleUrls: ['./carte-pdf.component.css']
})
export class CartePdfComponent implements OnInit {

  @Input() adherent: Adherent;

  constructor() { }

  ngOnInit() {
  }

}
