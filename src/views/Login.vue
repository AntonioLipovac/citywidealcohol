<template>
  <div class="about">
    <h2 class>Prijava</h2>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="InputEmail1">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="InputEmail1"
                aria-describeby="emailHelp"
                placeholder="Unesite email"
              />
            </div>
            <div class="form-group">
              <label for="InputPassword1">Lozinka</label>
              <input
                type="password"
                class="form-control"
                id="InputPassword1"
                placeholder="Password"
                v-model="lozinka"
              />
            </div>
            <button
              type="button"
              @click="prijava"
              class="btn btn-primary btn-block"
            >
              Submit
            </button>
            <div class="form-footer">
              <p>Ako još uvijek nemate račun <a href="Signup">registrirajte se.</a></p>
            </div>
          </form>
  </div>
  <div class="col"></div>
</div>
</div>
</div>
</template>


<script>
import { auth, signInWithEmailAndPassword } from "@/firebase";
export default {
  name: "prijava",
  data() {
    return {
      email: "",
      lozinka: "",
    };
  },
  methods: {
    prijava() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
            if(user){
                  this.$router.replace({name:'Prijavljen'})
            }

            return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
  },
};
</script>
