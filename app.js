var list = document.getElementById("list")

function add(){
    var x= document.getElementById("input")
    //console.log(x.value)
    var li= document.createElement('li')
    var litext=document.createTextNode(x.value)
    li.appendChild( litext) //insert litext in li
    list.appendChild(li)
    input.value=" "

    var delbtn= document.createElement('button')
    var deltext=document.createTextNode("Delete")
    delbtn.setAttribute("class","delbtn")
    delbtn.setAttribute("onclick","deletei(this)")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)

    var editbtn=document.createElement('button')
    var edittext= document.createTextNode("Edit task")
    editbtn.appendChild(edittext)
   editbtn.setAttribute("class", "ebtn")
    editbtn.setAttribute("onclick","editi(this)")
  
    li.appendChild(editbtn)
    console.log(li)
}

function deletei(e){
e.parentNode.remove()
}

function delall(){
    list.innerHTML= " "
}

function editi(e){
    var value = prompt("enter edit value",e.parentNode.firstChild)

e.parentNode.firstChild.nodeValue = value

}