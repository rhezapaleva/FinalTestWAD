<script>
export default {
  props: {
    calendlyurl: String,
  },
  mounted() {
  setTimeout(() => {
    Calendly.initInlineWidget({
      url: this.calendlyurl + '/event-with-myself',
      parentElement: document.getElementById("calendar"),
    });
    console.log("Component is mounted and Calendly widget is initialized");
    
  }, 1000); // Adjust the delay as needed
}
};
</script>

<template>
  <h2 class="calender-heading text-center">Schedule an Appointment</h2>
  <div class="m-4" style="background-color: #4f7369; border-radius: 20px;">
    

    <div id="calendar" style="min-width: 320px; height: 910px; padding: 10px;"></div>
  <!-- <CalendlyVue url="dominicj-2022" @event="logEvent" @event-details="logEvent" @error="logEvent"></CalendlyVue> -->
  </div>

  <!-- <div class="m-4" style="background-color: #4f7369; border-radius: 20px; position: relative;">
    <h2 class="calender-heading text-center" style="position: sticky; top: 0; background-color: #4f7369; z-index: 1;">Schedule an Appointment</h2>

    <div id="calendar" style="min-width: 320px; height: 890px; overflow-y: auto;">
       
    </div>
</div> -->


</template>

<style scoped>
/* style="min-width:320px;height:580px;" */
/* h2 {
  text-align: center;
  margin-top: 20px;
}
.scheduling {
  padding: 20px;
}

.scheduling div {
  margin: 10px 0;
} */
/* 
.scheduling button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
} */

.calender-heading {
  margin-top: 98px;

}
</style>
