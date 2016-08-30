<style>
  codemirror {
    display: block;
  }
</style>

<template>
  <div id="user" class="container">
  <div class="panel-heading">
  <h3>New user</h3>
  </div>
      <div class="panel-body">
	
        <table class="table table-striped">                 
           <tr>
            <td>Username</td>
            <td><input class="form-control" placeholder="Username" v-model="user.username" type="text"></input></td>
          </tr>
          <tr>
            <td>Lastname</td>
            <td><input class="form-control" placeholder="Lastname" v-model="user.lastname" type="text"></input></td>
          </tr>
          <tr>
            <td>Firstname</td>
            <td><input class="form-control" placeholder="Firstname" v-model="user.firstname" type="text"></input></td>
          </tr>         
        </table>
        <button class="btn btn-primary" v-on:click="createUser">Save</button>
        
      </div>   
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)
  var endpoint = 'http://localhost:8090/RbacMan/'
  module.exports = {
    el () { return '#user' },
    data () {
      return {
        user: {}
      }
    },
    ready: function () {
    },
    methods: {
      createUser: function () {
        this.$http.post(endpoint + 'users', this.user).then((response) => {
        }, (response) => {
        })
      }
    }
}
</script>
