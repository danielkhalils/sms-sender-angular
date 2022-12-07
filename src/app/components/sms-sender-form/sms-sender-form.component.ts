import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sms-sender-form',
  templateUrl: './sms-sender-form.component.html',
  styleUrls: ['./sms-sender-form.component.css']
})
export class MomentFormComponent implements OnInit{
  @Input() btnText!: string;

  constructor() {}

  ngOnInit(): void {}
}
