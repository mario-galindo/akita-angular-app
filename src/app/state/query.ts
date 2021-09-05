import { Query } from '@datorama/akita';
import { TodoState, TodoStore } from './store';
import { Todo } from '../todo.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoQuery extends Query<TodoState> {
  constructor(private todoStore: TodoStore) {
    super(todoStore);
  }

  getTodos(): Observable<Todo[]> {
    return this.select((state) => state.todos);
  }

  getLoaded(): Observable<boolean> {
    return this.select((state) => state.isLoaded);
  }

  getLoading(): Observable<boolean> {
    return this.selectLoading();
  }
}
