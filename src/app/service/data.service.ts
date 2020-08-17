import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TodoData } from '../models/todo.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers = new HttpHeaders();
  private uri: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(
    private http: HttpClient
  ) {
    this.headers = this.headers.set("Content-Type", "application/json");
    this.headers = this.headers.set("Accept","application/json, application/hal+json;charset=UTF8");
  }
  getData (): Observable<TodoData[]> {
    let httpHeaders = this.headers;
    let options: {} = {
      headers: httpHeaders,
      observe: 'response'
    };
    return this.http.get(this.uri,options)
      .pipe(
        map((data: TodoData[]) => {
          return data;
        }),
        catchError((error: any) => {
          return throwError(`Error retrieved data: ${error}`);
        })
      );
  }
}
