<template>
  <v-app>
    <Header />

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="10" sm="8" md="6" offset="1" offset-sm="2" offset-md="3">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";

export default {
  components: {
    Header
  }
  // created: function() {
  //   axios.interceptors.response.use(
  //     res => {
  //       return res;
  //     },
  //     err => {
  //       const originalRequest = error.config;
  //       console.log(originalRequest);
  //       console.log("hi");
  //       console.log(err);
  //       return new Promise((resolve, reject) => {
  //         console.log("outside if");
  //         console.log(err.status);
  //         if (
  //           err.status === 401 &&
  //           err.config &&
  //           !err.config.__isRetryRequest
  //         ) {
  //           console.log("inside if");
  //           this.$store.dispatch("logout");
  //         }
  //         throw err;
  //       });
  //     }
  //   );
  // }
};
</script>
