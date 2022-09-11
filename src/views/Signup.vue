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
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Unesite email"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Lozinka</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Unesite lozinku "
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Ponovite lozinku</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Ponovite lozinku"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Ime</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Unesite ime"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Prezime</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Unesite prezime"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Grad</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Unesite grad"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Adresa</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Unesite adresu"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </div>
  </template>