function getData(){
    console.log("button clicked")
    var xhttp= new XMLHttpRequest();
   

   
    xhttp.open("GET",'https://jsonplaceholder.typicode.com/todos',true);
    console.log("open",xhttp.readyState)

xhttp.onreadystatechange =function()
    {
        console.log("done",xhttp.readyState)
        if(xhttp.readyState==4 && xhttp.status==200){
          var jFile=this.responseText;
          test(jFile)
            
        }
           
     }
 
    xhttp.send();
}
function test(data){
    console.log(data);
    var list=JSON.parse(data);
    let output =`<thread>
    <tr>
    <th>Task</th>
    <th>Status</th>
    </tr>
    </thread>`
    for(let i=0;i<list.length;i++){
   if (list[i].completed == true) {
    output+=`<tr>
    <td>${list[i].title}</td>
    <td><input class="form-check-input" type="checkbox" checked="true"disable="true"></input></td>
    </tr>`
   }
   else{
    output+=`<tr>
    <td>${list[i].tile}</td>
    <td><input class="form-check-input" type="checkbox" onclick="val(this)" id="box"></input></td>
    </tr>`
   }
}
document.getElementById("th").innerHTML=output;
}
count =0;
function val(c){
    if (c.checked) {
        count++;
        displaymsg();
    }
    else{
        count--;
    }
}
function displaymsg()
{
    let promiseFn= new Promise(function(resolve,reject){
        if(count==5){
            resolve("congrats!!You have completed 5 tasks")
         } })
         promiseFn.then(function(i){
            alert(i)
         })
}