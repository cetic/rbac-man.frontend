<style>
</style>


<template>
<div id="actions">
<h3>Actions</h3>
  <!-- example format: see /static/test/templates.json-->
  <v-server-table url="http://localhost:8090/RbacMan/actions" :columns="columns" :options="options"></v-server-table>
 <a class="btn btn-primary" href="#!/actions/create">Create action</a>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTables from 'vue-tables'
Vue.use(VueResource)
Vue.use(VueTables.server)

module.exports = {
  el () { return '#actions' },
  data () {
    return {
      columns: ['id', 'name', 'edit', 'delete'],
      options: {
        templates: {
          edit: "<a href='#!/actions/{id}/edit'><i class='fa fa-edit fa-fw'></i></a>",
          delete: "<a href='#!/actions/{id}/delete'><i class='fa fa-trash fa-fw'></i></a>"
        }
      }
    }
  }
}
</script>
