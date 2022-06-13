<template>
  <div class="page">
    <router-view />
    <Footer v-if="$route.meta.navShow" />
  </div>
</template>
<script>
import Footer from "./components/footer";
export default {
  components: {
    Footer,
  },
  created() {
    if (this.$isMobile()) {
      if (this.$route.name == "home" && this.$route.query.inviter_id) {
        if (!this.$getLocalStorage("inviterId")) {
          this.$setLocalStorage("inviterId", this.$route.query.inviter_id);
        }
      }
    } else {
      if (this.$route.name != "pc") {
        this.$router.push({
          name: "pc",
        });
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.page {
  min-height: 100%;
  background-color: #eee;
}
</style>
