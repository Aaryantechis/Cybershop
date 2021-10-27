import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";

const Shipping = () => {
    return (
        <div>
            <div class="box">
             <p>- Order your items -</p>
            </div>

            <section class="details">
              <h3>Shipment Details</h3>
              <h4>Please check your items and confirm it</h4>
              <div class="box2">
                <div class="selected1">
                  <p>1</p>
                  <p>$399.99</p>
                </div>

                <div class="selected2">
                  <p>Airpods Wireless Bluetooth Headphones</p>
                  <p>2</p>
                  <p>$124.99</p>
                </div>
                <hr color="#56F702">

                <div class="total">
                  <p>Total Price</p>
                  <p id="total">3</p>
                  <p>$649.97</p>
                </div>
              </div>

              <div class="form">
                <label for="name">Full name</label> <br/>
                <input type="text" id="name" name="name" required placeholder="Enter Recipient's name"/> <br/>

                <label for="number">Phone Number</label> <br/>
                <input type="text" id="number" name="number" required placeholder="Enter Phone Number"/> <br/>

                <label for="address">Street address or P.O. Box</label> <br/>
                <input type="text" id="address" name="address" required placeholder="Enter Street address or P.O. Box"/> <br/>

                <label for="zip">PIN code</label> <br/>
                <input type="text" id="zip" name="zip" required placeholder="Enter PIN code"/> <br/>

                <label for="house">Apt, suite, unit, building, floor, etc.</label> <br/>
                <input type="text" id="house" name="house" required placeholder="Enter Apt, suite, unit, building, floor, etc."/> <br/>

                <label for="city">City</label> <br/>
                <input type="text" id="city" name="city" required placeholder="Enter City"/> <br/>

                <label for="state">State</label> <br/>
                <input type="text" id="State" name="state" required placeholder="Enter State"/>
              </div>

              <div class="submit">
                <button type="submit">SUBMIT</button>
              </div>
            </section>
        </div>
    );

};


export default Shipping;