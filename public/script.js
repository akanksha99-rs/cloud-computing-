let sendChat = document.querySelector(".send-chat-button");
let chatArea = document.querySelector(".chat-area");
let chatMessageInput = document.querySelector("#input-text");


let username = prompt("Enter your name");
//console.log(username);

socket.emit("join" , username) ;

chatMessageInput.addEventListener("keyup" , function(e){
    if(e.keyCode == 13){
        sendChat.click();
    }
});

sendChat.addEventListener("click" , function(){
    let chat = chatMessageInput.value;
    if(chat){
        
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat-info");
    chatDiv.classList.add("right");
    //<div class="chat-info right"></div>

    let usernameDiv = document.createElement("div");
    usernameDiv.classList.add("your-name");
    usernameDiv.innerHTML= "You : " ;
    //<div class="username">You : </div>

    let chatMessageDiv = document.createElement("div");
    chatMessageDiv.classList.add("chat");
    chatMessageDiv.innerHTML= chat ;
    //<div class="chat">message</div>

    chatDiv.append(usernameDiv);
    chatDiv.append(chatMessageDiv);
    chatArea.append(chatDiv);

    chatMessageInput.value = "";
    chatArea.scrollTop = chatArea.scrollHeight ;

        socket.emit("send-chat" , chat) ;
    }
});


let changeGroupName = document.querySelector(".change-group-name");
let newGroupNameInput = document.querySelector("#new-group-name");
let groupName = document.querySelector(".group-name");
let groupChatName = document.querySelector(".group-chat-name");

changeGroupName.addEventListener("click" , function(){
    if(newGroupNameInput.classList.contains("hide")){
        newGroupNameInput.classList.remove("hide");
        
        newGroupNameInput.addEventListener("keyup" ,function(e){
            if(e.keyCode == "13"){
                let changedName = newGroupNameInput.value ;

                // ul = html
                let previousGroupName = groupName.innerHTML ;
                if(changedName && changedName != previousGroupName){
                    groupChatName.innerHTML = `<div class="group-name">${changedName}</div>` ;
                    newGroupNameInput.value = "";
                    newGroupNameInput.classList.add("hide") ;
                }
                socket.emit("change-group-name" , {changedName , username}) ;

                let chatDiv = document.createElement("div");
                chatDiv.classList.add("chat");
                chatDiv.classList.add("change");
                chatDiv.innerHTML = `You changed the group name` ;
                chatArea.append(chatDiv);
                chatArea.scrollTop = chatArea.scrollHeight ;
            }

        });
    }
    //else{ newGroupNameInput.classList.add("hide"); }
    
});


let emojiButton = document.querySelector(".fa-laugh-beam");
let emojiOptions = document.querySelector(".emoji-options");

emojiButton.addEventListener("click" , function(){
    //console.log("emoji button clicked");
    if(emojiOptions.classList.contains("hide")){
        emojiOptions.classList.remove("hide");
    }
    else{ emojiOptions.classList.add("hide"); }

})







  
