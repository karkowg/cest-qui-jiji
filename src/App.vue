<template>
  <div id="app">
    <h1>
      c'est qu<span class="dot i amarelo">i</span>&nbsp;<span
        class="dot j vermelho"
        >j</span
      ><span class="dot i azul">i</span><span class="dot j verde">j</span
      ><span class="dot i roxo">i</span>?
    </h1>
    <div v-if="isLoading" class="box">Loading ...</div>
    <div v-else>
      <listing v-for="(ad, idx) in ads" :key="`ad-${idx}`" :ad="ad"></listing>
    </div>
    <footer>{ "dev": "karkowg" }</footer>
  </div>
</template>

<script>
import Listing from "./components/Listing";
import { fetchListings } from "./api";

export default {
  name: "App",
  components: {
    Listing
  },
  data: () => ({
    ads: [],
    isLoading: true
  }),
  created() {
    fetchListings()
      .then(r => r.json())
      .then(ads => {
        this.ads = ads;
        this.isLoading = false;
      })
      .catch(err => {
        console.error(err);
        this.isLoading = false;
      });
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #1d1d1d;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next",
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 20px;
}
.dot {
  position: relative;
}
.amarelo {
  color: #f8aa17;
}
.azul {
  color: #2681db;
}
.roxo {
  color: #9b44ad;
}
.verde {
  color: #37a864;
}
.vermelho {
  color: #f1454f;
}
.dot.i:before {
  content: "ı";
}
.dot.j:before {
  content: "ȷ";
}
.dot:before {
  position: absolute;
  color: #fff;
}
.box {
  border: 1px solid #2a2425;
  border-radius: 4px;
  background-color: #24282a;
  padding: 16px;
  margin-bottom: 16px;
}
a {
  color: #0062ff;
  text-decoration: none;
  transition: all 0.2s ease;
}
a:hover {
  cursor: pointer;
  color: #1f1;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
}
h1 {
  font-size: 37.009px;
  line-height: 1.3;
}
p {
  font-size: 16px;
  margin: 8px 0;
}
@media (max-width: 768px) {
  h1 {
    font-size: 33.311px;
  }
  h5 {
    font-size: 20.43px;
  }
}
footer {
  font-size: 0.8em;
  font-family: monaco, Consolas, Lucida Console, monospace;
  opacity: 0.2;
  padding: 20px;
}
</style>
