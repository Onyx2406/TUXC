import React from 'react'
const ShippingAddressScreenConversational = () => {
    return (
        <div>
            <div class="chat">
  <div class="chat-title">
    <h1>Smart BOt</h1>
    <h2>i am customer support chat bot</h2>
    <figure class="avatar">
      <img src="css/bot.png"/></figure>
  </div>
  <div class="messages">
    <div class="messages-content"></div>
    <div class="suggession">
     
    </div>
  </div>
  <form class="message-box" id="mymsg" method="POST">
    <input type="text" id="MSG" name="MSG" class="message-input" placeholder="Type message..." ></input>
   
    <i class="fas fa-microphone" id="start-record-btn"></i>
    <button type="submit" class="message-submit">Send</button>
  </form>
  <h3 class="no-browser-support" hidden>Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome.</h3>
</div>
<div class="bg"></div>
<script  src="./js/index.js"></script>

        </div>
    )
}

export default ShippingAddressScreenConversational
