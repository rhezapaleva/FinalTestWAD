const express = require("express");
const app = express();

// const { resolve } = require("path");
// require("dotenv").config({ path: "./.env" });

// Our cart data with the Stripe ID. This would generally be saved in a database
// We use to add data to our components and when checking out with Stripe
const USER_SHOPPING_CART = [
  {
    id: 1,
    stripePriceId: "price_1O4QwQCX4vBGwQY3lbgd4ozA", // Make in dashboard or API
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    title: "Fjallraven - Foldsack No. 1 Backpack",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday backpack.",
    color: "Navy",
    quantity: 1,
    price: 20,
  },
  
];



const stripe = require("stripe")('sk_test_51O44ptCX4vBGwQY3FDkBOMT7JywR11jiCqmt01uDpnGHZZQepjGUNuLHIPk3i7EnB47kEcv8BvhfaGh1nMNvGBOZ006240zYum');

// Data for the cart
app.get("/shopping-cart", (req, res) => {
  res.send({ cart: USER_SHOPPING_CART });
});

// Create a Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  // Make an array of just our Stripe Price ID and quantities
  const stripePriceId = req.query.stripePriceId;
  const lineItems = {
    price: stripePriceId,
    quantity: 1,
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [lineItems],
    success_url: `http://localhost:5173/payment-success`,
    cancel_url: `http://localhost:5173/payment-failed`,
  });
  return res.send({ url: session.url });
});

app.listen(4242, () => console.log(`Node server listening on port ${4242}!`));
