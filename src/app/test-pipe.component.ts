import {Component, Input} from '@angular/core'
import {HrAtrribute} from './HrAtrribute';
import {UnlessDirective, HighlightDirective} from './unless.directive';

@Component({
    selector: 'test-pipe',
    templateUrl: './test-pipe.component.html'

})

export class TestPipeComponent {
    constructor(){
        this.exponentialStrengthSum = 0;

    }
    birthday = new Date(1988, 3, 15); // April 15, 1988
    toggle = true; // start with true == shortDate
    format2 : string = 'dd/MM/yy';

    @Input() exponentialStrengthSum : number;
    
    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() { this.toggle = !this.toggle; 
        this.format2 = this.toggle ? 'dd/MM/yy' : 'MMM d yyyy';
    }

    hrAttr = HrAtrribute.Intelligent;

    condition = true;
  }

