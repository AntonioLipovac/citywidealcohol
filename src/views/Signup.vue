<template>
  <div class="about">
    <h2 class>Registracija</h2>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                v-model="email"
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
            <div class="form-group">
              <label for="text">Ime</label>
              <input
                type="text"
                class="form-control"
                placeholder="Unesite vaše ime"
                v-model="ime"
              />
            </div>
            <div class="form-group">
              <label for="text">Prezime</label>
              <input
                type="text"
                class="form-control"
                placeholder="Unesite prezime"
                v-model="prezime"
              />
            </div>
            <div class="form-group">
              <label for="number">Godine</label>
              <input
                type="number"
                class="form-control"
                placeholder="Unesite koliko imate godina"
                v-model="godine"
              />
            </div>
            <button
              type="button"
              onsubmit="return false"
              @click="Signup"
              class="btn btn-primary btn-block"
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
      email: "",
      password: "",
      repeatpassword: "",
      ime: "",
      prezime: "",
      godine: "", 
    };
  },
  methods: {
    Signup() {
      if (this.password==this.repeatpassword) {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            if(user){
                  this.$router.replace({name:'Home'})
            }

            return user;
        })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } else {
        this.password = '';
        this.repeatpassword = '';
        console.log('n');
      }
    },
  },
};
</script>