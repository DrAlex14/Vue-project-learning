<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>{{title}}</h1>
    <!-- 展示购物车的列表 -->
    <ul>
      <li v-for='(item,index) in cartList' :key="item.id">
        <h2>{{item.title}}</h2>
        <p>{{item.price}}</p>
        <button @click='addCart(index)'>添加购物车</button>
      </li>
    </ul>
    <MyCart  :title="title"></MyCart>
  </div>
</template>

<script>
import MyCart from './components/Cart';
export default {
  name: 'App',
  data(){
    return{
      cartList:[],
      title:'购物车'
    }
  },
  methods:{
    addCart(index){
      const good = this.cartList[index];
      this.$bus.$emit('addCart',good);
    }
  },
  async created(){
    // this.$http.get('api/cartList')
    // .then(res=>{
    //   this.cartList = res.data.result;
    // }).catch(err=>{
    //   console.log(err);
    // })
    try {
      const res = await this.$http.get('/api/cartList');
      this.cartList = res.data.result;
    } catch (error) {
      console.log(error);
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
