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
    // todo: remove
    // canvas.style.border = '1px black solid';

    canvas.setAttribute('width', this.dimension);
    canvas.setAttribute('height', this.dimension);

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontSize = 40;
    const lineHeight = fontSize * .75;

    ctx.font = `${fontSize}px Arial`;
    ctx.textBaseline = 'top';

    const metrics = ctx.measureText(txt);
    const scaleX = canvas.width / metrics.width;
    const scaleY = canvas.height / lineHeight;
    ctx.scale(scaleX, scaleY);

    ctx.fillStyle = 'black';
    ctx.fillText(txt, 0, -1.5);

  }

  download(txt: string, canvasEl: ElementRef) {
    const link = document.createElement('a');
    const filename = txt.split(' ').join('-');
    link.download = `${filename}.png`;
    link.href = canvasEl.nativeElement.toDataURL();
    link.click();
  }
}
