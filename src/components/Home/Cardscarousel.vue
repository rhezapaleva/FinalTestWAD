<template>
  <section class="pt-5 pb-5">
    <div class="outerdiv container-fluid px-4">
      <div class="row">
        <div class="col-6">
          <h2 class="mb-5">Popular Services</h2>
        </div>
        <div class="cardscarousel col-6 text-end">
          <button
            class="carousel-control-prev mx-1"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="col-12 pb-3">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide px-2"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_1.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Photography</h4>
                        <p class="card-text">Get the shots you desire!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_2.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Make-up</h4>
                        <p class="card-text">Look your best!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_3.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Manicure</h4>
                        <p class="card-text">Transform your fingertips!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_4.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Massage</h4>
                        <p class="card-text">Relax and unwind!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_5.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Hairdressing</h4>
                        <p class="card-text">Redefine your style!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_6.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Plumbing</h4>
                        <p class="card-text">Get your pipes fixed!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_7.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Electricians</h4>
                        <p class="card-text">Light it up!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_8.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Accessories and crafts</h4>
                        <p class="card-text">Elevate your look!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="cardwrapper card">
                      <img
                        class="img-fluid"
                        alt="100%x280"
                        src="../../assets/images/TeckXuan/photo_9.jpg"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Bakes</h4>
                        <p class="card-text">Satisfy your cravings!</p>
                        <a href="#" class="btn">See details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cardscarousel",
};
</script>

<style scoped>
.cardscarousel .carousel-control-prev,
.cardscarousel .carousel-control-next {
  position: relative;
  background-color: #194759;
  border-radius: 20px;
  opacity: 1;
  width: 10%;
  display: inline-flex;
  justify-content: center;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 100%;
}

#carouselExampleAutoplaying {
  text-align: center;
  width: 100%;
}

.cardwrapper > img {
  max-height: 768px;
  transition: transform 0.3s ease-in-out;
}

.cardwrapper:hover > img {
  transform: scale(1.05); /* Scale the image slightly when hovering */
}

.carousel-item {
  transition: transform 0.3s ease-in-out; /* Add a transition */
}

.carousel-item:hover {
  transform: scale(1.01); /* Scale the image slightly when hovering */
}
</style>
