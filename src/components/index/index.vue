<template>
  <div class="layout">
    <Row type="flex">
    <mment></mment>
      <Col span="19">
      <div class="layout-content">
        <div class="layout-content-main">
          <router-view/>
        </div>
      </div>
      <div class="layout-copy">
        2011-2016 &copy; TalkingData
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import router from "../../router/menu";
  import mment from"./menu.vue";
  export default {
    name: 'app',
    router,
    data () {
      return {}
    },
    components: {
      mment
    },
    prop: {}
  }
</script>

<style>

</style>
