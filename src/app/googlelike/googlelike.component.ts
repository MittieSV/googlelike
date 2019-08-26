import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../classes/SearchResult';
import {MDCTextField} from '@material/textfield';
import { SearchService } from '../shared/search.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';


import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-googlelike',
  templateUrl: './googlelike.component.html',
  styleUrls: ['./googlelike.component.scss']
})
export class GooglelikeComponent implements OnInit {
  searchResults$: Observable<SearchResult[]>;
  private searchTerms = new BehaviorSubject<string>(this.route.snapshot.paramMap.get('title'));
  constructor(private searchService: SearchService, private location: Location,
              private route: ActivatedRoute) { }
  ngOnInit() {
    let textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    console.log(this.route.snapshot.paramMap.get('title'));
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
