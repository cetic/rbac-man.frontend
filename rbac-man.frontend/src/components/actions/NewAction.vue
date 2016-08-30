<style>
  codemirror {
    display: block;
  }
</style>

<template>
  <div id="action" class="container">
  <div class="panel-heading">
  <h3>New action</h3>
  </div>
      <div class="panel-body">
	
        <table class="table table-striped">                        
          <tr>
            <td>Name</td>
            <td><input class="form-control" placeholder="Name" v-model="action.name" type="text"></input></td>
          </tr>
                  
        </table>
        <button class="btn btn-primary" v-on:click="createAction">Save</button>
        
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
    },
    methods: {
      createAction: function () {
        this.$http.post(endpoint + 'actions', this.action).then((response) => {
        }, (response) => {
        })
      }
    }
}
</script>
