import { Component, ViewChild, ElementRef } from '@angular/core';
import { CanvasService } from '../services/canvas.service';

@Component({
  selector: 'app-create-your-own',
  templateUrl: './create-your-own.component.html',
  styleUrls: ['./create-your-own.component.scss']
})
export class CreateYourOwnComponent {

  @ViewChild('drawHere') canvas: ElementRef;
  txt: string;

  constructor(private canvasService: CanvasService) {}

  handleText(txt: string) {
    this.canvasService.stretch(txt, this.canvas);
    this.txt = txt;
  }

  download() {
    this.canvasService.download(this.txt, this.canvas);
  }

}
