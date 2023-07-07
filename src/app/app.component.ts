import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  people = [
    { firstName: 'Elana', lastName: 'Olsen' },
    { firstName: 'Jennifer', lastName: 'Fell' },
    { firstName: 'Judy', lastName: 'Bogart' },
    { firstName: 'Kapunahele', lastName: 'Wong' },
    { firstName: 'Kara', lastName: 'Erickson' },
    { firstName: 'Sreevani', lastName: 'Sreejith' }
  ];
  currentPerson!: { firstName: string; lastName: string; };
  currentIndex = 0;

  ngOnInit() {
    this.currentPerson = this.people[this.currentIndex];
  }

  onNextClick() {
    this.currentIndex++;
    if (this.currentIndex === this.people.length) {
      this.currentIndex = 0;
    }
    this.currentPerson = this.people[this.currentIndex];
  }

  onUnrelatedClick() {

  }
}
