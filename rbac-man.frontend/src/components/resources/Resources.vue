<style>
</style>


<template>
<div id="resources">
<h3>resources</h3>
  <!-- example format: see /static/test/templates.json-->
  <v-server-table url="http://localhost:8090/RbacMan/resources" :columns="columns" :options="options"></v-server-table>
 <a class="btn btn-primary" href="#!/resources/create">Create resource</a>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTables from 'vue-tables'
Vue.use(VueResource)
Vue.use(VueTables.server)

module.exports = {
  el () { return '#resources' },
  data () {
    return {
      columns: ['id', 'name', 'url', 'edit', 'delete'],
      options: {
        templates: {
          edit: "<a href='#!/resources/{id}/edit'><i class='fa fa-edit fa-fw'></i></a>",
          delete: "<a href='#!/resources/{id}/delete'><i class='fa fa-trash fa-fw'></i></a>"
        }
      }
    }
  }
}
</script>
