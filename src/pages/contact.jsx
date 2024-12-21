import React from "react";
import { Typography, Button, Box, Grid, Card, CardContent, CardMedia } from "@mui/material";
import "./contact.css"; // Make sure you have a separate CSS file to style this page

const Contact = () => {
  return (
    <div className="contact-page">
      <Typography variant="h2" className="page-title">
        Pre-Built PCs
      </Typography>

      {/* Intel Section */}
      <section className="category-section">
        <Typography variant="h4" className="category-title" color="white">
          Intel PCs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Intel Pre-Build"
                height="200"
                image="elgato.png"
              />
              <CardContent>
                <Typography variant="h6">Intel Core i7 PC</Typography>
                <Typography variant="body2" color="textSecondary">
                  Powerful Intel Core i7 processor with high-end GPU and RAM. Ideal for gaming and productivity.
                </Typography>
                <Button variant="contained" color="primary" className="buy-button">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Intel Pre-Build"
                height="200"
                image="https://via.placeholder.com/500x300?text=Intel+PC"
              />
              <CardContent>
                <Typography variant="h6">Intel Core i9 PC</Typography>
                <Typography variant="body2" color="textSecondary">
                  Extreme performance with Intel Core i9 for gaming, streaming, and intensive tasks.
                </Typography>
                <Button variant="contained" color="primary" className="buy-button">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>

      {/* ROG Section */}
      <section className="category-section">
        <Typography variant="h4" className="category-title" color="white">
          ROG (Republic of Gamers) PCs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="ROG Pre-Build"
                height="200"
                image="https://via.placeholder.com/500x300?text=ROG+PC"
              />
              <CardContent>
                <Typography variant="h6">ROG Gaming PC</Typography>
                <Typography variant="body2" color="textSecondary">
                  Designed for gamers with high-end components, RGB lighting, and maximum performance.
                </Typography>
                <Button variant="contained" color="primary" className="buy-button">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="ROG Pre-Build"
                height="200"
                image="https://via.placeholder.com/500x300?text=ROG+PC"
              />
              <CardContent>
                <Typography variant="h6">ROG Strix PC</Typography>
                <Typography variant="body2" color="textSecondary" >
                  Perfect balance of power and design, perfect for competitive gamers.
                </Typography>
                <Button variant="contained" color="primary" className="buy-button">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>

      {/* AMD Ryzen Section */}
      <section className="category-section">
        <Typography variant="h4" className="category-title" color="white">
          AMD Ryzen PCs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="AMD Ryzen Pre-Build"
                height="200"
                image="https://via.placeholder.com/500x300?text=AMD+Ryzen+PC"
              />
              <CardContent>
                <Typography variant="h6">AMD Ryzen 7 PC</Typography>
                <Typography variant="body2" color="textSecondary">
                  AMD Ryzen 7 delivers excellent multitasking and gaming capabilities at a great price.
                </Typography>
                <Button variant="contained" color="primary" className="buy-button">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="AMD Ryzen Pre-Build"
                height="200"
                image="https://via.placeholder.com/500x300?text=AMD+Ryzen+PC"
              />
              <CardContent>
                <Typography variant="h6">AMD Ryzen 9 PC</Typography>
                <Typography variant="body2" color="textSecondary">
                  High-end Ryzen 9 PC with multi-core processing power perfect for gaming and workstations.
                </Typography>
                <Button variant="contained" color="primary" className="buy-button">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Contact;
