<template>
  <div class="users">
    <ul>
        <li v-for="user2 in users" v-bind:key="user2.id">
            {{user2}}
        </li>
    </ul>
    <ul>
          <!-- 调用父组件组件专递的引用 -->
        <li v-for="user1 in user" v-bind:key="user1.item">
            <p>{{user1.name}}</p>
            <p>{{user1.email}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Users',
    props:{
        user: {
            type:Array,
            required:true
        }
    },
    data () {
        return {
            users:["Henry","Henry1","Henry1"]
        }
    }    
}
</script>

<style scoped>
         .header{
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
    }
    li{
        flex-grow: 1;
        flex-basis: 200px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>
