import { Directive, ElementRef, OnInit, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: true
})
export class SetBackground implements OnInit{

    //private element: ElementRef
    //private renderer: Renderer2;

    // If the input argument is the same as directive selector name, means that this is an alias
    // and the proerty can be bind directly to the directive
    // eg in host html: [setBackground] = 'Purple'
    // @Input('setBackground')
    // backColor: String = '#36454F';
    // @Input()
    // textColor: String = 'Yellow';

    @Input()
    title: String = 'DIRECTIVE TITLE!';

    @Input('setBackground')
    changeTextAndBackColor: {backColor: string, textColor: string};

    constructor(private element: ElementRef, private renderer: Renderer2) {
        //this.element = element;
        //this.renderer = renderer;
        this.changeTextAndBackColor = {
            backColor: "",
            textColor: ""
        };
    }

    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = '#000000';
        // this.element.nativeElement.style.color = 'white';

        // using Renderer2
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor);
        // add attribute using Renderer2
        // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title');
    }
}