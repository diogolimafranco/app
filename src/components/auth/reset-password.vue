<template>
  <b-form class="row align-items-center justify-content-center" @submit="onSubmit">
    <div class="col-xs-12 col-md-6">
      <b-card header-tag="header" footer-tag="footer">
        <h6 slot="header" class="mb-0">RESET PASSWORD</h6>
        <b-alert show variant="warning">Informe sua nova senha de acesso.</b-alert>
        <b-form-group  label="Informe sua senha" label-for="password" description="Sua senha de acesso">
          <b-form-input id="password" type="password" v-model="user.password" required></b-form-input>
        </b-form-group>
        <b-form-group label="Confirme sua senha" label-for="confirmPassword" description="Confirme sua senha de acesso">
          <b-form-input id="confirmPassword" type="password" v-model="user.confirmPassword" required></b-form-input>
        </b-form-group>
        <div slot="footer" class="justify-content-end d-flex">
          <b-button type="submit" variant="primary">Salvar nova senha</b-button>
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
        password: '',
        confirmPassword: '',
        token: ''
      }
    }
  },
  mounted(){
    this.user.token = this.$route.query.q
  },
  methods: {
    onSubmit(e){
      e.preventDefault()
      axios.post('http://localhost:3000/reset-password', this.user)
        .then(res => {
          this.$router.push('/sign-in')
        })
        .catch(err => alert(err.response.data))
    }
  }
}
</script>

<style lang="scss">

</style>
