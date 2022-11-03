import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsEmojiSmile } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'


export function Post() {
    return (
        <>
        <header className='header-post'>

         <div className="infos-post">
            <img className='img-header-post' src="https://yt3.ggpht.com/jOAnlZbuk0-mc32TgXhmXIhavyBI-7XZYqaag1ayfR-Lv3DUSTFf_yubrHRB1AM4CmMQ4auzXw=s900-c-k-c0x00ffffff-no-rj" />

            <p><strong>hbo</strong></p>
         </div>

              <FiMoreHorizontal />
        </header>

        <div className='img-post'>
            <img src='https://s2.glbimg.com/ror0XiLJf-mudALbZ_bRwlNwgp8=/0x0:607x426/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/z/j/omiyZwTeAdbHmSKLBEUg/2021-10-19-succession-hbo-01.jpg' />

        </div>

        <div className='footer-poster' >
            <IconContext.Provider value={{size:'30px' }}>

            <section className='engagement-post'>
                <div className='icons-1'>
                    <div className='icon'><IoMdHeartEmpty /></div>
                    <div className='icon'> <BsChat  /></div>
                    <div className='icon'><FiSend /></div>
                    
                </div>

                <div className='icon'><sBookmark /></div>
                
               </section>
               </IconContext.Provider>
               
               <section className='like'>
                <span>36.267 curtidas</span>
               </section>

               <div className='legend'>
                <p>
                    
                    <span><strong>hbo</strong></span>
                </p>
               </div>
               
               <div className='time-post'>
                <time>Há 1 hora</time>
               </div>

               <div className='coment' >
                <div className='fake-comment'>

                <IconContext.Provider value={{size: '25px'}}>
                    <div className='icon'>
                    <BsEmojiSmile />
                    </div>
                   

                </IconContext.Provider>

                <input placeholder='Adicione um comentário...' />

                <button>Publicar</button>
                   

                </div>
               </div>

        </div>


        <header className='header-post'>

         <div className="infos-post">
         <img className='img-header-post' src="https://cdn.resfu.com/media/img_news/messi--jugador-del-barcelona--junto-a-su-familia-en-su-casa--twitter.png" />

         <p><strong>leomessi</strong></p>
         </div>

         <FiMoreHorizontal />
        </header>

        <div className='img-post'>
        <img src='https://cms.somosfanaticos.com/__export/1667227408354/sites/fanaticos/img/2022/10/31/messi_se_xseduzx_com_outro_projeto_e_frustra_os_planos_do_barcelona.jpg_242310155.jpg' />

        </div>

        <div className='footer-poster' >
        <IconContext.Provider value={{size:'30px' }}>

         <section className='engagement-post'>
          <div className='icons-1'>
           <div className='icon'><IoMdHeartEmpty /></div>
           <div className='icon'> <BsChat  /></div>
           <div className='icon'><FiSend /></div>
           
       </div>

       <div className='icon'><sBookmark /></div>
       
      </section>
      </IconContext.Provider>
      
      <section className='like'>
       <span>4.453.267 curtidas</span>
      </section>

      <div className='legend'>
       <p>
           
           <span><strong>leomessi</strong> É isso família, preparado para ser eliminado pelo Brasil na copa!</span>
       </p>
      </div>
      
      <div className='time-post'>
       <time>Há 1 hora</time>
      </div>

      <div className='coment' >
       <div className='fake-comment'>

       <IconContext.Provider value={{size: '25px'}}>
           <div className='icon'>
           <BsEmojiSmile />
           </div>
          

       </IconContext.Provider>

       <input placeholder='Adicione um comentário...' />

       <button>Publicar</button>
          

       </div>
      </div>
      </div>

      <header className='header-post'>

<div className="infos-post">
<img className='img-header-post' src="https://yt3.ggpht.com/ZjcQii3sVKaPcGK3rIm8vot-qwdmm7KAHsWCjlQLsDLa_tm2kykM-Lgmty1IwQWehj7nEzXPUA=s900-c-k-c0x00ffffff-no-rj" />

<p><strong>metallica</strong></p>
</div>

<FiMoreHorizontal />
</header>

<div className='img-post'>
<img src='https://www.larepublica.ec/wp-content/uploads/2021/09/Metallica.jpg' />

</div>

<div className='footer-poster' >
<IconContext.Provider value={{size:'30px' }}>

<section className='engagement-post'>
 <div className='icons-1'>
  <div className='icon'><IoMdHeartEmpty /></div>
  <div className='icon'> <BsChat  /></div>
  <div className='icon'><FiSend /></div>
  
</div>

<div className='icon'><sBookmark /></div>

</section>
</IconContext.Provider>

<section className='like'>
<span>350.242 curtidas</span>
</section>

<div className='legend'>
<p>
  
  <span><strong>metallica</strong> </span>
</p>
</div>

<div className='time-post'>
<time>Há 1 hora</time>
</div>

<div className='coment' >
<div className='fake-comment'>

<IconContext.Provider value={{size: '25px'}}>
  <div className='icon'>
  <BsEmojiSmile />
  </div>
 

</IconContext.Provider>

<input placeholder='Adicione um comentário...' />

<button>Publicar</button>
 

</div>
</div>

</div>

        </>
    )
  

}