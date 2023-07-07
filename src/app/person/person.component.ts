import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent implements OnInit, OnChanges {

  @Input()
  person!: { firstName: string; lastName: string; };

  public fullName = '';
  public fullNameViaGetterCounter = 0;
  public calculateFullNameCounter = 0;

  constructor() { }

  ngOnInit() {
    // setInterval(() => {}, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['person']) {
      this.fullName = this.calculateFullName();
    }
  }

  get fullNameViaGetter() {
    this.fullNameViaGetterCounter++;
    return this.person.firstName + ' ' + this.person.lastName;
  }

  calculateFullName() {
    this.calculateFullNameCounter++;
    return this.person.firstName + ' ' + this.person.lastName;
  }

  onUnrelatedClick() {

  }

  onMouseOver() {

  }

  onMouseOut() {

  }

  onMouseMove() {

  }


}
