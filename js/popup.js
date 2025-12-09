
const popup = document.getElementById("popup")
const modal = document.querySelector(".modal")
const modalContent = document.getElementById("popupContent")


function pop(id){
    fetch('./badges.json').then(rep=>rep.json()).then(data=>{
        const badge = data.find(b=>b.id == id)
        console.log("bdge trouvé", badge)
        // je rempli le popup
        modalContent.innerHTML=`
        <h3>Nouveau badge trouvé !</h3>
        <h2>${badge.titre}</h2>
        <img src="${badge.image}" alt=""/>
        
        `
        // je l'affiche
            popup.style.display = "flex"
            setTimeout(()=>{
                 // puis transition sur l'apparition de la modale
            modal.style.transform = 'translateY(0)'
            },300)
           

    })
}

function popVictoire(exo){

    const coupes = buildNiveauPictos(parseInt(exo.niveau))

    modalContent.innerHTML =`<h3>Nouveau défi réalisé !</h3>
    <h2 class="mt32">${exo.titre}</h2>
    <p>Bravo ! ce défi vient de te remporter ${exo.niveau} coupe(s)</p>
    <h2 class="modal-coupes">${coupes}</h2>
    <h3>Belle victoire continue comme ca 💪🚀</h3>
    `
    popup.style.display = "flex"
    setTimeout(()=>{
    // puis transition sur l'apparition de la modale
        modal.style.transform = 'translateY(0)'
    },300)
}

let closeBtn = document.getElementById("closeModal")
closeBtn.addEventListener("click",()=>{
    modal.style.transform = 'translateY(-100vh)'
    setTimeout(()=>{         
           popup.style.display = "none";
            },600)
    
})

