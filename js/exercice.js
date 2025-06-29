let container = document.getElementById("container")
let description = document.getElementById("description")

const exoId = location.href.split("?id=")[1]
const faits = getDone()

let globalExo=null ;

fetch("./exos.json")
.then(rep=>rep.json())
.then(exos =>{
    exos.forEach(exo=>{
        if(exo.id == exoId){
          globalExo= exo
            // si l'exo a deja eté fait
            let callback;
            if(faits != null && faits.includes(exo.id.toString())){
                callback = "retirer"
            }else{
                callback = "valider"
            }

            description.innerHTML+=`
                <img class="vignette" src="${exo.illustration}" alt=''/>
                <h1>${exo.titre}</h1>
                <h3>Niveau : ${buildNiveauPictos(exo.niveau)}</h3>
                <p>${exo.resume}</p>
               
                <button id='validation' class="btn" data-id=${exo.id} data-status='${callback}' onClick="handleClick(event)">${callback}</button>
            `
            container.innerHTML =  `<img class="border" src="${exo.sujet}" alt="todo"/>`
           
        }
    })
})



function handleClick(e){
    const status = e.target.getAttribute("data-status")
    console.log("status: ", status)
    const id = e.target.getAttribute("data-id")
    console.log("id: ", id)
    if(status == "valider"){
        console.log("valider")
        saveExo(id)
        popVictoire(globalExo)
        e.target.setAttribute("data-status","retirer")
        e.target.innerHTML = "Retirer"
        makeConfetis()
    }else{
        deleteExo(id)
        e.target.setAttribute("data-status","valider")
        e.target.innerHTML = "Valider"
      
    }
    updatePoints()
}

function buildNiveauPictos(n){
    let niv =""
        for(let i=0;i<n;i++){
            niv+='🏆'
        }
    return niv
}




const points = document.querySelector("#points>span")

async function updatePoints(){
points.innerHTML = await comptePoints()
}
updatePoints()


function makeConfetis(){
 const count = 200,
  defaults = {
    origin: { y: 0.8 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}
