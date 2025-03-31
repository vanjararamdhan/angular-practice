import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  handleClickEvent() {
    console.log("Function Called");
    this.otherFunction
  }

  otherFunction() {
    console.log("Other Function Called");
  }

  count: number = 0

  handleCount(val: string) {
    if (val == 'mins' && this.count!=0) {
      this.count = this.count - 1
    }
    else if (val == 'plus') {
      this.count = this.count + 1
    }
    else {
      this.count = 0
    }
  }

  display=true
  x=3

  hide(){
    this.display = false
  }

  show(){
    this.display = true
  }

  toggele(){
    this.display = !this.display
  }
// ------------------------------------------------------------------------------------------------------------

users = ['Ram', 'Syam', 'Ghansyam']

students = [
  {
    id: 1,
    name: 'Ram',
    age: 20,
    grade: 'A',
    email: 'ram@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Surat'
  },
  {
    id: 2,
    name: 'Syam',
    age: 21,
    grade: 'B',
    email: 'syam@example.com',
    phone: '987-654-3210',
    address: '456 Park Ave, Ahmedabad'
  },
  {
    id: 3,
    name: 'Ghansyam',
    age: 22,
    grade: 'A+',
    email: 'ghansyam@example.com',
    phone: '555-123-4567',
    address: '789 Elm St, Vadodara'
  }
];


// --------------------------------------------------Effect with signal----------------------------------------------------------
// userName = signal('Ram') 


// ------------------------------------------------------------------------------------------------------------

}
