/*

RxJS provides creation functions for the process of creating observables from things such as promises, events, timers and Ajax requests. Let us explain each of them with an example,

- Create an observable from a promise
    const data = from(fetch('/api/endpoint')); //Created from Promise
    data.subscribe({
        next(response) { console.log(response); },
        error(err) { console.error('Error: ' + err); },
        complete() { console.log('Completed'); }
    });

- Create an observable that creates an AJAX request
    import { ajax } from 'rxjs/ajax'; // ajax function

    const apiData = ajax('/api/data'); // Created from AJAX request
    // Subscribe to create the request
    apiData.subscribe(res => console.log(res.status, res.response));

- Create an observable from a counter
    import { interval } from 'rxjs'; // interval function
    const secondsCounter = interval(1000); // Created from Counter value
    secondsCounter.subscribe(n =>
        console.log(`Counter value: ${n}`)
    );

- Create an observable from an event
    import { fromEvent } from 'rxjs';
    const el = document.getElementById('custom-element');
    const mouseMoves = fromEvent(el, 'mousemove');
    const subscription = mouseMoves.subscribe((e: MouseEvent) => {
        console.log(`Coordnitaes of mouse pointer: ${e.clientX} * ${e.clientY}`);
    });



































*/
