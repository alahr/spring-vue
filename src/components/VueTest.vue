<template>
<div id='vue-test'>
  <p>{{ message }}</p>
  <button v-on:click="getFromServer">button-1</button>
  <button v-on:click="getPeoples">button-2</button>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VueTest',
  data () {
    return {
      message: 'Hello Example about Vue!'
    }
  },
  methods: {
    getFromServer () {
      const vm = this;
      axios.get('/api/person/getById',{params:{id: 2}})
        .then(function(response){
          console.log(response);
          vm.message = response.data;
        })
        .catch(function(err){
          console.log(err);
        });

    },
    getPeoples: function () {
      const vm = this;
      axios.get('/api/person/findAll',{params:{pageNum: 2, pageSize: 2}})
          .then(function(response){
              // response.data中获取ResponseData实体
              vm.message = response.data
          },function(response){
              // 发生错误
          });
    }
  }
}
</script>
