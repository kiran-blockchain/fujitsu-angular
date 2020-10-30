import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class HubService {
    constructor() {

    }

    addToCart(item) {
        //send the data to the subscribers as next step;
        this.cart.next(item);
    }

    // will act as a hub;
    cart = new Subject<any>();
  
    fetchCartInfo(): Observable<any> {
        return this.cart.asObservable();
    }
}