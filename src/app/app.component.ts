import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1 class="text-center">{{pageTitle}}</h1>
      <div>
        <h3 class="text-center">George Vigelette</h3>
      </div>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
}
