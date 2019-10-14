<template>
  <div>
    <v-app-bar flat dark color="primary">
      <v-btn icon fab class="d-md-none" @click="drawer = !drawer">
        <v-icon>icon-menu</v-icon>
      </v-btn>

      <v-toolbar-title class="pl-md-0" @click="navigateToHome">Tabata</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-md-flex">
        <v-btn v-if="!isAuth" text to="/login">Login</v-btn>
        <v-btn v-if="!isAuth" text to="/signup">Sign up</v-btn>
        <v-btn v-if="isAuth" @click.stop="dialog = true" text>Log out</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer">
      <v-list nav>
        <v-list-item v-if="!isAuth" to="/login">Login</v-list-item>
        <v-list-item v-if="!isAuth" to="/signup">Sign up</v-list-item>
        <v-list-item v-if="isAuth" link @click.stop="dialog = true">Log out</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Log out</v-card-title>

        <v-card-text>Are you sure you want to log out?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" outlined @click="logout">Yes</v-btn>

          <v-btn color="primary" @click="dialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="4000">
      You have been successfully logged out.
      <v-btn color="primary" text @click="snackbar = false">OK</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      dialog: false,
      snackbar: false
    };
  },
  computed: {
    ...mapGetters(["isAuth"])
  },
  methods: {
    logout() {
      this.drawer = false;
      this.dialog = false;
      this.$store.dispatch("logout").then(() => {
        this.snackbar = true;
        this.navigateToHome();
      });
    },
    navigateToHome() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  cursor: pointer;
}
</style>