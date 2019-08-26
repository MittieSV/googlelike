import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchResult } from '../classes/SearchResult';
import { SearchService } from '../search.service';
import { MDCTextField } from '@material/textfield';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  searchResults$: Observable<SearchResult[]>;
  private searchTerms = new Subject<string>();
  myControl = new FormControl();
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    let textField = new MDCTextField(document.querySelector('.mdc-text-field'));
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
    this.searchTerms.next(term);
  }

}
