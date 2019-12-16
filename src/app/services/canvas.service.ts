import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  dimension = 300;
  debugging = false;

  constructor() { }

  stretch(txt: string, canvasEl: ElementRef) {
    txt = txt.toUpperCase();
    const canvas = canvasEl.nativeElement;

    canvas.setAttribute('width', this.dimension);
    canvas.setAttribute('height', this.dimension);
    const ctx = canvas.getContext('2d');
    const metrics = ctx.measureText(txt);
    console.log('metrics', metrics);
    if (metrics.width > this.dimension) {
    }
    ctx.scale(1.1, 25);

    ctx.font = '20px Arial';
    ctx.textBaseline = 'top';
    ctx.fillText(txt, 0, 0);

  }
}
