<template>
  <div>
    <div class="or">
      <span></span>
      <p class="body-1 mb-0">OR</p>
      <span></span>
    </div>

    <div class="d-flex flex-column">
      <v-btn color="#385aa5" depressed class="mb-4 white--text">
        <v-icon small left>icon-facebook</v-icon>Login with facebook
      </v-btn>
      <v-btn color="#dd422d" depressed class="white--text">
        <v-icon small left>icon-google</v-icon>Login with google
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
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