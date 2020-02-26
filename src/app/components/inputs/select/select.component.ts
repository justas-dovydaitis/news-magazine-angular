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
    @ViewChild('#select', { static: true }) select: ElementRef;
    @Input() options: Option[] = new Array<Option>();
    @Input('selectedOptions') _selected = new Array<Option>();
    unselected = new Array<Option>();

    get selected(): Option[] { return this._selected; }
    set selected(val: Option[]) {
        if (val) {
            val.forEach(opt => {
                this._selected.push(opt);
                this.removeByValue(opt.value, this.unselected);
            })
            this.propagateChange(this._selected);
        }
    }

    propagateChange = (_: any) => { };

    writeValue(value: Option[]): void {
        if (value) {
            this.selected = value;
            this.propagateChange(this.selected);
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
    selectOption(event): void {
        let selectedOption: Option | false;
        selectedOption = this.removeByValue(event.target.value, this.unselected);
        console.group('selecting')
        console.log('SELECTED', this.selected)
        console.log('NOT SELECTED', this.unselected)
        console.log('OBJ', selectedOption)
        console.groupEnd();
        if (selectedOption) {
            selectedOption.selected = true;
            this.selected.push(selectedOption);
        }

    }
    deselectOption(value: string): void {

        let removedOption: Option | false;
        removedOption = this.removeByValue(value, this.selected);
        console.group('deselecting')
        console.log('SELECTED', this.selected)
        console.log('NOT SELECTED', this.unselected)
        console.log('OBJ', removedOption)
        console.groupEnd();
        if (removedOption) {
            removedOption.selected = false
            this.unselected.push(removedOption);
        }

    }
    removeByValue(val: string, arr: Option[]): Option | false {
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
        if (this.unselected && this.options && this._selected)
            this.unselected = [
                ...this.options.filter(opt => {
                    let contains = false;
                    this.selected.forEach(sopt => {
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
