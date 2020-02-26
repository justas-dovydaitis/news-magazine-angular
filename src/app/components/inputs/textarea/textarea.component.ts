import { Component, OnInit, ViewChild, ElementRef, Input, Output, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlName } from '@angular/forms';


@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextareaComponent),
            multi: true
        }
    ]
})
export class TextareaComponent implements OnInit, ControlValueAccessor {
    @ViewChild('txt', { static: true }) textArea: ElementRef;

    @Input() required: boolean;
    @Input() minRows = 4;
    @Input() maxRows = 12;
    @Input() lineHeight = 15;
    currentHeight: number;

    @Input('value') _value = '';
    get value() { return this._value; }
    set value(val) {
        if (val) {
            this._value = val;
            this.propagateChange(this._value);
        }
    }

    propagateChange = (_: any) => { };

    writeValue(value: string): void {
        if (value) {
            this._value = value;
            this.propagateChange(this.value);
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.propagateChange = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
    ngOnInit(): void {
        this.loadArea(this.textArea.nativeElement);
    }
    loadArea(area): void {
        area.rows = this.minRows;
        this.currentHeight = area.scrollHeight + 5;
    }
    resizeArea(event): void {
        const minRows = 4;
        const maxRows = 12;

        let obj = event.target;
        let key = event.keyCode || event.charCode;
        let currentScrollHeight = parseInt(obj.scrollHeight, 10);
        let lines = Math.floor(currentScrollHeight / this.lineHeight);

        const expandTextArea =
            lines <= maxRows && lines > minRows && (key == 8 || key == 46);
        const maxLitteralHeight = (maxRows - 1) * this.lineHeight + 'px';
        if (expandTextArea) {
            obj.style.height = (lines - 1) * this.lineHeight + 'px';
        } else if (lines < maxRows) {
            obj.style.height = 'auto';
            obj.style.height = obj.scrollHeight + 5 + 'px';
        } else if (obj.style.height !== maxLitteralHeight) {
            obj.style.height = maxLitteralHeight;
        }
    }


}
