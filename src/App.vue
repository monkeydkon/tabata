<template>
  <v-app>
    <Header />

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="10" sm="8" lg="6" offset="1" offset-sm="2" offset-lg="3">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
};
</script>
