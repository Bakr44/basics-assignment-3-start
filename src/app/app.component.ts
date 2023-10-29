import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-3-start';
  showParagraph = false;
  log: string[] = [];
  // log: number[] = [];
  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    // this.log.push(this.log.length + 1);
    const timestamp = new Date().toLocaleTimeString();
    this.log.push(this.log.length + 1 + ` Button clicked at ${timestamp}`);
  }

}
