<style>
  codemirror {
    display: block;
  }
</style>

<template>
  <div id="resource" class="container">
  <div class="panel-heading">
  <h3>{{template.name}}</h3>
  </div>
      <div class="panel-body">
	
        <table class="table table-striped">
           <tr>
            <td>ID</td>
            <td><input class="form-control" placeholder="Id" v-model="resource.id" type="text"></input></td>
          </tr>
          <tr>
            <td>Name</td>
            <td><input class="form-control" placeholder="Name" v-model="resource.name" type="text"></input></td>
          </tr>
          <tr>
            <td>URL</td>
            <td><input class="form-control" placeholder="URL" v-model="resource.url" type="text"></input></td>
          </tr>                                  
        </table>
        <button class="btn btn-primary" v-on:click="editResource">Save</button>
        
      </div>   
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)
  var endpoint = 'http://localhost:8090/RbacMan/'
  module.exports = {
    el () { return '#resource' },
    data () {
      return {
        resource: {}
      }
    },
    ready: function () {
      this.$http.get(endpoint + 'resources/' + this.$route.params.id).then((response) => {
        this.$set('resource', response.data)
      }, (response) => {
      })
    },
    methods: {
      editResource: function () {
        this.$http.put(endpoint + 'resources/' + this.resource.id, this.resource).then((response) => {
          console.log('SUCCESS')
        })
      }
    }
  }
</script>
