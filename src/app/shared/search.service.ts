import { Injectable } from '@angular/core';
import { SearchResult } from "../classes/SearchResult";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl = 'api/search';  // URL to web api
  constructor(private http: HttpClient) { }

  getSearch(creteria: string): Observable<SearchResult[]> {
    const url = `${this.searchUrl}/?title=${creteria}`;
    return this.http.get<SearchResult[]>(url).pipe(
      tap(_ => console.log(`fetched creteria is ${creteria}`)),
      catchError(this.handleError<SearchResult[]>('getSearch', [])),
    );
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log('${operation} failed: ${error.message}');

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
