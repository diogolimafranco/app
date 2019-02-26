<template>
  <b-form class="row align-items-center justify-content-center" @submit="onSubmit">
    <div class="col-xs-12 col-md-6">
      <b-card header-tag="header" footer-tag="footer">
        <h6 slot="header" class="mb-0">SIGN UP</h6>
        <b-form-group label="Informe seu nome" label-for="name" description="Seu nome">
          <b-form-input id="name" type="text" v-model="user.name" required></b-form-input>
        </b-form-group>
        <b-form-group  label="Informe seu e-mail" label-for="email" description="Seu e-mail de acesso">
          <b-form-input id="email" type="text" v-model="user.email" required></b-form-input>
        </b-form-group>
        <b-form-group  label="Informe sua senha" label-for="password" description="Sua senha de acesso">
          <b-form-input id="password" type="password" v-model="user.password" required></b-form-input>
        </b-form-group>
        <b-form-group label="Confirme sua senha" label-for="confirmPassword" description="Confirme sua senha de acesso">
          <b-form-input id="confirmPassword" type="password" v-model="user.confirmPassword" required></b-form-input>
        </b-form-group>
        <div slot="footer" class="justify-content-between d-flex">
          <b-button variant="default" to="/sign-in" >Sign In</b-button>
          <b-button type="submit" variant="primary">Sign Up</b-button>
        </div>
      </b-card>
    </div>
  </b-form>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      user: {
        name: '',
        email: '',
        password:'',
        confirmPassword: ''
      }
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault()
      axios.post('http://localhost:3000/sign-up', this.user)
        .then(res => alert('Usuário cadastrado com sucesso!'))
        .catch(err => alert(err.response.data))
    }
  }
}
</script>

<style lang="scss">

</style>
