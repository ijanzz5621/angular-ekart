import { FormsModule } from '@angular/forms';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput', {static: true}) searchInputElement: ElementRef | undefined;

  searchText: string = "";

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }

  // setSearchTextChanged(element: HTMLInputElement) {
  //   console.log(element.value);
  //   this.searchText = element.value;
  //   this.searchTextChanged.emit(this.searchText);
  // }

  setSearchTextChanged() {
    this.searchText = this.searchInputElement!.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

}
