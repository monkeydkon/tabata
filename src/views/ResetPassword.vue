<template>
  <div>
    <form @submit.prevent="submit">
      <v-text-field v-model="password" type="password" label="Password" solo></v-text-field>

      <v-btn type="submit" color="primary">Bom</v-btn>
    </form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      password: "",
      token: null
    };
  },
  created() {
    this.token = this.$route.params.token;
  },
  methods: {
    submit() {
      axios
        .post(`${process.env.VUE_APP_BASEURL}/auth/post-reset`, {
          token: this.token,
          password: this.password
        })
        .then(res => {
          console.log(res, "hi");
        })
        .catch(err => {
          console.log(err, "bye");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>