<template>
  <div>
    <h1 class="body-1 text-center mb-5 grey--text text--darken-2">CREATE ACCOUNT</h1>

    <form @submit.prevent="submit">
      <v-text-field v-model="email" type="email" label="Email" solo></v-text-field>

      <v-text-field v-model="password" type="password" label="Password" solo></v-text-field>

      <v-text-field v-model="confirmPassword" type="password" label="Confirm Password" solo></v-text-field>

      <v-btn :loading="$store.state.loading" type="submit" color="primary">Sign up</v-btn>
    </form>

    <SocialLogin />
  </div>
</template>

<script>
import SocialLogin from "@/components/SocialLogin";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  components: {
    SocialLogin
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  // validations: {
  //   email: { required, email },
  //   password: { required, minLength: minLength(6) }
  // },
  methods: {
    submit() {
      const credentials = {
        email: this.email,
        password: this.password
      };

      this.$store
        .dispatch("signup", credentials)
        .then(() => {
          console.log("hi");
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