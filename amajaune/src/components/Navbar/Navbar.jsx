import './navbar.css'
import Searchbar from './Searchbar/Searchbar'

export default function Navbar(){

    return (
        <div className="navbar">
            <div className="navbar-haut">
            <ul>
                <li><a className='amajaune' href="amajaune">amajaune</a></li>
                <li className='comptes'>
                    <div className='bonjour'>Bonjour</div>
                    <div>Entrez votre adresse</div>
                </li>
                <li className='searchbar'><Searchbar /></li>
                <li className='comptes'>
                    <div className='bonjour'>Bonjour, identifiez-vous</div>
                    <div>Comptes et listes</div>
                </li>
                <li className='comptes'>
                    <div className='bonjour'>Retours</div>
                    <div>et commandes</div>
                </li>
               
            </ul>
            <img src="../panier.png" alt="" />
            </div>
            <div className="navbar-bas">
                <ul>
                    <li>toutes categories</li>
                    <li>Meilleures ventes</li>
                    <li>Amazon basics</li>
                    <li>Musique</li>
                    <li>Service client</li>
                    
                </ul>
            </div>
            
        </div>
    )
}