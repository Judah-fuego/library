import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'book',
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button" (click)="changeRented()">{{rented() ? "Unrent" : "Rent"}}</button>
      </form>
    </section>
  `,
  styleUrls: ['./book.component.scss'],

})
export class BookComponent {
  rented = signal(false);
  changeRented() {
    this.rented.set(!this.rented());
  }

}
