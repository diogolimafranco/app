<template>
    <div class="container-fluid">
        <header class="col">
            <h1>{{sysName}}</h1>
        </header>
        <main class="col">
            <router-view></router-view>
        </main>
        <footer class="col">
            <span>Desenvolvido por: <a href="https://websocorro.com.br" target="_blank">WebSocorro Marketing Hoteleiro</a></span>
        </footer>
    </div>
    <!--
    <main class="container d-flex">
        <router-view></router-view>
    </main>-->
</template>

<script>
import {sysName} from '@/config'
export default {
    name: "AuthView",
    data(){
        return {
            sysName: ''
        }
    },
    created(){
        this.sysName = sysName
    }
}
</script>

<style lang="scss" scoped>
  .container-fluid {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  header {
    height: 50px;
    max-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 1.2rem;
        justify-self: center;
        margin: 0;
        color: #ccc;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  footer {
    height: 50px;
    max-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #ebebeb;

    span {
        align-self: center;
    }
  }
</style>
