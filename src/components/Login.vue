<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Username</label>
      <input v-model="email" id="inputEmail" class="form-control" placeholder="User name" required autofocus>
      <p></p>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <p></p>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.email)
      console.log(this.password)
      const postData = {
        Username: this.email,
        Password: this.password
      }
        var navigate = this.$router;
      this.axios.post('http://localhost:8080/register',postData,
        {headers : {
        'Content-Type' : 'application/json'
        }}
        )
        .then(function (repsonse){
            if(repsonse.data=='login successful'){
                navigate.push("/welcome")
            }
        })
        // this.$http.post('/register', {user: this.email, password: this.password})
        // .then(request =>this.loginSuccessful(request))
        // .catch(()=> this.loginFailed())
    },
    loginSuccessful(req){
        if(req==null){
            console.log("success")
        }
    },
    loginFailed(){
        console.log("failed")
    }
  }
}
</script>

<style>

</style>