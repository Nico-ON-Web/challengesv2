
function saveExo(id){
    const st = localStorage.getItem('exos')
    if(st){
        const temp = st.split(",")
        temp.push(parseInt(id))
        localStorage.setItem("exos",temp.join(","))

    }else{
        localStorage.setItem("exos",[id])
    }
}

function getDone(){
    const store =localStorage.getItem('exos')?.split(",")
    if(store){
        if(store[0] != ""){
            return store
        }else{
            return null
        }
    }
    
    return null

}

async function filterdata(id){
    const rep = await fetch("./exos.json")
    const data = await rep.json()
    return data.find((elt) => elt.id == id) 
}

function deleteExo(id){
    const dones = getDone()
    const ne = []
    dones.forEach(elt=>{
        if(parseInt(elt) != id){
            ne.push(elt)
        }
    })
    console.log(ne)
    localStorage.setItem("exos",ne.join(","))
}

 async function comptePoints(){
    const dones = getDone()
    let counter = 0
    if(dones){
       for (const elt of dones) {
        const element = await filterdata(parseInt(elt))
        counter = counter + element.niveau
        }
    }
    

    
    return  counter
}