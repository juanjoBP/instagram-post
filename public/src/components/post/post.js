class Mypost extends HTMLElement{
    static get observerdAttributes(){
        return["profile","name","location","post","views","description"];
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }
    connectedCallback(){
        this.render();

    }
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue
        this.render();
    }
    
    render(){
        this.shadowRoot.innerHTML =`
        <section>
        <link rel="stylesheet" href="./src/components/post/style.css">
            <div class="fila">
                <div class="head">
                    <div class="profile">
                        <img class="foto" src="./images/profile.png"></img>
                        <div id="name">
                            <div class="name">JuanGus</div>
                            <div class="name" id="direct">Colombia-Cali</div>
                        </div>
                    </div>
                    <div class="elipsis">
                        <img src=".././images/elipsis.png"></img>
                    </div>
                </div>

                <div class="post">
                <img class="post" src="./images/post.png"></img>
                </div>
                <div class="iconos">
                    <div class="lcs">
                        <img src=".././images/corazon.png"></img>
                        <img class="space" src=".././images/charlar.png"></img>
                        <img src=".././images/enviar.png"></img>
                     </div>
                    <img src=".././images/guardar.png"></img>
                </div>
                <div class="comments">
                    <div class="debajo">15 Me gusta</div>
                    <div class="debajo"><p class="description">JuanGus publico un nuevo post</div>
                </div>
        </section>
        `
    }
}
        
customElements.define("my-post",Mypost);
export default Mypost;