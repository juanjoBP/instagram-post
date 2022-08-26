import * as components from "./components/index.js"

class Appcontainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }
    connectedCallback(){
        this.render();

    }
    render(){
        this.shadowRoot.innerHTML= `
        <my-post profile=".././images/profile.png
        " name="JuanGus
        " location="Colombia-Cali"
         picture=".././images/profile.png
         " views="15 Me gusta" 
         description="JuanGus publico un nuevo post!"></my-post>
         `
    }
}
    
customElements.define("app-container",Appcontainer);

