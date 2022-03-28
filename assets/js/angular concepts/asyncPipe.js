/*

Using aync pipe we can directly use an Observable or a promise in template. 

<div class="courses">
  <course-card *ngFor="let course of (courses$ | async)">
  </course-card>
</div>



courses$ = Observable<Course[]>;

ngOnInit(){
  this.courses$ = this.http.get<Course[]>('/api/courses', {params});
}

*/
