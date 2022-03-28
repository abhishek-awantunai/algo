/*

ExpressionChangedAfterItHasBeenCheckedError :-


( Core of React and Angular )
Change Detection :-
  - It is a mechanism designed to track changes in the application state and render the updated state on the screen.

  - It runs over the entire tree of components which takes some time.
  and if it runs more often then it may cause delay and unresponsive applications.

  ChangeDetectionStrategy -
  onPush :-
  It will check change detectors once

  Default:-
  As we know changes are triggered by events and the propagation of changes is done in two phases.
  i) Application Phase ii) Change Detection Phase

  - ngZone is just a wrapper around zone-js API

  Zone-js API tracks and intercepts async operations like setTimeout setInterval click addEventListener

  When a async operation occurs change detection occurs and whenever change detection occurs then ngDoCheck will kick in.

*/