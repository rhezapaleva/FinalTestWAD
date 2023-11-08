<script>

// }
export default {
  data() {
    return {
      tab: 0,
    };
  },
  methods: {
     async redirectToStripe(product) {

      console.log(product)
      const queryParams = new URLSearchParams();
  queryParams.append("stripePriceId", product.stripePriceId);

  const url = `/api/create-checkout-session?${queryParams.toString()}`;

const response = await fetch(url, {
  method: "POST",
  // headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(product), // Pass the product object directly
});
const { url:stripeUrl } = await response.json();

window.location.href = stripeUrl;
}

  },
  props:{
    productArray: Array
  }
};
</script>
<template>
  <v-card class="payment-tab m-4">
    <v-tabs v-model="tab" bg-color="#4F7369">
      <v-tab :value="index" v-for="(product, index) in productArray">
        {{ product.product_name }}
        <span class="price-label">${{ product.pricing }}</span>
      </v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item :value="index" v-for="(product, index) in productArray">
          {{ product.product_description }}<br>
          <span class="price">Price: $ {{ product.pricing }}</span>
          <v-btn @click="redirectToStripe(product)" color="#194759" class="m-3">Pay Now!</v-btn>
        </v-window-item>
      </v-window>
    </v-card-text>
    
  </v-card>
</template>

<style>
.payment-tab {
  margin-top: 63px;
}

.price-label {
  font-weight: bold;
  color: white; /* Change the color to your preference */
  margin-left: 8px;
}

.price {
  font-size: 1.2em; /* Increase font size as needed */
  font-weight: bold;
  color: #333; /* Change the color to your preference */
}
</style>