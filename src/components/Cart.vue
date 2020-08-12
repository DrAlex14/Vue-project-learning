<template>
    <div>
    <h2>{{title}}</h2>
    <table border="1">
        <tr>
            <th>#</th>
            <th>课程</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
        </tr>
        <tr v-for="(c,index) in cart" :key="c.id">
            <td>
                <input type="checkbox" v-model="c.active">
            </td>
            <td>{{c.title}}</td>
            <td>{{c.price}}</td>
            <td>
                <button @click = 'substract(index)'>-</button>
                {{c.count}}
                <button @click = 'add(index)'>+</button>
            </td>
            <td>￥{{c.count * c.price}}</td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">{{activeCount}}/{{count}}</td>
            <td colspan="2">￥{{total}}</td>
        </tr>
    </table>
    </div>
    
</template>

<script>
export default {
    name:"cart",
    props:['title'],
    data(){
        return{
            cart:JSON.parse(localStorage.getItem('cart')) || []
        }
    },
    watch:{
        cart:{
            handler(newVal,oldVal){
                this.setLocalData(newVal);
                console.log(oldVal);
            },
            deep:true
        }
    },
    created(){
        this.$bus.$on('addCart',good=>{
            const ret = this.cart.find(v=>v.id === good.id);
            if(!ret){ //购物车没有数据
                this.cart.push(good);
            }else{
                ret.count ++;
            }
        })
    },
    methods:{
        setLocalData(newVal){
            localStorage.setItem('cart',JSON.stringify(newVal));
        },
        remove(index){
            if(window.confirm('确定是否要删除？')){
                this.cart.splice(index,1);//从索引开始删一条数据
            }
        },
        substract(index){
            let count = this.cart[index].count;
            count > 1 ? this.cart[index].count -- : this.remove(index);
        },
        add(index){
            this.cart[index].count++;
        }
    },
    computed:{
        count(){
            return this.cart.length
        },
        activeCount(){
            return this.cart.filter(v=>v.active).length
        },
        total(){
            //forEach方法
            // let sum = 0;
            // this.cart.forEach(element => {
            //     if(element.active){
            //         sum += element.price * element.count;
            //     }
            // });
            // return sum;

            //reduce方法
            return this.cart.reduce((sum,element)=>{
                if(element.active){
                    sum += element.price * element.count;
                }
                return sum;
            },0);
        }
    }
}
</script>

<style scoped>

</style>