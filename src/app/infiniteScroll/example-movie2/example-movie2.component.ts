import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example-movie2',
  templateUrl: './example-movie2.component.html',
  styleUrls: ['./example-movie2.component.css']
})
export class ExampleMovie2Component implements OnInit {
  Jsonurl="assets/data.json";
  name = 'Angular 5';
  // post= ' '.repeat(100).split('').map((s, i) => i + 1)
  post=' '.repeat(10).split('').map((s, i) => i + 1)
  data=' '.repeat(10).split('').map((s, i) => i + 1)
  dataSource=[];
  dataempty=[];
  loading:boolean;
  totaldata:any;

  constructor(private http:HttpClient) { }
  getJSON():Observable<any>{
    debugger
    return this.http.get(this.Jsonurl);
  }

  ngOnInit() {
    this.getJSON().subscribe(data=>{
      debugger;
      this.data =data.moovieData;
      console.log("json:","data:",this.data)
      this.totaldata=this.data.length
    });
  }

 
  onScroll() {
    debugger;
     this.dataSource=this.data;
     console.log("onscroll:",this.dataSource);
      
        // const length = this.data.length;
        // console.log("onscroll:length:",length);
        // setTimeout(() => {
        //       const d = ' '.repeat(10).split('').map((s, i) => i + 1 + length)

        //       //This approach should be used to avoid creating another memory address to the array
        //       while(d.length) this.dataSource.push(d.shift())
        //       console.log("d:",d);
        // }, 10)
  }

}
