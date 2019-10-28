import { Directive, OnInit, Inject, ElementRef, Injectable, Input } from "@angular/core";
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(@Inject(ElementRef) ref: ElementRef,
                @Inject(JQ_TOKEN) private $: any) {
                    
        this.el = ref.nativeElement;
    }

    ngOnInit(): void {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
            console.log(this.modalId);
        })
    }
}