import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
    // Filter to not remove style tags: http://stackoverflow.com/questions/39628007/angular2-innerhtml-binding-remove-style-attribute
    constructor(private sanitized: DomSanitizer) {}
    transform(value: string) : SafeHtml {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
