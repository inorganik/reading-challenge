import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss']
})
export class InputBarComponent implements OnInit {

  textInput = new FormControl('');
  txt: string;

  @Output() submitted = new EventEmitter();
  @Output() download = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.txt = this.textInput.value;
    this.submitted.emit(this.txt);
  }
  downloadImage() {
    this.download.emit();
  }
}
