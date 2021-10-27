import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';



const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const submitButton = (event) => {
    event.preventDefault();
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
  };

  return (
        <>
          
    <header>
        <section className="header-box">

            <div className="header">
                <span className="cyber">Cyber</span><span className="shop">shop</span>  
            </div>

            <div className="sign-in">
                 Sign In 
                <a href="#"><img className="cart-icon" src="img/Dribbble-Light-Preview.png" /></a> 
            </div>    
    
        </section>
    </header>

    
    <section className="main-visual">
      <img className="top" src="img/tv pic top.svg" alt="" />
      <img id="sony" src="img/sony-256.png" />
  
  
  
      <div className="ad">
        <p class = "one">A NEW TV EXPERIENCE AWAKENS</p>
        <p class = "two">BRAVIA</p>
        <p class = "three">OLED</p>
      </div>
    </section>

   
    


    <section className="content">
       

        <ul className="items">
          <li>
            <img src="img/sony tv.png" className="item-image" alt="" />
            <div className="info">
              <div className="name">Sony BROVIA X80J series 164cm (65 inch)
                Ultra HD 4k google smart
              </div>

              
              <div className="info-bottom">
                <div className="price">$380</div>
                <div className="add">Add +</div>
              </div>
            </div>
          </li>

          <li>
            <img src="img/234479_2_mzgwn4-removebg-preview.jpg" className="item-image" alt="" />
            <div className="info">
              <div className="name">Samsung 579 Litres frost free digital
                inverter French door refrigerator
              </div>
              
              <div className="info-bottom">
                <div className="price">$1000</div>
                <div className="add">Add +</div>
              </div>
            </div>
          </li>

          <li>
            <img src="img/234257_ydifvx-removebg-preview-2.jpg" className="item-image" alt="" />
            <div className="info">
                <div className="name">Apple iPhone 12 mini (256GB ROM, 4GB
                    RAM, Purple  
                </div>
                <div className="info-bottom">
                    <div className="price">$1000</div>
                    <div className="number">
                        <span className="minus">－</span>
                        <span className="count">1</span>
                        <span className="plus">+</span>
                    </div>
                </div>
            </div>
        </li>

        <li>
            <img src="img/8941290029086-removebg-preview.jpg" className="item-image" alt="" />
            <div className="info">
              <div className="name">Samsung 28 Litres convection microwave
                Oven, black
              </div>
              
              <div className="info-bottom">
                <div className="price">$300</div>
                <div className="add">Add +</div>
              </div>
            </div>
          </li>

        </ul> 
    </section>
    

  

    <section className="popup">
        <div className="popup-inner">
            <div className="popup-preview">
                <div className="popup-inner">
                    <img src="img/cross.png" className="close" />
                    <h4><span className="cyber">Cyber</span><span className="shop">shop</span></h4>  
                    <h5><b>SIGN IN</b></h5>

                    <div className="input">
                        <input type="email" onChange={inputEmail} value={email} required placeholder="Email address" /> <br/>
                        <input type="password" onChange={inputPassword} value={password} required placeholder="Password"/>
                    </div>

                    <button className="button" onClick={submitButton} >JOIN US</button>
                    <p>Already a Member? <u>Join Us.</u> </p>
                    
                </div>
            </div>
        </div>
    </section>
    
    
    
    <footer>
        <div className="subtotal">
          <span className="subtotal-test">Subtotal:</span>
          <span className="subtotal-price">$1000</span>
        </div>
        <button>Check Out</button>
    </footer> 
        </>
    )
}

export default SignIn
