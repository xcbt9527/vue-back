<template>
  <div class="layout">
    <div class="layout-ceiling">
      <div class="layout-ceiling-main">
        <a href="#">
          <Avatar icon="person" />
        </a>
      </div>
    </div>
    <Row type="flex">
    <mment></mment>
      <Col span="19">
      <div class="layout-content">
        <div class="layout-content-main">
          <router-view/>
          <BackTop></BackTop>
        </div>
      </div>
      <div class="layout-copy">
        2017.11.16 &copy; momoback 764567192
      </div>
      </Col>
    </Row>
  </div>
</template>
<script lang="ts">
  import mment from"./menu.vue";
  export default {
    name: 'app',
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
