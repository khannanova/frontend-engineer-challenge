<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #f9fafb;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
}
</style>
