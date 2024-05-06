import { Link } from "react-router-dom"



function Contact() {
    return (
        <div className="p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', color: 'white', padding: '20px' }}>
            <Link to='/' style={{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px', marginBottom: '20px' }}>{'<- Back'}</Link>
            <h3 style={{ textAlign: 'center '}}>Location</h3>
            <a href= "https://www.google.com/maps/place/348+E+Main+St,+Lexington,+KY+40507/@38.0421704,-84.4925389,16z/data=!3m1!4b1!4m6!3m5!1s0x884244e844532c33:0xb6919957af36b713!8m2!3d38.0421704!4d-84.4925389!16s%2Fg%2F11c5n2lnvk?entry=ttu" target ="_self" 
            rel="noreferrer" style= {{color: 'white' }}>
            <p style={{ textAlign: 'center '}}>348 E Main St, Lexington, KY</p>
            </a>
            <h3 style={{ textAlign: 'center '}}>Don't Be Shy, Hit Our Line!</h3>
            <p style={{ textAlign: 'center '}}>Tel: (000) 000-0000!</p>
            <h3 style={{ textAlign: 'center '}}>When You Can See Us</h3>
            <p style={{ textAlign: 'center '}}>Monday-Tuesday CLOSED</p>
            <p style={{ textAlign: 'center '}}>Wednesday-Friday 11AM-11PM</p>
            <p style={{ textAlign: 'center '}}>Saturday-Sunday 11AM-2AM</p>

        </div>
    )
}


export default Contact