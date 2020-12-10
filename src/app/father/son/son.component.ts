import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent implements OnInit {
  @Input() order: string = '';
  @Input() ville: string = '';
  constructor() {}

  ngOnInit(): void {}
}
