import "./style.css"

function NavbarList() {
  return (
    <div style={{position: 'relative'}}>
        <ul>
          <div>
            <li><img src="/auradot-ai.jpeg" style={{width: '64px', height: '64px'}} /></li>
          </div>
          <div className="center_menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>
          <div>
            <li style={{float:"right"}}><a class="active" href="#about">About</a></li>
          </div>
        </ul>
    </div>
    
  );
}
export default NavbarList;