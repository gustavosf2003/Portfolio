var our_services = [
    {
        'name': 'Fabio Sousa',
        'text' : '"O Gustavo é um jovem altamente recomendado. Uma pessoa fora da curva. Ta aí alguém que recomendo altamente! Ele faz dos serviços mais simples ao mais complexos com a mesma dedicação!"',
        'image': 'Img/linkedin/fabio.jpg',
        'link': 'https://www.linkedin.com/in/certbest/'
    },
    {
        'name': 'Ismael Alves',
        'text' : '"Tive o prazer de trabalhar com Gustavo. Ele mostrou dominar as ferramentas de desenvolvimento web e possui uma boa capacidade analítica."',
        'image': 'Img/linkedin/ismael.jpg',
        'link': 'https://www.linkedin.com/in/vonmalves/'
    },
    {
        'name': 'Pedro Saraiva',
        'text' : '"Gustavo is a great professional and very hardworking. He has a great knowledge of javascript and always helps his co-workers. I highly recommend this professional"',
        'image': 'Img/linkedin/pedro.jpg',
        'link': 'https://www.linkedin.com/in/pedro-victor-saraiva-7829931b6/'
    },
    {
        'name': 'Olinda Suely',
        'text' : '"Gustavo is a person dedicated to his studies with focus and determination. He will add knowledge and bring results to the team he is working on. "',
        'image': 'Img/linkedin/olinda.jpg',
        'link': 'https://www.linkedin.com/in/olinda-moraes/'
    },
]

var first_recomendation = 0;
document.getElementById("recomendation-name").innerHTML = our_services[0].name;
document.getElementById("recomendation-text").innerHTML = our_services[0].text;
document.getElementById("linkedinImage").src = our_services[0].image
document.getElementById("linkImg").href = our_services[0].link
document.getElementById("linkName").href = our_services[0].link

document.getElementById("previous").onclick = function(){
    if(first_recomendation == 0){
        var previous_recomendation = our_services.length - 1;
    }else{
        var previous_recomendation = first_recomendation -1;
    }
    document.getElementById("recomendation-name").innerHTML = our_services[previous_recomendation].name;
    document.getElementById("recomendation-text").innerHTML = our_services[previous_recomendation].text;
    document.getElementById("linkedinImage").src = our_services[previous_recomendation].image
    document.getElementById("linkImg").href = our_services[previous_recomendation].link
    document.getElementById("linkName").href = our_services[previous_recomendation].link
    first_recomendation = previous_recomendation
}
document.getElementById("next").onclick = function(){
    if(first_recomendation == our_services.length - 1){
        var next_recomendation = 0;
    }else{
        var next_recomendation = first_recomendation + 1;
    }
    document.getElementById("recomendation-name").innerHTML = our_services[next_recomendation].name;
    document.getElementById("recomendation-text").innerHTML = our_services[next_recomendation].text;
    document.getElementById("linkedinImage").src = our_services[next_recomendation].image
    document.getElementById("linkImg").href = our_services[next_recomendation].link
    document.getElementById("linkName").href = our_services[next_recomendation].link
    first_recomendation = next_recomendation
}