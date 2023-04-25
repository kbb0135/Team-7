import React from 'react';
import '../style.css'; // Import CSS file for Navbar component

const Footer = () => {
    return (
        



        <footer class="footerDiv">
            <div class="footerUNTCol">
                <img src="../Assets/eagle.png" alt="UNTBird"></img>
            </div>





            <div class="footerUNTCol">
                <div class="footerUNTColSection">
                    <h4 class="footerTitle">University Of North Texas</h4>
                    <p class="footerPara">UNT Dining Services | Univserity Of North Texas</p>
                </div>
                <div class="footerUNTColSection">
                    <h4 class="footerTitle">Contact</h4>
                <p class="footerPara"><img src="../Assets/email.png" alt="Email"/>email@email.com | <img src="../Assets/phone.png" alt="Phone"/>555-555-555</p>
                </div>
                
            </div>





            <div class="footerUNTCol">
                <div class="footerUNTColSection footerUNTColEnd">
                    <h4 class="footerUNTColTitle">Discovery Park Cafeteria</h4>
                    <h5 class="footerUNTColLocation"><img src="../Assets/location-pin.png" alt="Location"/>Discovery Park</h5>
                    <p class="footerUNTColAddress">3940 N Elm St, Denton, Tx 76207</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;