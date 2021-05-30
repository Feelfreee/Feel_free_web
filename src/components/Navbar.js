import React from 'react';


export default function ButtonAppBar() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#1890FF'}}>
          <div className="container-fluid">
            <a className="navbar-brand" style={{color:'#1890FF'}}>Feel Free</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
          </div>
      </nav>
    </div>
  );
}
