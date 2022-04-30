import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
}

export function getUser(): Observable<User> {
  return timer(2000).pipe(map(() => {
    return {
      id: 1,
      firstName: "Joao Pedro",
      lastName: "Henrique"
    }
  }), shareReplay(1))
}
