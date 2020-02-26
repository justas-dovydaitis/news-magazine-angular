import { Component, OnInit, forwardRef, ViewChild, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TextareaComponent } from '../textarea/textarea.component';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileComponent),
            multi: true
        }
    ]
})
export class FileComponent implements OnInit, ControlValueAccessor {
    @ViewChild('preview', { static: true }) preview: ElementRef;
    @ViewChild('figure', { static: true }) figure: ElementRef;
    @ViewChild('input', { static: true }) input: ElementRef;
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
    constructor() { }

    ngOnInit(): void {
    }
    onInput(event) {
        const preview = this.preview.nativeElement;
        const figure = this.figure.nativeElement;
        const input = this.input.nativeElement;

        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                figure.children[0] ?
                    figure.replaceChild(preview, figure.children[0]) :
                    figure.appendChild(preview);
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            figure.removeChild(preview);
        }
    }
}
