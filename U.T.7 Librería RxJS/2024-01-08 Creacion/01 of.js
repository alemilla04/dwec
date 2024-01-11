import { of } from 'rxjs';

const uno$ = of(1);

uno$.subscribe(item => {
    const result = item * 2;
    console.log(result);
});