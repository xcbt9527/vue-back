<template>

  <label class="boxleft" v-bind:style="{ width: width + 'px' }">{{title}}</label>
</template>

<script lang="ts">
  export default {
    name: 'mlabel',
    data () {
      return {}
    },
    //接收父传参
    props: {
      title: {
        type: String,
        default: ''
      },
      width: {
        type: Number,
        default: ''
      }
    }
  }
</script>

<style>

</style>
