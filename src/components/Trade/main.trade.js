import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const trade = () => {
    return (


            <div className="flex flex-wrap">
              <div className="w-1/2">

                <iframe width="450" height="540" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/trade?theme=custom&accent=38e907&background=ffffff&padding=16&chainId=56&inputAddress=0x5c12c812794b874fe4fdea9a4960df599c89b8e5"></iframe>
                <br/>
              </div>
              <div>
                <img src="/OIG.jpg" alt="" />
              </div>
              <div className="w-1/2">
              <iframe width="450" height="540" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/trade?theme=custom&accent=fd1235&background=ffffff&padding=16&chainId=56&inputAddress=0xc42a67c3d7d5e387168b72ccc555ee61838c7e33"></iframe>
              </div>
              </div>
    )
  }

  export default trade;
