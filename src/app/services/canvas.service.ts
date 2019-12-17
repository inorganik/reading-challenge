import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  dimension = 300;

  constructor() { }

  stretch(txt: string, canvasEl: ElementRef) {
    txt = txt.toUpperCase();
    const canvas = canvasEl.nativeElement;
    // canvas.style.border = '1px black solid'; // for debug

    canvas.setAttribute('width', this.dimension);
    canvas.setAttribute('height', this.dimension);

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontSize = 50;
    const lineHeight = fontSize * .82;

    ctx.font = `${fontSize}px Arial`;
    ctx.textBaseline = 'botton';
    ctx.textAlign = 'center';

    let scaleX = 0.3;
    const metrics = ctx.measureText(txt);
    if (metrics.width > canvas.width) {
      scaleX = Math.min(scaleX, canvas.width / metrics.width);
    }
    let xPos = canvas.width / 2;
    const posXScale = 1 / scaleX;
    xPos = xPos * posXScale;
    const scaleY = this.dimension / lineHeight;
    const posYScale = 1 / scaleY;
    ctx.fillStyle = 'black';
    ctx.scale(scaleX, scaleY);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.fillText(txt, xPos, canvas.height * posYScale - 2.5);

  }

  download(txt: string, canvasEl: ElementRef) {
    const link = document.createElement('a');
    const filename = txt.split(' ').join('-');
    link.download = `${filename}.png`;
    link.href = canvasEl.nativeElement.toDataURL();
    link.click();
  }
}
