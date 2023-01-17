import './Title.css'
import '../Navbars/DesktopNavbar'
import DesktopNavbar from '../Navbars/DesktopNavbar'

function Title(props) {
  return (
    <div className="title">
      <h1>{props.title}</h1>
      <div className="title-navbar">
        <DesktopNavbar color={props.navbarColor} />
      </div>
    </div>
  );
}

export default Title;