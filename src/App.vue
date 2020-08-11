<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>{{title}}</h1>
    <ul>
      <li v-for='item in cartList' :key="item.id">
        <h2>{{item.title}}</h2>
        <p>{{item.price}}</p>
      </li>
    </ul>
    <MyCart :cart="cartList" :title="title"></MyCart>
  </div>
</template>

<script>
import MyCart from './components/Cart';
export default {
  name: 'App',
  data(){
    return{
      cartList:[
        {id: 1,title: "Vue实战开发",price: 188,active: true,count: 1},
        {id: 2,title: "React实战开发",price: 198,active: true,count: 2},
      ],
      title:'购物车'
    }
  },
  components: {
    MyCart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
