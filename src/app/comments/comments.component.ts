import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';
import { MatPaginator,PageEvent,MatPaginatorModule } from '@angular/material/paginator';

import { map } from 'rxjs';
import { endianness } from 'os';
//import {comment} from '../../app/model/comments';

@Component({

  selector: 'app-comments',
  templateUrl: './comments.component.html',
 // imports:[MatPaginatorModule]
})
export class CommentsComponent implements OnInit {
  commentsData:any[] =[]
length=this.commentsData.length;
pageSize=5;
pageSizeOptions=[5,10,25];
pageEvent:PageEvent={} as PageEvent

setPageSizeOptions(setPageSizeOptionsInput:string){
  this.pageSizeOptions=setPageSizeOptionsInput.split(',').map(str=>+str);

}

  constructor(private http:HttpClient) { }




dataSource=new MatTableDataSource<any>(this.commentsData)
@ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator

  ngOnInit(): void {

    this.dataSource.paginator=this.paginator
    
    this.fetchComments()
    
    setTimeout(() => {
      this.alldata()
      
    }, 2000);
  }
  displayedColumns:any[]=['id','name','email','body']

fetchComments(){

this.http.get<any>('https://jsonplaceholder.typicode.com/comments')

//   .pipe(map((res)=>{
//   const comments=[]

//   for(const key in res){
//     if(res.hasOwnProperty(key)){
//       comments.push({...res[key],id:key})
//     }
//   }
//   return comments;

// }))
.subscribe((res)=>{
  console.log(res,"comments")
  this.commentsData=res
  this.pageslice=this.commentsData.slice(0,5)
})
//console.log("fromin http",this.commentsData)




}

pageslice=this.commentsData.slice(0,5)

onPageChange(event:PageEvent){
const startIndex=event.pageIndex*event.pageSize;
let endIndex=startIndex+event.pageSize
if(endIndex>this.commentsData.length){
  endIndex=this.commentsData.length
}
this.pageslice=this.commentsData.slice(startIndex,endIndex)
}

alldata(){
  console.log(this.commentsData)
}

}
