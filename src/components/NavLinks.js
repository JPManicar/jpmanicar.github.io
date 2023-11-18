import './styles/nav-styles.css'
import about from './Home.js'
import projects from './Home.js'
import contacts from './Home.js'

function NavLinks({scrollToSection}) {
    return ( 
        <ul>
            <li className='nav-links' >Home</li>
            <li className='nav-links' onClick={() => scrollToSection(about)}>About Me</li>
            <li className='nav-links' onClick={() => scrollToSection(projects)}>Projects</li>
            <li className='nav-links' >Gallery</li>
            <li className='nav-links' onClick={() => scrollToSection(contacts)}>Contacts</li>
        </ul> 
     );
}
 
export default NavLinks;