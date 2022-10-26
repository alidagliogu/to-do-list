let ulDOM = document.querySelector('#list')
function newElement(){
    let liDOM = document.createElement("li")
    let inputValue = document.querySelector("#task").value
    liDOM.innerHTML = `${inputValue}`
    if(inputValue ==""){
        alert("lütfen metin giriniz!!!")
    }
    else{
        ulDOM.append(liDOM)
    }
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className= "close";
    span.appendChild(txt);
    liDOM.appendChild(span)
    let i =0;
    liDOM.onclick = function () {
        i = i+1
        if(i%2 ==1){
            liDOM.classList.add('checked');
        }
        else{
            
        liDOM.classList.remove('checked');
        }
    }
    span.onclick =function(){
        liDOM.remove()
    }
}