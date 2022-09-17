<template>
  <div class="container-fluid padding">
    <div class="row welcome text-center">
      <div class="col-12">
        <a name="izbor">
          <h1 class="display-4">pića</h1>
        </a>
      </div>
      <hr />
    </div>
  </div>
</template>


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