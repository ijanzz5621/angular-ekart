import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = "Mens wear";

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
}
