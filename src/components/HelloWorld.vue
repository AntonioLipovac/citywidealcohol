<template>
  <div class="hello">
    <section class="image">
      <div
        class="image__bg"
        style="
          background-image: url('https://lh3.googleusercontent.com/pw/AL9nZEUBLzWz2AS7d2BlFaL59MXAFfJXw4gXA-4VFVr9HB-tWpx7j_k4UkJEIl00PAKUUVsenCxJuVUHvKGew6oKWjx20u5ZBzaYTWbQqGrOzmzoH2RX4zl0KGqrF8Yh0BuYk75pO8Z5YgIzNrx6tF555Do=w1093-h428-no?authuser=0');
        "
      ></div>
    </section>
    <hr />
    <div class="row welcome text-center">
      <div class="col-12">
        <a name="onama">
          <h1 class="display-4">Širok izbor pića</h1>
        </a>
        <hr />
        <div class="col-12">
          <p class="lead">Ponuda pića koju nudimo ove sezone</p>
        </div>
      </div>
    </div>
    <div class="container-fluid padding">
      <div class="row text-center padding">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <img src="@/assets/pivo.png" width="200px" height="=200px" />
          <div class="form-footer">
              <p><a href="Pivo">Pivo</a></p>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <img src="@/assets/vino.png" width="200px" height="=200px" />
          <div class="form-footer">
              <p><a href="Vino">Vino</a></p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <img src="@/assets/zestica.png" width="200px" height="=200px" />
          <div class="form-footer">
              <p><a href="Jaka alkoholna pića">Jaka alkoholna pića</a></p>
            </div>
        </div>
      </div>
      <hr class="my-4" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 30px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 20px;
}
a {
  color: #213850;
}

.image {
  position: relative;

  height: 70vh;
  width: 100%;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    height: 100%;
    width: 100%;

    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
}
</style>
