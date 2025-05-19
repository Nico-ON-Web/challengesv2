const token= location.href.split("?token=")[1]

if(token == "123456"){
    // Ajoute un badge
    console.log("token 123456")
    pop(1)
    saveBadge(1)
}else if(token=="maisquesquecestquecetruc"){
    pop(2)
    saveBadge(2)
}



