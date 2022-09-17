<template>
  <div class="about">
    <h1>This is an signup page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                v-model="username"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Unesite email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >Nikada nećemo dijeliti Vaš email.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Unesite lozinku "
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Ponovite lozinku</label>
              <input
                type="password"
                v-model="repeatpassword"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Ponovite lozinku"
              />
            </div>
            <button
              type="button"
              onsubmit="return false"
              @click="Signup"
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { auth, createUserWithEmailAndPassword } from "@/firebase";
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      repeatpassword: "",
    };
  },
  methods: {
    Signup() {
      if (this.password == this.repeatpassword) {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            alert("Registrirani ste!");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      } else {
        this.password = "";
        this.repeatpassword = "";
        console.log("n");
      }
    },
  },
};
</script>
