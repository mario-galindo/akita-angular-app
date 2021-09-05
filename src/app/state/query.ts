import { Query } from '@datorama/akita';
import { TodoState, TodoStore } from './store';
import { Todo } from '../todo.model';
import { Observable } from 'rxjs';

export class TodoQuery extends Query<TodoState> {
  constructor(private todoStore: TodoStore) {
    super(todoStore);
  }

  getTodos(): Observable<Todo[]> {
    return this.select((state) => state.todos);
  }

  getLoaded(): Observable<Boolean> {
    return this.select((state) => state.isLoaded);
  }

  getLoading(): Observable<Boolean> {
    return this.selectLoading();
  }
}
