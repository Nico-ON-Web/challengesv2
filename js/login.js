const iderror = document.getElementById("identifiant-error")
const mdperror = document.getElementById("mdp-error")

const identifiant = document.getElementById("identifiant")
const mdp = document.getElementById("mdp")

const but = document.querySelector("#valider")
but.addEventListener("click",()=>{
    validForm()
})

identifiant.addEventListener("change",testid)
mdp.addEventListener("change",testmdp)

function enleveMesssage(elt,p){
    elt.classList.remove("input-error")
    p.innerHTML = ""
}

function ajouteMessage(elt,p,message){
    elt.classList.add("input-error")
    p.innerHTML = message
}

function testid(e){
    if(identifiant.value ==="admin"){
        enleveMesssage(identifiant,iderror)
        return true
    }else{
        ajouteMessage(identifiant,iderror,"L'identifiant n'est pas valide")
        return false
    }
}

function testMdp(){
    if(mdp.value === "incorrect"){
        enleveMesssage(mdp,mdperror)
        return true
    }else{
        ajouteMessage(mdp, mdperror, "le mot de passe est incorrect")
        return false
    }
}

function validForm(){
    const m = testMdp()
    const i = testid()
    if(m === true && i === true){
        pop(4)
        saveBadge(4)
    }
}