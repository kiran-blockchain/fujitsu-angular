//external dependencies
import { Component } from '@angular/core';

//metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
   constructor(){
    
   }
   //Class Property
  title = 'Welcome to Fujitsu Angular learning';

  //Method
  getTitle(){
    return this.title;
  }
}
