import React from 'react'
import Logo from './logo.svg'


export default function ButtonAppBar() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#1890FF'}}>
          <div className="container-fluid">
            <a className="navbar-brand" style={{color:'#1890FF'}}>
              <img src={Logo} alt="" width="40" height="40" style={{marginRight:'1rem'}} />
              Feel Free
            </a>            
          </div>
      </nav>
    </div>
  );
}
