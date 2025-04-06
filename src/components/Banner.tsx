{/*ici il s'agit de la bannière du haut avc la photo en background redimensionné et les éléments en avant*/}

function Banner() {

    return (
        <section className="banner">
          <h1 className='banner_title'>Donnez une seconde vie à vos achats</h1>
          <p className='banner_description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur eum voluptas quod alias vitae facilis quidem minima commodi placeat nulla, officiis ducimus fuga eveniet enim quos. Consequuntur esse quod in?</p>
          <a 
          href="/#"
          className='btn-filled'
          >Commencer à vendre</a>
        </section>
    )
  }
  export default Banner;