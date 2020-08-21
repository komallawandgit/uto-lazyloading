import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  name = 'Angular 5';
  posts = ' '.repeat(100).split('').map((s, i) => i + 1)
  constructor() { }

  ngOnInit() {
  }
  onScroll() {
    debugger
    const length = this.posts.length
    setTimeout(() => {
      const p = ' '.repeat(100).split('').map((s, i) => i + 1 + length)

      // This approach should be used to avoid creating another memory address to the array
      while(p.length) this.posts.push(p.shift())
    }, 1000)
  }
}
