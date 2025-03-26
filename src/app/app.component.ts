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
}
