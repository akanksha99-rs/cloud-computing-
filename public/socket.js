socket.on("add-chat", function(chatObject){

    /*
    <div class="chat-info left">
                        <div class="username">ABC</div>
                        <div class="chat">Hiiiii</div>
                    </div>
                    */
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat-info");
    chatDiv.classList.add("left");
    //<div class="chat-info left"></div>

    let usernameDiv = document.createElement("div");
    usernameDiv.classList.add("sender-name");
    usernameDiv.innerHTML=`${chatObject.name} : ` ;
    //<div class="username">name</div>

    let chatMessageDiv = document.createElement("div");
    chatMessageDiv.classList.add("chat");
    chatMessageDiv.innerHTML=`${chatObject.chatMessage}` ;
    //<div class="chat">message</div>

    chatDiv.append(usernameDiv);
    chatDiv.append(chatMessageDiv);
    chatArea.append(chatDiv);

    chatArea.scrollTop = chatArea.scrollHeight ;
});

socket.on("join-chat" , function(username){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("join");
    chatDiv.innerHTML = `${username} joined the chat` ;
    chatArea.append(chatDiv);
    chatArea.scrollTop = chatArea.scrollHeight ;
    //ActiveUsersDiv(username , usersDB);

});

socket.on("leave-chat" , function(username){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("leave");
    chatDiv.innerHTML = `${username} left the chat` ;
    chatArea.append(chatDiv);
    chatArea.scrollTop = chatArea.scrollHeight ;
});

socket.on("new-group-name" , function(changeInfo){
    groupChatName.innerHTML = `<div class="group-name">${changeInfo.changedName}</div>` ;

    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("change");
    chatDiv.innerHTML = `${changeInfo.username} changed the group name` ;
    chatArea.append(chatDiv);
    chatArea.scrollTop = chatArea.scrollHeight ;
});

socket.on("user-info" , function(username){
    //console.log(username);
    /*
    <div class="my-detail">
                    <h4>You</h4>
                    <div class="active-username">
                        <div class="name">Vanshika</div>
                        <div class="icon">
                            <i class="far fa-user-circle"></i>
                        </div>
                    </div>
    */

    let myDetails = document.querySelector(".my-detail");

    let yourActiveUsername = document.createElement("div");
    yourActiveUsername.classList.add("active-username");

    let Yourname = document.createElement("div");
    Yourname.classList.add("name");
    Yourname.innerHTML = username;
     
    let icon = document.createElement("div");
    icon.classList.add("icon");

    let i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-user-circle");

    icon.append(i);
    yourActiveUsername.append(Yourname);
    yourActiveUsername.append(icon);
    myDetails.append(yourActiveUsername);


});

/*
<ul class="user-list">
        <li class="active-username" uid="0">
            <div class="name">Abcd</div>
            <div class="icon">
                 <i class="far fa-user-circle"></i>
              </div>
        </li>
    </ul>
*/
socket.on("active-users" , function(usersDB){
    //console.log(usersDB);
    let userList = document.querySelector(".user-list");
    for(let i=0 ; i<usersDB.length; i++){
        let activeUserInfo = document.createElement("li");
        activeUserInfo.classList.add("active-username");

        let name = document.createElement("div");
        name.classList.add("name");
        name.innerHTML = usersDB[i].username;

        let icon = document.createElement("div");
        icon.classList.add("icon");

        let iTag = document.createElement("i");
        iTag.classList.add("far");
        iTag.classList.add("fa-user-circle");

        icon.append(iTag);
        activeUserInfo.append(name);
        activeUserInfo.append(icon);
        userList.append(activeUserInfo);
    }
});

socket.on("add-active-user", function(username){
        let userList = document.querySelector(".user-list");
        let activeUserInfo = document.createElement("li");
        //let activeUserInfo = `<li class="active-username" uid=${usersDb.length++}></li>` ;
        activeUserInfo.classList.add("active-username");

        let name = document.createElement("div");
        name.classList.add("name");
        name.innerHTML = username;

        let icon = document.createElement("div");
        icon.classList.add("icon");

        let iTag = document.createElement("i");
        iTag.classList.add("far");
        iTag.classList.add("fa-user-circle");

        icon.append(iTag);
        activeUserInfo.append(name);
        activeUserInfo.append(icon);
        userList.append(activeUserInfo);
});

socket.on("remove-active-user", function(usersDB){
    //console.log(username);
    let userList = document.querySelector(".user-list");
    userList.innerHTML="";
    for(let i=0 ; i<usersDB.length; i++){
        let activeUserInfo = document.createElement("li");
        activeUserInfo.classList.add("active-username");

        let name = document.createElement("div");
        name.classList.add("name");
        name.innerHTML = usersDB[i].username;

        let icon = document.createElement("div");
        icon.classList.add("icon");

        let iTag = document.createElement("i");
        iTag.classList.add("far");
        iTag.classList.add("fa-user-circle");

        icon.append(iTag);
        activeUserInfo.append(name);
        activeUserInfo.append(icon);
        userList.append(activeUserInfo);
    }
});
