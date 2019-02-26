<template>
  <b-form class="row align-items-center justify-content-center" @submit="onSubmit">
    <div class="col-xs-12 col-md-6">
      <b-card header-tag="header" footer-tag="footer">
        <h6 slot="header" class="mb-0">FORGOT PASSWORD</h6>
        <div v-if="isForm">
          <b-alert show variant="warning">Informe seu e-mail de acesso e nós lhe enviaremos o link para recuperação da sua senha de acesso.</b-alert>
          <b-form-group id="email" label="Informe seu e-mail" label-for="email" description="Seu e-mail de acesso">
            <b-form-input id="email" type="email" v-model="user.email" required></b-form-input>
          </b-form-group>
          <div slot="footer" class="justify-content-between d-flex">
            <b-button variant="default" to="/sign-up" >Voltar ao login</b-button>
            <b-button type="submit" variant="primary">Enviar</b-button>
          </div>
        </div>
        <div v-else>
          <b-alert show variant="success">Enviamos um e-mail para <strong>{{user.email}}</strong> com o link para recuperação de sua senha de acesso!</b-alert>
          <b-button variant="link" to="/">Voltar a tela inicial</b-button>
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
      isForm: true,
      user: {
        email: ''
      }
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault()
      axios.post('http://localhost:3000/forgot-password', this.user)
        .then(res => {
          this.isForm = false
        })
        .catch(err => alert(err.response.data))
    }
  }
}
</script>

<style lang="scss">

</style>
