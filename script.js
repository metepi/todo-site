
const cont = document.getElementById("container")

let sorszam = []

let db = 0

function display() {
    db = sorszam.length
    sorszam.push(db)
    const inp = document.getElementById("todo")
    cont.innerHTML += `<div id="todo${db+1}"><p>
                    ${sorszam[db] + ". " +inp.value}
                    <select id="select${db+1}" onchange = color() onclick = getid(this.id)>
                        <option value="stopped">Nincs elkezdve</option>
                        <option value="started">Folyamatban</option>
                        <option value="finished">Kész</option>
                        <option value="delete">Törlés</option>
                    </select>
                </p>
            </div>`

    if(db>9){
        idszam = select.slice(-2)
    }
    else{
        idszam = select.slice(-1)
    }    
    console.log("darab:" + db)
    console.log("sorszam:" + sorszam)
    console.log("idszam: " + idszam)
}

let select = ""
let todo = ""

function getid(id){
    select = id
    todo = document.getElementById(select).parentElement.parentElement.id
}

let gomb = ""

function color(){
    const valaszto = document.getElementById(select)
    if(valaszto.value == "stopped"){
        document.getElementById(todo).style.borderColor = "red"
        
    }
    else if(valaszto.value == "started"){
        document.getElementById(todo).style.borderColor = "yellow"
    }

    else if(valaszto.value == "finished"){
        document.getElementById(todo).style.borderColor = "green"
    }
    else if(valaszto.value == "delete"){
        torlogomb()
        
    }
    else{
        document.getElementById(todo).removeChild(gomb)
        
    }
}

let idszam = "asd"

function torlogomb(){
    const gomb = document.createElement("button")

    gomb.innerHTML = "Biztos törlöd?"
    document.getElementById(todo).appendChild(gomb)
    gomb.onclick = function()    
    {document.getElementById(todo).remove()
                
        for (let i = 0; i < sorszam.length; i++) {
            if(sorszam[i] > idszam){
                sorszam[i] = sorszam[i]-1
                db--
                console.log("új: " + sorszam[i])
            }            
        }
    }
}

