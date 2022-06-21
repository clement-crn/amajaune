
import './searchbar.css'


export default function Searchbar() {
    return(

        <div className='searchcontainer'>
            <div className="search">
          <div className='categories'>Toutes nos categories</div>
			  	<input className='barre' type="text" class="input" placeholder=""></input>
				  <a className='fa fa-search'></a>
        </div>
        </div>
    )
}