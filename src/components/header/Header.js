import './header.css';

function Header() {

    //Refresh button that makes new call to api
    const refresh = () => {
        window.location.reload(false);
    }



  return (

    <div>

    <div className="App">
      <h1>
        <a href="./">🪐 Curious Cure ☄️</a>
      </h1>

    <br></br>

      <span>
        A free REST API for random interesting wikipedia articles
      </span>
    </div>

<br></br>
<br></br>
    

    <div className="lower">
    <a href="https://curiouscure.herokuapp.com/">curiouscure.herokuapp.com</a> 
    <button onClick={refresh}>🔄 refresh</button>
    </div>


    </div>



  );
}

export default Header;
