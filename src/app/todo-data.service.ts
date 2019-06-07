import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DefaultDataService } from 'dynamic-ngrx';
import { Injectable } from '@angular/core';
import { Todo } from './app.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService extends DefaultDataService<Todo> {
  entity = 'Todo';

  private url = `http://localhost:3000/todo`;
  constructor(private http: HttpClient) {
    super();
  }

  load(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  addOneEntity(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  removeOneEntity(key: string): Observable<string> {
    return this.http.delete<Todo>(`${this.url}/${key}`).pipe(map(() => key));
  }
}
