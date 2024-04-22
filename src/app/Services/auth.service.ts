import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


//====================> Current User Details storing  starts here<=====================
currentUser={
  fullname:'',
  IsLogin:false,
  email:''
}


//==================> current user details ends here <======================


//=================> Token function starts here  <======================

tokenMethod(token:string,isLogin:boolean,isRole:boolean){

  let Token=JSON.parse(localStorage.getItem('Token')||'[]')
  Token.push({token:token,isLogin:isLogin,isRole:isRole})

  localStorage.setItem('Token',JSON.stringify(Token))
  console.log("details from token method",token,isLogin,isRole)


}








//========================> Registration method starts here  <===================
  //creating a function that stores the reg details in local storage

  registerMethod(fullname:string,email:string,password:string,role:string):boolean{
let Users=JSON.parse(localStorage.getItem('Users')||'[]')

//checking the email is already exist or not
let isExist=Users.some((user:any)=>user.email===email)

// console.log("registartion method called in auth service")

if(isExist){
  
  // console.log("registartion failed in if cond")
  return false
}
else{
  Users.push({fullname,email,password,role})
  localStorage.setItem('Users',JSON.stringify(Users))
  // console.log("registartion done in else")
  return true
}}
//===================> Registration method ends here <==========================


//================> Login validation method start here <=========================

LoginValidation(email:string,password:string):boolean{


let users=JSON.parse(localStorage.getItem('Users')||'[]')  

let isExist=users.some((user:any)=>user.email===email && user.password===password)

let isRole:boolean=users.some((user:any)=>user.role==="admin" && user.email===email)

if(isExist){
  this.currentUser.IsLogin=true
  this.currentUser.email=email
  console.log("from current user details",this.currentUser)


  this.tokenMethod(email,this.currentUser.IsLogin,isRole)
  this.getAllTodos()
  


    this.getAdminTodos()

  




  return true

  

}
else{
  this.currentUser.IsLogin=false
  return false
}
}
//==============> Login validation method Ends here <============================



//=================> Todo Method starts here <======================
TodoStore(title:string,startdate:Date,enddate:Date,desc:string){
console.log("method todo called")

  let todos=JSON.parse(localStorage.getItem('todos')||'[]')

  let Token=JSON.parse(localStorage.getItem('Token')||'[]')
 
  console.log(Token)
  let NewTodo={
    id:todos.length+1,
    title:title,
    startdate:startdate,
    enddate:enddate,
    desc:desc,
    email:Token[Token.length-1].token,
    islogin:Token[Token.length-1].isLogin
  }

  todos.push(NewTodo)
  
  try{
    localStorage.setItem('todos',JSON.stringify(todos))
  console.log("task add in auth")
  return true
  }
  catch(error){
console.log("error occured while add todo",error)
    return false

  }

}

//======================> TOdo method ends here <=========================


//===================>   logout method starts here <========================

isLogout(){
  let Token=JSON.parse(localStorage.getItem('Token')||'[]')
  Token.push({token:"",isLogin:false})

  localStorage.setItem('Token',JSON.stringify(Token))

}

//===================>   logout method ends here <========================

//====================>    get all todos method starts here   <================
getAllTodos(){

  let allTodos=JSON.parse(localStorage.getItem('todos')||'[]')
  let Tokendet=JSON.parse(localStorage.getItem('Token')||'[]')
   console.log("all todo from get all todos",Tokendet[Tokendet.length-1].isRole)
// console.log("==========>",Tokendet.isLogin)

if(Tokendet[Tokendet.length-1].isLogin ){

 //&& !Tokendet[Tokendet.length-1].isRole

let resultTodo=allTodos.filter((todo:any)=>{
  return todo.email==Tokendet[Tokendet.length-1].token
  
})
// console.log("from get all todo methods",resultTodo)
// console.log("final ok")
return resultTodo

}
else{
  //console.log("from get all todo methods",resultTodo)
  console.log("final failed")
  return '[]'
  
}

}
//=================> get all todo Ends here <===================

//=================> Completed tasks method starts here <===========

completedTasksFun(todo:any){
let completedTasks=JSON.parse(localStorage.getItem('completedTasks')||'[]')
//completedTasks.push([{...todo,completedDate:new Date()}])
completedTasks.push(todo)
localStorage.setItem('completedTasks',JSON.stringify(completedTasks))

let todos=JSON.parse(localStorage.getItem('todos')||'[]')
let resultTodo=todos.filter((lstodo:any)=>{
  return lstodo.id!==todo.id
})
localStorage.setItem('todos',JSON.stringify(resultTodo))

}
//=====================> completed tasks method ends here <==============



//=======================> completed tasks Retrieve method starts here <===============
getCompletedTasks(){

  let Tokendet=JSON.parse(localStorage.getItem('Token')||'[]')
  let allCompletedTodos=JSON.parse(localStorage.getItem('completedTasks')||'[]')

  if(Tokendet[Tokendet.length-1].isLogin){
  
   //&& !Tokendet[Tokendet.length-1].isRole
  
  let resultCompletedTodo=allCompletedTodos.filter((todo:any)=>{
    return todo.email==Tokendet[Tokendet.length-1].token
    
  })
  return resultCompletedTodo

}else{
  return '[]'
}

}
//===========================>  Completed tasks retrieve method ends here <================


//=========================> admin get all todo starts here <=================================

getAdminTodos(){

  let allTodoData=JSON.parse(localStorage.getItem('todos')||'[]')

  return allTodoData

}

//======================> admin get all todo ends here <=================================

//=========================> all admin completed todos starts here <================================
allAdminCompletedTodoFun(){
  let allTodoData=JSON.parse(localStorage.getItem('completedTasks')||'[]')

  

  return allTodoData
}


//===========================> all admin completed todo ends here <===================



//======================> get token details starts here <====================

getTokenDetails(): Observable<any> {
  let tokenData = JSON.parse(localStorage.getItem('Token') || '[]');
  console.log("from gettoken details", tokenData[tokenData.length - 1]);
  return of(tokenData[tokenData.length - 1]);  // Wrap in an Observable
}

//========================> get token details ends here <========================



//=========================>  checking is admin or not method starts from here  <===========

isAdminFun(){
  let tokenData=JSON.parse(localStorage.getItem('Token')||'[]')

  if(tokenData[tokenData.length-1].role=='admin'){
    return true
  }else{
    return false
  }
}



}
