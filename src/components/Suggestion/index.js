import { useEffect } from 'react'
import './style.css'

export function Suggestion() {
    return (
        <div className='container-suggestion'>
          <div className="header-suggestion">
            <img src={'https://avatars.githubusercontent.com/u/110692022?v=4'} />

            <div className="user-infos-suggestion">
               <div className="infos">
               
                <span>italo10s</span>
                <p>Italo Rodrigues</p>
               </div>

               <button className='switch'>Mudar</button>

            </div>
          </div>

          <div className='header-main-suggestion' >

            <p>Sugestões para você</p>

            <span>Ver tudo</span>
          </div>
        
        <div className='user-suggestion'>

            <div className='infos-suggestion'>
                <img src={'https://www.vagalume.com.br/the-weeknd/images/the-weeknd.jpg'} />

                <div className='info-suggestion' >
                    <span>theweeknd</span>
                    
                    <p>Seguido por: kevindebruyne</p>
                </div>
                <button className='follow'>Seguir</button>

            </div>

            <div className='infos-suggestion'>
                <img src={'https://www.vagalume.com.br/the-weeknd/images/the-weeknd.jpg'} />

                <div className='info-suggestion' >
                    <span>theweeknd</span>
                    
                    <p>Seguido por: kevindebruyne</p>
                </div>
                <button className='follow'>Seguir</button>

            </div>


            <div className='infos-suggestion'>
                <img src={'https://www.vagalume.com.br/the-weeknd/images/the-weeknd.jpg'} />

                <div className='info-suggestion' >
                    <span>theweeknd</span>
                    
                    <p>Seguido por: kevindebruyne</p>
                </div>
                <button className='follow'>Seguir</button>

            </div>

            <div className='infos-suggestion'>
                <img src={'https://www.vagalume.com.br/the-weeknd/images/the-weeknd.jpg'} />

                <div className='info-suggestion' >
                    <span>theweeknd</span>
                    
                    <p>Seguido por: kevindebruyne</p>
                </div>
                <button className='follow'>Seguir</button>

            </div>

            <footer className='footer-suggestion' >
            <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

             <p>&copy; 2021 INSTAGRAM FROM META</p>
            </footer>









        </div>
        
        </div>
    )


}