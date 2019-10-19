<template>
  <div>
    <form @submit.prevent="submit">
      <v-text-field v-model="email" type="email" label="Email" solo></v-text-field>

      <v-btn type="submit" color="primary">Bom</v-btn>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    submit() {
      axios
        .post(`${process.env.VUE_APP_BASEURL}/auth/reset`, {
          email: this.email
        })
        .then(res => {
          console.log(res, "hi");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
</style>