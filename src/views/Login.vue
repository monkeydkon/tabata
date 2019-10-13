<template>
  <div>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="email" label="email" :error-messages="emailErrors" solo></v-text-field>

      <v-text-field
        v-model="password"
        type="password"
        label="password"
        :error-messages="passwordErrors"
        solo
      ></v-text-field>

      <div class="d-flex flex-column flex-sm-row align-sm-start mt-sm-3 mt-2">
        <v-btn :loading="$store.state.loading" type="submit" color="primary">Log in</v-btn>
        <div
          class="d-flex flex-column align-center justify-center align-sm-end ml-sm-auto mt-5 mt-sm-0"
        >
          <a class="body-2 mb-1">Forgot password</a>
          <p class="body-2 mb-0">
            Dont have an account?
            <a @click="$router.push('/signup')">Sign up</a>
          </p>
        </div>
      </div>
    </v-form>

    <div class="or">
      <span></span>
      OR
      <span></span>
    </div>

    <div class="d-flex flex-column">
      <v-btn color="#385aa5" depressed class="mb-4 white--text">Login with facebook</v-btn>
      <v-btn color="#dd422d" depressed class="white--text">Login with google</v-btn>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

const loginValidator = function() {
  return !this.loginFailed;
};
export default {
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: "",
      loginFailed: false
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.email.required) errors.push("Please, Enter your email");
      if (!this.$v.email.loginValidator) errors.push("Wrong Email Or password");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.required)
        errors.push("Please, Enter your password");
      if (!this.$v.password.loginValidator)
        errors.push("Wrong Email Or password");
      return errors;
    }
  },
  validations: {
    email: { required, loginValidator },
    password: { required, loginValidator }
  },
  methods: {
    submit() {
      this.loginFailed = false;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const credentials = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("login", credentials)
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {
            this.loginFailed = true;
          });
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.or {
  display: flex;
  align-items: center;
  color: #616161;
  margin-top: 50px;
  margin-bottom: 50px;

  span {
    height: 1px;
    border-top: 1px solid #616161;
    flex: 1;
    &:first-child {
      margin-right: 20px;
    }
    &:last-child {
      margin-left: 20px;
    }
  }
}
</style>