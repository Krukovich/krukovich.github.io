class ViewLogin {
    createLink(){
      let link = document.createElement("a");
      link.setAttribute("href", "https://oauth.vk.com/authorize?client_id=6949483&display=page&redirect_uri=https://krukovich.github.io/&scope=friends&response_type=token&v=5.95&state=123456");
      link.innerHTML = "Click";
      document.body.append(link);
    }
}

export default ViewLogin;