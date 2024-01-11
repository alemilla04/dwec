import { timer } from 'rxjs';

const timer$ = timer(10, 3000);

timer$.subscribe(console.log);