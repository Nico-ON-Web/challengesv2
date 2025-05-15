const token= location.href.split("?token=")[1]
if(token == "123456"){
    // Ajoute un badge
    saveBadge(1)
}else if(token=="maisquesquecestquecetruc"){
    saveBadge(2)
}
