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
        <section class="header-box">

            <div class="header">
                <span class="cyber">Cyber</span><span class="shop">shop</span>  
            </div>

            <div class="sign-in">
                 Sign In 
                <a href="#"><img class="cart-icon" src="img/Dribbble-Light-Preview.png" /></a> 
            </div>    
    
        </section>
    </header>

    
    <section class="main-visual">
      <img class="top" src="img/tv pic top.svg" alt="" />
      <img id="sony" src="img/sony-256.png" />
  
  
  
      <div class="ad">
        <p class = "one">A NEW TV EXPERIENCE AWAKENS</p>
        <p class = "two">BRAVIA</p>
        <p class = "three">OLED</p>
      </div>
    </section>

   
    


    <section class="content">
       

        <ul class="items">
          <li>
            <img src="img/sony tv.png" class="item-image" alt="" />
            <div class="info">
              <div class="name">Sony BROVIA X80J series 164cm (65 inch)
                Ultra HD 4k google smart
              </div>

              
              <div class="info-bottom">
                <div class="price">$380</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>

          <li>
            <img src="img/234479_2_mzgwn4-removebg-preview.jpg" class="item-image" alt="" />
            <div class="info">
              <div class="name">Samsung 579 Litres frost free digital
                inverter French door refrigerator
              </div>
              
              <div class="info-bottom">
                <div class="price">$1000</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>

          <li>
            <img src="img/234257_ydifvx-removebg-preview-2.jpg" class="item-image" alt="" />
            <div class="info">
                <div class="name">Apple iPhone 12 mini (256GB ROM, 4GB
                    RAM, Purple  
                </div>
                <div class="info-bottom">
                    <div class="price">$1000</div>
                    <div class="number">
                        <span class="minus">－</span>
                        <span class="count">1</span>
                        <span class="plus">+</span>
                    </div>
                </div>
            </div>
        </li>

        <li>
            <img src="img/8941290029086-removebg-preview.jpg" class="item-image" alt="" />
            <div class="info">
              <div class="name">Samsung 28 Litres convection microwave
                Oven, black
              </div>
              
              <div class="info-bottom">
                <div class="price">$300</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>

        </ul> 
    </section>
    

  

    <section class="popup">
        <div class="popup-inner">
            <div class="popup-preview">
                <div class="popup-inner">
                    <img src="img/cross.png" class="close" />
                    <h4><span class="cyber">Cyber</span><span class="shop">shop</span></h4>  
                    <h5><b>SIGN IN</b></h5>

                    <div class="input">
                        <input type="email" onChange={inputEmail} value={email} required placeholder="Email address" /> <br/>
                        <input type="password" onChange={inputPassword} value={password} required placeholder="Password"/>
                    </div>

                    <button class="button" onClick={submitButton} >JOIN US</button>
                    <p>Already a Member? <u>Join Us.</u> </p>
                    
                </div>
            </div>
        </div>
    </section>
    
    
    
    <footer>
        <div class="subtotal">
          <span class="subtotal-test">Subtotal:</span>
          <span class="subtotal-price">$1000</span>
        </div>
        <button>Check Out</button>
    </footer> 
        </>
    )
}

export default SignIn
