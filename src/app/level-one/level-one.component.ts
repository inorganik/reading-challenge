import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CanvasService } from '../services/canvas.service';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss']
})

export class LevelOneComponent implements AfterViewInit {
  @ViewChild('drawHere') canvas: ElementRef;

  constructor(private canvasService: CanvasService) {}

  ngAfterViewInit() {
    this.canvasService.stretch('Can you read this?', this.canvas);
  }

}
