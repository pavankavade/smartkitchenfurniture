import "./card.css";

export default function CardPage() {
  return (
    <>
      <div className="page-wrapper" id="home-section">
        <div className="corner"></div>
        <div className="upper">
          <img
            src="/smart_kitchen_logo.png"
            className="profile-pic-img"
            alt="Smart Kitchen & Furniture"
          />
          <div className="firmname">Smart Kitchen & Furniture</div>
          <div style={{ width: "40%", backgroundColor: "#5D4037", height: "2px", marginBottom: "10px" }}></div>
          <div className="name">
            Umesh Nanaware
            <span style={{ marginTop: "5px", display: "block" }}>
              <i style={{ fontSize: "12px" }}>(Proprietor)</i>
            </span>
          </div>
          <div className="contact-buttons">
            <a className="contact-button" href="tel:+919999999999">
              <i className="fas fa-phone fa-flip-horizontal"></i>
            </a>
            <a className="contact-button" target="_blank" href="https://wa.me/919999999999?text=Hi, I found your digital card and would like to know more about your services.">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a className="contact-button" target="_blank" href="https://maps.google.com">
              <i className="fas fa-map-marker-alt fa-flip-horizontal"></i>
            </a>
            <a className="contact-button" target="_blank" href="mailto:info@smartkitchenandfurnitures.in">
              <i className="fas fa-envelope fa-flip-horizontal"></i>
            </a>
          </div>
        </div>
        <div className="lower">
          <table className="contact-action-table">
            <tbody>
              <tr>
                <td>
                  <div className="trapezoid">
                    <a target="_blank" href="tel:+919999999999" className="contact-action-container-icon">
                      <i className="fas fa-phone fa-flip-horizontal"></i>
                    </a>
                  </div>
                </td>
                <td>
                  <a target="_blank" href="tel:+919999999999" className="contact-action-container-text">+91-9999999999</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="trapezoid">
                    <a target="_blank" href="https://maps.google.com" className="contact-action-container-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                  </div>
                </td>
                <td>
                  <a target="_blank" href="https://maps.google.com" className="contact-action-container-text address-text">
                    Kolhapur, Maharashtra, India
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="trapezoid">
                    <a target="_blank" href="mailto:info@smartkitchenandfurnitures.in" className="contact-action-container-icon">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </td>
                <td>
                  <a href="mailto:info@smartkitchenandfurnitures.in" className="contact-action-container-text">info@smartkitchenandfurnitures.in</a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="trapezoid">
                    <a target="_blank" href="https://smartkitchenandfurnitures.in" className="contact-action-container-icon">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </td>
                <td>
                  <a target="_blank" href="https://smartkitchenandfurnitures.in" className="contact-action-container-text">smartkitchenandfurnitures.in</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ padding: "15px" }}>
            <div className="p-20"></div>
            <div className="shadow-buttons">
              <a className="shadow-button" style={{ display: "block" }}>
                <i className="fas fa-cloud-download-alt shadow-button-icon"></i>Save Card
              </a>
            </div>
          </div>
        </div>
        <div className="corner-bottom"></div>
      </div>

      {/* About Us Section */}
      <div className="section-container" id="about-us-section">
        <div className="corner"></div>
        <h2 className="section-header">About Us</h2>
        <div style={{ width: "20%", backgroundColor: "#5D4037", height: "2px", margin: "0 auto", marginBottom: "20px" }}></div>
        <table className="about-us-table">
          <tbody>
            <tr>
              <td className="table-row-label">
                <h3 className="table-row-label-text">Company Name</h3>
                <b className="table-row-label-separator">: </b>
              </td>
              <td className="table-row-value">Smart Kitchen & Furniture</td>
            </tr>
            <tr>
              <td className="table-row-label">
                <h3 className="table-row-label-text">Nature Of Business</h3>
                <b className="table-row-label-separator">: </b>
              </td>
              <td className="table-row-value">Custom Kitchen Trolleys, Modern Railings & On-Site Furniture Fabrication</td>
            </tr>
          </tbody>
        </table>
        <h3 className="speciality-label">Our Specialities</h3>
        <ul className="unorderedList">
          <li>Custom Kitchen Trolleys</li>
          <li>Stainless Steel & Glass Railings</li>
          <li>On-Site Fabrication & Installation</li>
          <li>Modular Kitchen Storage Solutions</li>
          <li>Premium Quality Materials</li>
          <li>Tailored Designs for Every Space</li>
          <li>Expert Craftsmanship</li>
          <li>Affordable & Transparent Pricing</li>
        </ul>
        <div className="about-us-text">
          <p><strong>Smart Kitchen & Furniture specializes in expert on-site fabrication of high-end kitchen trolleys, modern railings, and bespoke furniture pieces. We bring premium craftsmanship directly to your doorstep.</strong></p>
          <ul>
            <li><strong>EMAIL : info@smartkitchenandfurnitures.in</strong></li>
            <li><strong>CALL : +91-9999999999</strong></li>
          </ul>
        </div>
        <div className="corner-bottom"></div>
      </div>

      {/* Products Section */}
      <div className="section-container" id="products-services-section">
        <div className="corner"></div>
        <h2 className="section-header">Our Products & Services</h2>
        <div style={{ width: "20%", backgroundColor: "#5D4037", height: "2px", margin: "0 auto", marginBottom: "20px" }}></div>
        <div className="product-section-wrapper">
          {[
            {
              name: "Custom Kitchen Trolley",
              desc: "<p>Designed to maximize your kitchen's utility and style. Built on-site to fit your exact dimensions with premium granite tops.</p>",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Modern Glass Railing",
              desc: "<p>Toughened glass with stainless steel 304 fittings. Adds modern elegance and safety to your balcony or staircase.</p>",
              img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Modular Kitchen Storage",
              desc: "<p>Stainless steel baskets and pull-out systems customized for your kitchen. Maximize every inch of space.</p>",
              img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Heavy Duty Utility Cart",
              desc: "<p>Industrial-grade stainless steel carts designed for commercial and residential use.</p>",
              img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Floating Wall Unit",
              desc: "<p>Space-saving wall-mounted units for modern living rooms and halls.</p>",
              img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Stainless Steel Railing",
              desc: "<p>Durable and elegant railings crafted from premium SS 304 grade material.</p>",
              img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
          ].map((product, i) => (
            <div className="product-card card" key={i}>
              <h3 className="card-title">{product.name}</h3>
              {product.desc && <div className="product-description" dangerouslySetInnerHTML={{ __html: product.desc }} />}
              <img className="product-image" alt={product.name} src={product.img} style={{ width: "100%", marginBottom: "15px", borderRadius: "5px" }} />
              <div className="product-enquiry-section">
                <div className="product-price"></div>
                <div>
                  <a href={`https://wa.me/919999999999?text=Hi, I am interested in your product/service: ${product.name}. Please provide more details.`} target="_blank" className="product-enquiry-btn">Enquiry</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="corner-bottom"></div>
      </div>

      {/* Gallery Section */}
      <div className="section-container" id="gallery-section">
        <div className="corner"></div>
        <h2 className="section-header">Gallery</h2>
        <div style={{ width: "20%", backgroundColor: "#5D4037", height: "2px", margin: "0 auto", marginBottom: "20px" }}></div>
        <div className="images-container">
          {[
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          ].map((src, i) => (
            <div className="image-wrapper" key={i}>
              <img className="gallery-image" alt="Smart Kitchen & Furniture Gallery" src={src} style={{ width: "100%" }} />
            </div>
          ))}
        </div>
        <div className="corner-bottom"></div>
      </div>

      {/* Feedbacks Section */}
      <div className="section-container" id="feedback-section">
        <div className="corner"></div>
        <h2 className="section-header">Feedbacks</h2>
        <div style={{ width: "20%", backgroundColor: "#5D4037", height: "2px", margin: "0 auto", marginBottom: "20px" }}></div>
        <div className="feedback-list" id="feedback-list">
          {[
            { name: "Rajesh Patil", date: "March 1, 2026", rating: 5, text: "Excellent kitchen trolley work! Very professional and on-time delivery." },
            { name: "Sneha Kulkarni", date: "February 15, 2026", rating: 5, text: "Beautiful glass railing for our balcony. Highly recommended!" },
            { name: "Anil Deshmukh", date: "January 20, 2026", rating: 4, text: "Great quality modular kitchen storage. Very functional design." },
            { name: "Priya Joshi", date: "December 10, 2025", rating: 5, text: "Amazing craftsmanship! The on-site fabrication saved us so much hassle." },
          ].map((fb, i) => (
            <div className="feedback-wrapper" key={i}>
              <span className="feedback-name-wrapper">
                <span className="feedback-name">{fb.name}</span> on {fb.date}
              </span>
              <div>
                <span className={`gl-star-rating-stars s${fb.rating * 10}`}>
                  {[1, 2, 3, 4, 5].map((v) => (
                    <span key={v} data-value={v} data-text={["Terrible", "Poor", "Average", "Very Good", "Excellent"][v - 1]}></span>
                  ))}
                </span>
              </div>
              <div>{fb.text}</div>
              <hr />
            </div>
          ))}
        </div>
        <form className="feedback-form card" noValidate>
          <div className="feedback-form-heading">Give Feedback</div>
          <input type="text" name="feedbackName" id="feedbackName" placeholder="Enter Full Name" />
          <textarea name="feedback" id="feedback" placeholder="Enter your feedback"></textarea>
          <input type="button" value="Give Feedback" id="give-feedback-button" />
        </form>
        <div className="corner-bottom"></div>
      </div>

      {/* Enquiry Section */}
      <div className="section-container" id="enquiry-section">
        <div className="corner"></div>
        <h2 className="section-header">Enquiry Form</h2>
        <div style={{ width: "20%", backgroundColor: "#5D4037", height: "2px", margin: "0 auto", marginBottom: "20px" }}></div>
        <form className="enquiry-form" noValidate>
          <input type="text" name="enquiryName" id="enquiryName" placeholder="Enter Full Name" />
          <br />
          <div className="flex">
            <div className="enquiry-phoneNumber">
              <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter Phone Number" />
              <br />
            </div>
            <div className="enquiry-email">
              <input type="text" name="email" id="email" placeholder="Enter Email" />
              <br />
            </div>
          </div>
          <textarea name="message" id="message" placeholder="Enter Message"></textarea>
          <br />
          <input type="button" id="send-enquiry-button" value="Send" data-mailtosend="info@smartkitchenandfurnitures.in" />
        </form>
        <div className="corner-bottom"></div>
      </div>

      {/* Share Section */}
      <div className="section-container" id="share-section">
        <div className="corner"></div>
        <h2 className="section-header">Share</h2>
        <div style={{ width: "20%", backgroundColor: "#5D4037", height: "2px", margin: "0 auto", marginBottom: "20px" }}></div>
        <div className="p-10"></div>
        <div>
          <div className="copy-link-wrapper" id="copy-link-button">
            <div className="card-link">smartkitchenandfurnitures.in/card</div>
            <div className="copy-link-icon-button"><i className="fas fa-copy"></i></div>
          </div>
          <div className="shadow-buttons">
            <a className="shadow-button" id="share-button" data-title="Smart Kitchen & Furniture">
              <i className="fas fa-share-alt shadow-button-icon"></i>Share
            </a>
          </div>
          <div className="p-30"></div>
        </div>
        <div className="corner-bottom"></div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrapper">
        <div className="copyright-wrapper-inner">
          © 2026 <b>Smart Kitchen & Furniture</b>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="lc-footer">
        <ul className="footer-menu">
          <li><a className="footer-menu-link" href="#home-section"><i className="footer-menu-icon fas fa-home"></i><div className="footer-menu-text">HOME</div></a></li>
          <li><a className="footer-menu-link" href="#about-us-section"><i className="footer-menu-icon fas fa-briefcase"></i><div className="footer-menu-text">ABOUT US</div></a></li>
          <li><a className="footer-menu-link" href="#products-services-section"><i className="footer-menu-icon fas fa-box-open"></i><div className="footer-menu-text">PRODUCTS</div></a></li>
          <li><a className="footer-menu-link" href="#gallery-section"><i className="footer-menu-icon fas fa-file-image"></i><div className="footer-menu-text">GALLERY</div></a></li>
          <li><a className="footer-menu-link" href="#feedback-section"><i className="footer-menu-icon fas fa-star"></i><div className="footer-menu-text">FEEDBACK</div></a></li>
          <li><a className="footer-menu-link" href="#enquiry-section"><i className="footer-menu-icon fas fa-comment-alt"></i><div className="footer-menu-text">ENQUIRY</div></a></li>
          <li><a className="footer-menu-link" href="#share-section"><i className="footer-menu-icon fas fa-share"></i><div className="footer-menu-text">SHARE</div></a></li>
        </ul>
      </div>
    </>
  );
}
