<template>
  <img src="../../../public/20424650.jpg" alt="">
  <div class="bg-login">
    <h1 class="mb-3">¡Welcome!</h1>
    <div class="mb-3 row">
      <label for="inputText" class="col-sm-3 col-form-label">Email</label>
      <div class="col-sm-9">
        <input type="text" class="form-control" id="inputText" v-model="login.email">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
      <div class="col-sm-9">
        <input type="password" class="form-control" id="inputPassword" v-model="login.password">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="LoginUser">Submit</button>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert"

export default {
  data(){
    return{
      login:{
        email: '',
        password: ''
      }
    }
  },
  methods:{
    async LoginUser(){
      try{
        let response = await axios.post('http://localhost:3000/api/auth/signin',this.login);
        let token = response.data.accessToken;
        //let user = response.data.user;
        localStorage.setItem('token',token);
        //localStorage.setItem('user',JSON.stringify(user));
        if(token ){
          swal("Entro","fue autorizada su cuenta","success");
          this.$router.push('/home');
        }
        console.log(response.data)
      }catch(e){
        swal("Acceso denegado","fue autorizada su cuenta","error");
        console.error(e)
      }

    }
  }
}
</script>

<style scoped>
  .bg-login{
    background-color: azure;
    height: 300px;
    padding: 30px;
    border-radius: 0px 0px 25px 25px;
  }
  img{
    width: 100%;
    border-radius: 25px 25px 0px 0px;
  }
</style>