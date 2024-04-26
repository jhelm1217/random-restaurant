import { Link } from "react-router-dom"



function Gallery() {
    return (
        <div className="p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', color: 'white', padding: '20px' }}>
            <Link to='/' style={{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px', marginBottom: '20px' }}>{'<- Back'}</Link>
            <div className="gallery" tyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="src/assets/purple drink .jpeg" alt="Image 1" className="gallery-item" style ={{ width: '50%', height: 'auto' }}/>
                <img src="src/assets/houston bar .jpeg" alt="Image 2" className="gallery-item" style ={{ width: '50%', height: 'auto' }}/>
                <img src="src/assets/bathroom .jpeg" alt="Image 3" className="gallery-item" style ={{ width: '50%', height: 'auto' }}/>

            </div>
         </div> 
    )
}


export default Gallery