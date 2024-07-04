import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[autofocusDirective]',
})
export class AutofocusDirective {
  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    this.host.nativeElement.focus();
  }
}
