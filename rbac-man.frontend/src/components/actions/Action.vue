<style>
  codemirror {
    display: block;
  }
</style>

<template>
  <div id="action" class="container">
  <div class="panel-heading">
  <h3>{{template.name}}</h3>
  </div>
      <div class="panel-body">
	
        <table class="table table-striped">
           <tr>
            <td>ID</td>
            <td><input class="form-control" placeholder="Id" v-model="action.id" type="text"></input></td>
          </tr>
          <tr>
            <td>Name</td>
            <td><input class="form-control" placeholder="Name" v-model="action.name" type="text"></input></td>
          </tr>                 
        </table>
        <button class="btn btn-primary" v-on:click="editAction">Save</button>
        
      </div>   
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)
  var endpoint = 'http://localhost:8090/RbacMan/'
  module.exports = {
    el () { return '#action' },
    data () {
      return {
        action: {}
      }
    },
    ready: function () {
      this.$http.get(endpoint + 'actions/' + this.$route.params.id).then((response) => {
        this.$set('action', response.data)
      }, (response) => {
      })
    },
    methods: {
      editAction: function () {
        this.$http.put(endpoint + 'actions/' + this.action.id, this.action).then((response) => {
          console.log('SUCCESS')
        })
      }
    }
  }
</script>
