let classement = document.querySelector(".classement")
fetch("./teams.json").then(rep=>rep.json()).then(data=>{
    data.forEach(element => {
        const participants = element.membres.join(", ")
        classement.innerHTML += ` 
        <div class="timeline">  
                <div class="time">
                    <div class="classement-avatar border">
                        <p>${participants}</p>
                        <h4><span>${element.score}</span>🏆</h4>
                    </div>
                    <div style="height: ${(element.score/15) * 500}px;" class="time-score"></div>       
                </div>
            </div>`
    });
})
