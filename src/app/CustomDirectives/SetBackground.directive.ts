import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: true
})
export class SetBackground implements OnInit{

    //private element: ElementRef

    constructor(private element: ElementRef) {
        //this.element = element;
    }

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = '#000000';
        this.element.nativeElement.style.color = 'white';
    }
}