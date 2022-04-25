import './header.css';

function Header() {



  return (

    <div>

    <div className="App">
      <h1>
        <a href="./">🪐 Curious Cure ☄️</a>
      </h1>
      <span>
        A free REST API for random interesting wikipedia articles
      </span>
    </div>

<br></br>
    

    <div className="lower">
    <a href="https://api.wiki.rest">https://api.wiki.rest</a> 
        <button>🔄 refresh</button>
    </div>


    </div>



  );
}

export default Header;
