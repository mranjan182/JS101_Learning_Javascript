let task=document.querySelector('#task')
let priority=document.querySelector('#priority')
let form=document.querySelector('form');
let array=[]
form.addEventListener('submit',function(e){
e.preventDefault();

let data={
    inptask:task.value,
    selectPriority:priority.value
}
array.push(data)
let tr=document.createElement('tr')
let td1=document.createElement('td')
let td2=document.createElement('td')
let tbody=document.querySelector('tbody')

console.log(array)
array.map(el=>{
    if(el.selectPriority=="High"){
        td2.style.backgroundColor="red"
        task.value=""
        priority.value=""
    }else if(el.selectPriority=="Low"){
        td2.style.backgroundColor="green"
        task.value=""
        priority.value=""
    }
    td1.innerHTML=el.inptask;
    td2.innerHTML=el.selectPriority
})
tr.append(td1,td2)
tbody.append(tr)
})
