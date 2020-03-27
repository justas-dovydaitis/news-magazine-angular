import { Component, forwardRef, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Option } from 'src/app/models/Option';
/**
 * Done in pretty shitty way, but it works
 */
@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ]
})
export class SelectComponent implements OnChanges, ControlValueAccessor {
    @ViewChild('#input', { static: true }) select: ElementRef<HTMLSelectElement>;

    @Input() options: HTMLOptionElement[] = []
    @Input('value') _value: HTMLOptionElement[] = [];
    unselected: HTMLOptionElement[] = [];


    onChange: any = () => { }
    onTouch: any = () => { }

    get value(): HTMLOptionElement[] { return this._value; }
    set value(val: HTMLOptionElement[]) {
        if (val && this._value !== val) {
            console.log(val)
            val.forEach(opt => {

                this._value.push(opt);
                this.removeByValue(opt.value, this.unselected);
                for (let index = 0; index < this.select.nativeElement.options.length; index++) {
                    this.select.nativeElement.options[index].selected = opt.value === this.select.nativeElement.options[index].value ? true : false;
                }
            })
            this.onChange(val)
            this.onTouch(val)
        }
    }


    writeValue(value: HTMLOptionElement[]) { this.value = value }
    registerOnChange(fn: any) { this.onChange = fn }
    registerOnTouched(fn: any): void { this.onTouch = fn }
    setDisabledState?(isDisabled: boolean): void { throw new Error("Method not implemented."); }

    selectOption(event): void {
        console.log(event);
        let selectedOption: HTMLOptionElement | false;
        selectedOption = this.removeByValue(event.target.value, this.unselected);
        console.group('selecting')
        console.log('SELECTED', this.value)
        console.log('NOT SELECTED', this.unselected)
        console.log('OBJ', selectedOption)
        console.groupEnd();
        if (selectedOption) {
            selectedOption.selected = true;
            this.value.push(selectedOption);
        }

    }
    deselectOption(value: string): void {

        let removedOption: HTMLOptionElement | false;
        removedOption = this.removeByValue(value, this.value);
        console.group('deselecting')
        console.log('SELECTED', this.value)
        console.log('NOT SELECTED', this.unselected)
        console.log('OBJ', removedOption)
        console.groupEnd();
        if (removedOption) {
            removedOption.selected = false
            this.unselected.push(removedOption);
        }

    }
    removeByValue(val: string, arr: HTMLOptionElement[]): HTMLOptionElement | false {
        let removed: Option;
        let index = 0;
        for (let option of arr) {

            if (option.value === val) {
                return arr.splice(index, 1)[0];
                break;
            }
            index++;
        }
        return false;
    }

    ngOnChanges(): void {
        if (this.unselected && this.options && this.value)
            this.unselected = [
                ...this.options.filter(opt => {
                    let contains = false;
                    this.value.forEach(sopt => {
                        if (sopt.value === opt.value) {
                            contains = true;
                            return;
                        }
                    })
                    return !contains;
                })
            ];
    }

}
