<style>
  codemirror {
    display: block;
  }
</style>

<template>
  <div id="resource" class="container">
  <div class="panel-heading">
  <h3>New resource</h3>
  </div>
      <div class="panel-body">
	
        <table class="table table-striped">                        
          <tr>
            <td>Name</td>
            <td><input class="form-control" placeholder="Name" v-model="resource.name" type="text"></input></td>
          </tr>
          <tr>
            <td>URL</td>
            <td><input class="form-control" placeholder="URL" v-model="resource.url" type="text"></input></td>
          </tr>        
        </table>
        <button class="btn btn-primary" v-on:click="createResource">Save</button>
        
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
    },
    methods: {
      createResource: function () {
        this.$http.post(endpoint + 'resources', this.resource).then((response) => {
        }, (response) => {
        })
      }
    }
}
</script>
