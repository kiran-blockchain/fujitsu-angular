
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneformatter'
})

export class PhoneFormatterPipe implements PipeTransform {
    transform(incomingValue: any, country: String) {
        if (incomingValue && incomingValue.toString().length == 10) {
            switch (country) {
                case "IN": 
                    return this.formatIndianPhoneNumber(incomingValue.toString());
                case 'US':
                default:
                    return this.formatUSPhoneNumber(incomingValue.toString());
            }
        }
        return incomingValue;
    }
    formatUSPhoneNumber(data: String) {
        return `+1-${data.substring(0, 3)}-${data.substring(3, 6)}-${data.substring(6, 10)}`;
    }
    formatIndianPhoneNumber(data:String){
        return `+91-${data.substring(0,5)}-${data.substring(5,10)}`
    }
}