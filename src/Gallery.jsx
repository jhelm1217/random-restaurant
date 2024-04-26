import { Link } from "react-router-dom"
import purpDrink from './assets/purple-drink.jpeg'
import houstonBar from './assets/houston-bar.jpeg'
import bathroom from './assets/bathroom.jpeg'


function Gallery() {
    return (
        <div className="p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', color: 'white', padding: '20px' }}>
            <Link to='/' style={{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px', marginBottom: '20px' }}>{'<- Back'}</Link>
            <div className="gallery" tyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={purpDrink} alt="Image 1" className="gallery-item" style ={{ width: '50%', height: 'auto' }}/>
                <img src={houstonBar} alt="Image 2" className="gallery-item" style ={{ width: '50%', height: 'auto' }}/>
                <img src={bathroom} alt="Image 3" className="gallery-item" style ={{ width: '50%', height: 'auto' }}/>

            </div>
         </div> 
    )
}


export default Gallery