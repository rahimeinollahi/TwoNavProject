<template>
    <div class="continer d-flex justify-content-center">
        <div class="table-responsive">
    <table class="table table-bordered table-striped table-hover table-dark">
      <thead class="bg-info">
        <tr class="text-center">
          <th>#</th>
          <th>Firstname</th>
          <th>Lastname</th>
          
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="item in getTableItems " :key="item.id">
          <td>{{item.id}}</td>
          <td class="col-sm"> <router-link to="carhome/" class="">{{item.title}}</router-link></td>
          <td class="col-sm-12 w-100">{{item.Completed}}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
</template>

<script>
//this page not work i don't know
    export default {
        name:'CSharpCp',
        computed:{
            getTableItems(){
                return this.$store.state.tbl.tableItem;
            },
            created(){
              return   this.fetchTodos();
            }
        },
        methods:{
            fetchData(){
                return this.$store.actions.fetchTodos();
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>