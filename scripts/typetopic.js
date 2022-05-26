function typetopic(){
    let type = document.getElementById("typeTopic")
    type.style = "display: block;";
    let button = document.getElementById("createTopic")
    button.style = "display: none;";
}

function info() {
    let subject = document.getElementById("subject").value
    let content = document.getElementById("content").value
    let questionsBank = document.getElementById("questionsBank")
    if(subject != '' && content != ''){
        questionsBank.innerHTML += '<div class="questions">' + `<h3 class="createSubject">${subject}</h3>` + '<p>nome autor</p>' + `<p>${content}</p>` + '</div>'
        document.getElementById("subject").value = ''
        document.getElementById("content").value = ''
    }else{
    alert('sem assunto ou sem conteúdo')
    }
    let type = document.getElementById("typeTopic")
    type.style = "display: none;";
    let button = document.getElementById("createTopic")
    button.style = "display: flex;";
}
