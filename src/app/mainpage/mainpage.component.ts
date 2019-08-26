import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchResult } from '../classes/SearchResult';
import { SearchService } from '../shared/search.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  searchResults$: Observable<SearchResult[]>;
  private searchTerms = new Subject<string>();
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(private searchService: SearchService, private route: Router) { }

  ngOnInit() {
    
    this.searchResults$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchService.getSearch(term)),
    );
  }
  getSearchResult(term: string): void {
    this.searchTerms.next(term.toLowerCase());
  }
  myEvent(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value);
    let term = event.option.value ? event.option.value : null;
    this.route.navigate(['/search', { title: term}]);
  }

}
