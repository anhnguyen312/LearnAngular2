import { Directive, Input, TemplateRef, ViewContainerRef ,ElementRef, HostListener} from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[myUnless]'})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set myUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}


@Directive({
    selector: '[myHighlight]'
  })
  export class HighlightDirective {
  
    constructor(private el: ElementRef) { }
  
    private _color : string;
    //@Input('myHighlight') highlightColor: string;
    @Input('myHighlight') set highlightColor(color : string){
        this._color = color;
        this.highlight(this.highlightColor || 'blue');
    }

    get highlightColor(): string{
        return this._color;
    }
  
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || 'blue');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}