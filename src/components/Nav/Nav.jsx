import './NavStyle.css'


function Nav() {
  return (
    <section id ="nav">
      <div className="-brand">
        <div className="-ham">
          <img src="https://via.placeholder.com/24x24" alt="" />
        </div>
        <div className="-logo">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
           <span>Premium</span>
        </div>
      </div>
      <div className="-center">
        <div className="-search">
          <div className="-search-box">
            <input type="text" className="-search-input"/>
          </div>
          <div className="-btn">Q</div>
        </div>
        <div className="-voice"></div>
      </div>
      <div className="-end">
        <div className="-end-item">1</div>
        <div className="-end-item">2</div>
        <div className="-end-item">3</div>
      </div>
    </section>
    
  )
}

export default Nav
