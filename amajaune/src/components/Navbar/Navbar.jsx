import './navbar.css'
import Searchbar from './Searchbar/Searchbar'


import cart from './cart.png'
import location from './location.png'

export default function Navbar(){

    return (
        <div className="navbar">
            <div className="navbar-haut">
            <ul>
                <li><a className='amajaune' href="amajaune">amajaune</a></li>
                <li className='adresse'>
                    <img className='location-svg' src={location} alt="gps logo" />
                    <div>
                    <div className='bonjour'>Bonjour</div>
                    <div>Entrez votre adresse</div>
                    </div>
                </li>
                <li className='searchbar'><Searchbar /></li>
                <li className='comptes'>
                    <div className='bonjour'>Bonjour, identifiez-vous</div>
                    <div>Comptes et listes</div>
                </li>
                <li className='commandes'>
                    <img className='cart' src={cart} alt="" />
                    <div>
                        <div className='bonjour'>Retours</div>
                        <div>et commandes</div>
                    </div>
                    
                </li>
               
            </ul>
            
            </div>
            <div className="navbar-bas">
                <ul>   
                    <li>Toutes les categories</li>
                    <li>Meilleures ventes</li>
                    <li>Amazon basics</li>
                    <li>Musique</li>
                    <li>Service client</li>
                    
                </ul>
            </div>
            
        </div>
    )
}