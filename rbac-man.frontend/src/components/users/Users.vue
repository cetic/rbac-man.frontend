<style>
</style>


<template>
<div id="users">
<h3>Users</h3>
  <!-- example format: see /static/test/templates.json-->
  <v-server-table url="http://localhost:8090/RbacMan/users" :columns="columns" :options="options"></v-server-table>
 <a class="btn btn-primary" href="#!/users/create">Create user</a>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTables from 'vue-tables'
Vue.use(VueResource)
Vue.use(VueTables.server)

module.exports = {
  el () { return '#users' },
  data () {
    return {
      columns: ['id', 'firstname', 'lastname', 'username', 'edit', 'delete'],
      options: {
        templates: {
          edit: "<a href='#!/users/{id}/edit'><i class='fa fa-edit fa-fw'></i></a>",
          delete: "<a href='#!/users/{id}/delete'><i class='fa fa-trash fa-fw'></i></a>"
        }
      }
    }
  }
}
</script>
