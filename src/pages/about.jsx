import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { Button } from "@mui/material"; // Material UI Button for the Buy button
import "./About.css"; // Add your CSS for styling

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("intel"); // Default category is Intel
  const [pcParts, setPcParts] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
    motherboard: ""
  });

  const navigate = useNavigate(); // For navigation to Home or other pages

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Reset the parts when category is changed
    setPcParts({
      cpu: "",
      gpu: "",
      ram: "",
      storage: "",
      motherboard: ""
    });
  };

  // Function to handle part selection
  const handlePartSelect = (part, value) => {
    setPcParts((prev) => ({
      ...prev,
      [part]: value
    }));
  };

  // Function to handle Buy button click
  const handleBuyClick = () => {
    alert("Proceeding to checkout..."); // You can replace this with actual checkout logic
  };

  return (
    <div className="about-page">
      <h1>About PC Builder</h1>
      <p>Welcome to our custom PC builder. Customize your PC by selecting different components for your ideal setup.</p>

      {/* Navigation Buttons */}
      <nav className="category-nav">
        <Button
          variant={selectedCategory === "intel" ? "contained" : "outlined"}
          onClick={() => handleCategoryChange("intel")}
        >
          Intel
        </Button>
        <Button
          variant={selectedCategory === "rog" ? "contained" : "outlined"}
          onClick={() => handleCategoryChange("rog")}
        >
          ROG
        </Button>
        <Button
          variant={selectedCategory === "amd" ? "contained" : "outlined"}
          onClick={() => handleCategoryChange("amd")}
        >
          AMD Ryzen
        </Button>
      </nav>

      {/* PC Parts Selection */}
      <div className="pc-parts">
        <h2>Customize Your {selectedCategory.toUpperCase()} PC Build</h2>

        <div className="part">
          <label>CPU: </label>
          <select
            onChange={(e) => handlePartSelect("cpu", e.target.value)}
            value={pcParts.cpu}
          >
            <option value="">Select CPU</option>
            {selectedCategory === "intel" && (
              <>
                <option value="Intel Core i9">Intel Core i9</option>
                <option value="Intel Core i7">Intel Core i7</option>
                <option value="Intel Core i5">Intel Core i5</option>
              </>
            )}
            {selectedCategory === "rog" && (
              <>
                <option value="Intel Core i9">Intel Core i9</option>
                <option value="Intel Core i7">Intel Core i7</option>
              </>
            )}
            {selectedCategory === "amd" && (
              <>
                <option value="AMD Ryzen 9">AMD Ryzen 9</option>
                <option value="AMD Ryzen 7">AMD Ryzen 7</option>
                <option value="AMD Ryzen 5">AMD Ryzen 5</option>
              </>
            )}
          </select>
        </div>

        <div className="part">
          <label>GPU: </label>
          <select
            onChange={(e) => handlePartSelect("gpu", e.target.value)}
            value={pcParts.gpu}
          >
            <option value="">Select GPU</option>
            <option value="NVIDIA RTX 3080">NVIDIA RTX 3080</option>
            <option value="NVIDIA RTX 3070">NVIDIA RTX 3070</option>
            <option value="AMD Radeon RX 6900 XT">AMD Radeon RX 6900 XT</option>
          </select>
        </div>

        <div className="part">
          <label>RAM: </label>
          <select
            onChange={(e) => handlePartSelect("ram", e.target.value)}
            value={pcParts.ram}
          >
            <option value="">Select RAM</option>
            <option value="16GB DDR4">16GB DDR4</option>
            <option value="32GB DDR4">32GB DDR4</option>
            <option value="64GB DDR4">64GB DDR4</option>
          </select>
        </div>

        <div className="part">
          <label>Storage: </label>
          <select
            onChange={(e) => handlePartSelect("storage", e.target.value)}
            value={pcParts.storage}
          >
            <option value="">Select Storage</option>
            <option value="1TB SSD">1TB SSD</option>
            <option value="2TB SSD">2TB SSD</option>
            <option value="500GB HDD">500GB HDD</option>
          </select>
        </div>

        <div className="part">
          <label>Motherboard: </label>
          <select
            onChange={(e) => handlePartSelect("motherboard", e.target.value)}
            value={pcParts.motherboard}
          >
            <option value="">Select Motherboard</option>
            <option value="ASUS Z590">ASUS Z590</option>
            <option value="MSI MAG B550">MSI MAG B550</option>
            <option value="Gigabyte B550">Gigabyte B550</option>
          </select>
        </div>

        {/* Display Selected Parts */}
        <div className="selected-parts">
          <h3>Selected Parts:</h3>
          <ul>
            {Object.entries(pcParts).map(([key, value]) => (
              value ? <li key={key}>{`${key}: ${value}`}</li> : null
            ))}
          </ul>
        </div>

        {/* Buy Button */}
        <Button variant="contained" color="primary" onClick={handleBuyClick}>
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default About;
