<template>
  <div class="container-fluid no-gutters">
    <header class="col">
      Header
    </header>
    <main class="col">
      <aside>Menu</aside>
      <article>
        Content
      </article>
    </main>
    <footer class="col">
      Footer
    </footer>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="scss">
  .container-fluid {
    display: flex;
    flex-direction: column;
    background-color: coral;
    height: 100%;
    padding: 0;
  }
  header {
    background-color:blue;
    height: 50px;
    max-height: 50px;
  }

  main {
    background-color:greenyellow;
    display: flex;
    
    aside {
      background-color: aquamarine;
      flex: 1;
      max-width: 250px;
      padding: 0 15px;
    }

    article {
      background-color: green;
      flex: 1;
      padding: 0 15px;
    }
  }

  footer {
    background-color:blueviolet;
    height: 50px;
    max-height: 50px;
  }

  main h1 {
    background: red;
    width: 500px;
    display: block;
    align-self: center;
  }
</style>

