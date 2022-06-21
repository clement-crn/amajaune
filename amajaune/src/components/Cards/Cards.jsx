import './card.css'


export default function Card(){
    return(
        <div className='cards'>

        
        <div className="carda">
            
            
            <div className='card-title-a'>En savoir plus sur nos robots</div>
            <img className='card-image-a' src='https://images-eu.ssl-images-amazon.com/images/G/08/FR_AFE/XCM_Manual_1348940_1776029_4001913_FR_fr_gw_pc_single_category_card_1x_fr_fr_x608_2X_fr_FR._SY304_CB644789416_.jpg'></img>
            <div className='card-about-a'>En savoir plus.</div>
            
        </div>

        <div className="cardb">
            <div className='card-title-b'>Acces illimite avec amajaune prime.</div>
            <img className='card-image-b' src='https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/DesktopGateway_TOP_CARD_Low_379x304_25K._SY304_CB450501943_.jpg'></img>
            <div className='card-about-b'>En savoir plus.</div>
        </div>

        <div className="cardc">
            <div className='card-title-c'>Consultez blabla</div>
            <div className='line1'>
            <img className='card-image-c' src='https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NjkzM2MxYWEt/NjkzM2MxYWEt-MDcyMDI1Yjkt-w186._SY116_CB645957264_.jpg'></img>
            <img className='card-image-c' src='https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NjkzM2MxYWEt/NjkzM2MxYWEt-NDNmZTRlMTEt-w186._SY116_CB625929923_.jpg'></img>
            </div>
            <div className='line2'>
            <img className='card-image-c' src='https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NjkzM2MxYWEt/NjkzM2MxYWEt-MDA0NWYwZDEt-w186._SY116_CB664044828_.jpg'></img>
            <img className='card-image-c' src='https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NjkzM2MxYWEt/NjkzM2MxYWEt-MGZlYjViZGIt-w186._SY116_CB627501400_.jpg'></img>
            </div>
            <div className='card-about-c'>En savoir plus.</div>
        </div>
        </div>
        

    )
}