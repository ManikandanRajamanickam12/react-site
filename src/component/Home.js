import React from 'react'
import { Link } from 'react-router-dom'
import '../component/Home.css'
function Home () {
   
    return(
        <div>
            
            <div className="home-image">
                <img src="../assets/images/home.jpg"></img>
            </div>
            <div className="home-labels">
                <div>
                    <Link to='/menu' exact>
                        <img src="../assets/images/menu.jpg"></img>
                        <p>Menu</p>
                    </Link>
                </div>
            
                <div>
                    <Link to={"/menu/uthappizza"}>
                        <img src="../assets/images/specials.jpg"></img>
                        <p>Specials</p>
                    </Link>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.3751447513187!2d79.
                    01614047891421!3d10.728870326887593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                    1!3m3!1m2!1s0x3baabe2803211597%3A0x6371e96c202331c!2sSASTRA%20Deemed%20to%20be%20University!5e0!3m2!1sen!2sin!4v1600428403540!5m2!1sen!2sin"
                    width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <p>Location</p>
                </div>
            </div>
        </div>
    )
}
export default Home