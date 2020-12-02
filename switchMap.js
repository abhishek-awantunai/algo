/**

We switch to values or to Observables and we cancel any old ones.

let button = document.getElementById('button');

let obs1 = Rx.Observable.fromEvent(button, 'click');
let obs2 = Rx.Observable.interval(1000);

obs1.switchMap(
  event => {
    return obs2
  }
).subscribe(value=> {
  console.log(value);
})

*/