import React from "react"
import {useHistory, useLocation} from "react-router-dom"
import "./styles.css"


function Header() {
  let history = useHistory();
  let location = useLocation();

  const handleBack = () => {
    history.push("/")
  }

  return (
    <header>
      <nav>
        {(location.pathname !== '/') &&
                <button
                        className="backButton"
                        title="voltar"
                        onClick={handleBack}>
                  <span className="material-icons">arrow_back</span>
                </button>
        }
        <h1>App Fruit</h1>
      </nav>
    </header>
  )
}

export default Header;