import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements OnInit {
  tab: Array<string> = ['premoer', 'duxieme', 'troisieme'];
  nord = 'lille';
  sud = 'marseille';
  capitale = 'paris';

  constructor() {}

  ngOnInit(): void {}
}
