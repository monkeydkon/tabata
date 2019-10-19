<template>
  <div>
      <h1>hi</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    created(){
        const token = this.$route.params.token;
        axios.post(`${process.env.VUE_APP_BASEURL}/auth/confirmation`, {token}).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
};
</script>

<style lang="scss" scoped>
</style>