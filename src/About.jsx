import { Link } from "react-router-dom"

function About() {
  return (
    <div className="p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', color: 'white', padding: '20px'}}>
      <Link to='/' style= {{ color: 'white', textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: 'purple', borderRadius: '5px' }}>{'<- Back'}</Link>
      <h3 style={{ textAlign: 'center '}}>A little about Amethyst..</h3>
      <p style={{ textAlign: 'center '}}> Amethyst Bistro and Bar was founded in 2024 by Jacinta, who had a passion for making art come to life in the kitchen. 
        The idea for the restaurant came about with her love for nature, what nature symbolizes and of course, her favorite color...PURPLE lol.
         She had a vision to blend traditional flavors with modern twists. The name "Amethyst" symbolizes calming, peaceful and protective properties
         so when you come in you feel safe and at ease. So what are you waiting for? Stop by and visit us! </p>
    </div>
  )
}



export default About

