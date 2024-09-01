import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/subscriber/subscribe",
        { email }
      );
      toast.success(response.data.message);
      setEmail(""); 
    } catch (error) {
      toast.error("Email already exists");
    }
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>GAUR'S</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>Newsletter</label>
          <form onSubmit={handleSubscribe}>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          <p>Sign up with your email address to receive news and updates!!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
