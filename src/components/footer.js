import React from 'react';
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container fixed-bottom">
            <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;