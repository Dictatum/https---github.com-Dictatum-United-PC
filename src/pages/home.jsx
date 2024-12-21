import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import './home.css'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Navigate to About (System Builder) page
  const navigateToSystemBuilder = () => {
    navigate('/about'); // Navigate to the About page (System Builder)
  };

  // Navigate to Intel Section within the current page
  const navigateToIntelSection = () => {
    window.scrollTo({
      top: document.getElementById('intel-section').offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <Typography variant="h2" className="hero-title">
          We Know What You <span>Need</span>
        </Typography>
        <Typography variant="body1" className="hero-description">
          Experience a new level of performance with an award-winning Digital Storm PC. Built with the latest technology, highest quality components, and backed by lifetime support.
        </Typography>
        <Box className="hero-buttons">
          <Button 
            variant="contained" 
            color="primary" 
            className="hero-button" 
            onClick={navigateToSystemBuilder} // Navigate to System Builder page
          >
            Create Now
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            className="hero-button" 
            onClick={navigateToIntelSection} // Navigate to Intel Section within the page
          >
            Learn More
          </Button>
        </Box>
      </header>

      {/* Product Cards */}
      <section className="products">
        <div className="product-card">
          <h2>Ryzen</h2>
          <p>Build your Ryzen PC</p>
          <img src="ryzen.png" alt="Ryzen PC" />
          <Button 
            onClick={navigateToSystemBuilder} 
            variant="contained" 
            color="primary" 
            className="product-button"
          >
            Start Building
          </Button>
        </div>
        <div className="product-card">
          <h2>Intel</h2>
          <p>Build your Intel PC</p>
          <img src="intel.png" alt="Intel PC" />
          <Button 
            onClick={navigateToSystemBuilder} 
            variant="contained" 
            color="primary" 
            className="product-button"
          >
            Start Building
          </Button>
        </div>
        <div className="product-card">
          <h2>ASUS</h2>
          <p>Build your ASUS PC</p>
          <img src="rog.png" alt="ASUS PC" />
          <Button 
            onClick={navigateToSystemBuilder} 
            variant="contained" 
            color="primary" 
            className="product-button"
          >
            Start Building
          </Button>
        </div>
      </section>

      {/* FPS Promo Section */}
      <section className="promo">
        <div className="promo-content">
          <img src="horus.png" alt="FPS Promo" />
          <div>
            <Typography variant="h4" color="secondary" className="promo-title">
              Higher FPS in More Games for Fewer $$$
            </Typography>
            <Typography variant="body1" className="promo-description">
              For FPS games, a better PC enhances performance, delivering smoother gameplay and faster response times. Key components like a strong GPU, fast CPU, and enough RAM help achieve higher frame rates, reduce input lag, and improve graphics.
            </Typography>
            <Button variant="outlined" color="secondary" className="promo-button">Learn More</Button>
          </div>
        </div>
      </section>

      {/* System Builder Sections (Intel, ROG, AMD) */}
      <section className="home-container">
        <div id="intel-section" className="intel-section">
          <div className="intel-header">
            <img 
              src="ntel.png" 
              alt="Intel Logo" 
              className="intel-logo"
            />
            <h2>Build <span className="highlight">Intel Core</span></h2>
          </div>
          <div className="intel-content">
            <img 
              src="ntel.png" 
              alt="Intel Processors" 
              className="intel-cpus"
            />
            <div className="intel-info">
              <h3 className="why-intel">Why <span className="highlight">Intel?</span></h3>
              <p>
                The Intel brand is popular because it delivers strong single-core performance, which benefits gaming and tasks that prioritize speed per core. Intel processors also tend to have excellent power efficiency, making them ideal for laptops and desktops with strict thermal requirements. Intel's consistent innovations, like advanced integrated graphics and Thunderbolt support, add extra features for connectivity and media tasks. Additionally, Intel's extensive ecosystem and compatibility make it a reliable choice across many types of devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROG Section */}
      <div className="home-container">
        <div className="rog-section">
          <div className="rog-header">
            <img 
              src="reg.png" 
              alt="ROG Logo" 
              className="rog-logo"
            />
            <h2>Why Choose <span className="highlight">ROG for Gaming PCs?</span></h2>
          </div>
          <div className="rog-content">
            <img 
              src="reg.png" 
              alt="ROG Gaming Products" 
              className="rog-products"
            />
            <div className="rog-info">
              <h3 className="why-rog">Why <span className="highlight">ROG?</span></h3>
              <p>
                Republic of Gamers (ROG) is a premium brand from ASUS, renowned for creating high-performance gaming PCs and accessories. With a focus on innovation, ROG provides cutting-edge technology such as powerful processors, high-refresh-rate displays, and superior cooling systems. These features are optimized for gaming performance, ensuring smooth gameplay even during the most intense moments. ROG products also boast unique designs, RGB customization, and durability, making them a top choice for gamers who want both style and substance. Whether you're a competitive gamer or an enthusiast, ROG delivers the reliability and performance needed to excel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AMD Ryzen Section */}
      <div className="amd-ryzen-section">
        <div className="amd-ryzen-header">
          <img 
            src="asdw.png" 
            alt="AMD Ryzen Logo" 
            className="amd-logo"
          />
          <h2>Why Choose <span className="highlight">AMD Ryzen</span> for Gaming PCs?</h2>
        </div>
        <div className="amd-ryzen-content">
          <img 
            src="asdw.png" 
            alt="AMD Ryzen Processors" 
            className="amd-ryzen-processors"
          />
          <div className="amd-ryzen-info">
            <h3 className="why-amd-ryzen">Why <span className="highlight">AMD Ryzen?</span></h3>
            <p>
              AMD Ryzen processors are known for their outstanding multi-core performance, making them ideal for gaming, content creation, and multitasking. AMD's Ryzen chips offer excellent value, often providing more cores and threads at a competitive price compared to other brands. With Ryzen's latest architectures, users enjoy better power efficiency, faster memory speeds, and support for the latest technologies like PCIe 4.0. AMD's superior multi-threading capabilities are especially beneficial in modern games and applications that can take full advantage of additional cores. Ryzen's combination of performance and affordability has made it the go-to choice for gamers and enthusiasts seeking top-tier performance without breaking the bank.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
