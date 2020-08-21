import { Component, OnInit,ViewChild} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DataScrollerModule} from 'primeng/datascroller';


@Component({
  selector: 'app-moovie-card',
  templateUrl: './moovie-card.component.html',
  styleUrls: ['./moovie-card.component.css']
})
export class MoovieCardComponent implements OnInit {
  Jsonurl="assets/data.json";
  data=[];
  dataSource=[];
  @ViewChild('dt') dt: any;
  totaldata:number=0;;
  cnt: number = 0;
  row:number;
 
  constructor(private http:HttpClient) {

  }
  getJSON():Observable<any>{
     return this.http.get(this.Jsonurl);
  }

    ngOnInit() {
      this.getJSON().subscribe(data=>{
        this.data =data.moovieData;
        console.log("json:","data:",this.data)
        this.totaldata=this.data.length;
      });
      this.row=5;
    }
   
 loadData(event) {
  debugger
        let first = Number(event.rows) * (this.cnt);
        let found = this.data.slice(first ,first+ event.rows )  ;
        if (found) {
          setTimeout(() => {
            for(let i=0; i< found.length; i++){
              this.dataSource.push(found[i]); 
            }
          }, 1000)
        }
       console.log("loadData: first ", first,"rows:",event.rows);
       this.cnt = this.cnt+1;
  }  
}
 


