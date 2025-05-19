
let slider = document.querySelector(".slides")
const masquerbutton = document.getElementById("masquer")
masquerbutton.addEventListener("click",()=>{
    
    let doneID = getDone()
    if(masquerbutton.getAttribute("data-status") === "masquer"){
        document.querySelectorAll(".slide").forEach(slide=>{
        const id = slide.id.split("-")[1]
        if(doneID.includes(id)){
            slide.classList.add("slideDNone")
            console.log("fdkdskfkm")
        }
        })
        // on repasse le bouton a status : afficher
        masquerbutton.setAttribute("data-status",'afficher')
        masquerbutton.innerHTML ="afficher les défis réalisés"
    }else{
         document.querySelectorAll(".slide").forEach(slide=>{
            slide.classList.remove("slideDNone")
         })
         // on repasse le bouton a status : masquer
          masquerbutton.setAttribute("data-status",'masquer')
          masquerbutton.innerHTML ="masquer les défis réalisés"
    }
    
})


fetch("./exos.json")
.then(rep=>rep.json())
.then(exos =>{
    exos.forEach(exo=>{
        let niveau = buildNiveauPictos(exo.niveau)
        slider.innerHTML+=`<a id="defi-${exo.id}" class="slide border" href="exo.html?id=${exo.id}">
                <img src="${exo.illustration}" alt="">
                <h3>${exo.titre}</h3>
                <p class="niveau">Niveau : <span>${niveau}</span></p>
                <p class="resume">${exo.resume}</p>
            </a>`
    })

    updateDones()
    
    updatePoints()
   
    
})

const points = document.querySelector("#points>span")
async function updatePoints(){
points.innerHTML = await comptePoints()
}

 function updateDones(){
    let doneID = getDone()
    const divDone = document.getElementById("done")
    divDone.innerHTML = ""
    if(doneID.length>0){
        doneID.forEach(async (id)=>{
            // On affiche les exos faits a gauche
            const exo = await filterdata(id)
            
            divDone.innerHTML += `
                <div>
                   ✅ ${exo.titre} ${buildNiveauPictos(exo.niveau)}
                </div>
            `

            // on passe en grisé dans la liste ceux qui sont faits
            const fait = document.querySelector("#defi-"+id)
          
            fait.classList.add("disabled")
            
            
        })
    }else{
        divDone.innerHTML = `<p>Aucun défi n'a été validé ! Relève des defis pour gagner des points 🏆!</p>`
    }
}

function buildNiveauPictos(n){
    let niv =""
        for(let i=0;i<n;i++){
            niv+='🏆'
        }
    return niv
}

console.log("%cTu as bien fait d' ouvrir la console !", "font-size: 32px; color: orangered")
console.log("%c Va voir ici : https://nico-on-web.github.io/challengesv2/eggs.html?token=123456","font-size: 18px")


const divBadges = document.querySelector("#badges")

function updateBadges(){
fetch("./badges.json").then(rep=>rep.json()).then(data=>{
    const mybages=getBadges()
    divBadges.innerHTML = ""
    data.forEach(b=>{
        if(mybages.includes(b.id.toString())){
            divBadges.innerHTML += `<div class="badge-item">
                <img src="${b.image}" title="${b.titre}" alt='${b.titre}'/>
                
            </div>`
        }
    })
})
}

updateBadges()


