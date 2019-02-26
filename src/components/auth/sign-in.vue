<template>
  <b-form class="row align-items-center justify-content-center" @submit.prevent="onSubmit">
    <div class="col-xs-12 col-md-6">
      <b-card header-tag="header" footer-tag="footer">
        <h6 slot="header" class="mb-0">SIGN IN</h6>
        <b-form-group id="email" label="Informe seu e-mail" label-for="email" description="Seu e-mail de acesso">
          <b-form-input id="email" type="email" v-model="auth.email" required></b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Informe seu e-mail" label-for="password" description="Sua senha de acesso">
          <b-form-input id="password" type="password" v-model="auth.password" required></b-form-input>
        </b-form-group>
        <div slot="footer" class="justify-content-between d-flex">
          <b-button variant="default" to="/sign-up" >Sign up</b-button>
          <b-button type="submit" variant="primary">Sign in</b-button>
        </div>
      </b-card>
      <div class="text-center">
        <b-button variant="link" to="/forgot-password">Esqueceu a senha?</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { userKey } from '@/config'

export default {
  name: 'SignIn',
  data(){
    return {
      auth: {}
    }
  },
  computed:mapState(['user']),
  methods: {
    onSubmit(){
      axios.post('http://localhost:3000/sign-in', this.auth)
        .then(res => {
          localStorage.setItem(userKey, JSON.stringify(res.data))
          this.$store.commit('setUserLogged', res.data)
          this.$router.push('/')
        })
        .catch(err => alert(err.response.data))
    }
  }
}
</script>

<style lang="scss">

</style>
