import React, { useState } from "react";
import "./Main.css";
import pacote from "../../assets/pacote.png";

export default function Main() {
    const [jogador, setJogador] = useState();

  
    function jogador1() {
    setJogador("https://s2-ge.glbimg.com/JVKWbxvcgPHXyYNIA-BxLkuqMXM=/0x0:900x1258/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/1/B/Jdo6PgR46Ek7qvdlPCfQ/50498339.webp");
      
    }
    function jogador2() {
    setJogador("https://preview.redd.it/pel%C3%A9-concept-for-eafc24-v0-x8wany7gd9pb1.png?width=640&crop=smart&auto=webp&s=6594e0d81621aba990a6a54cd5e5f7ea798fc813");
    
    }
    function jogador3() {
    setJogador("https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/common/toty/icons/1-1705600975-50369224.png.adapt.crop16x9.652w.png");
     
    }
  
    return (
      <main>
        <h2>Icon Pack Simulator</h2>
        <div>
          <img src={jogador} alt="" />
          
        </div>
  
        <section>
          <figure>
            <img src={pacote} alt="" />
            
            <button onClick={jogador1}>Abra aqui</button>
          </figure>
  
          <figure>
            <img src= {pacote} alt="" />
            
            <button onClick={jogador2}>Abra aqui</button>
          </figure>
  
          <figure>
            <img src={pacote} alt="" />
            
            <button onClick={jogador3}>Abra aqui</button>
          </figure>
        </section>
      </main>
    );
  }
  