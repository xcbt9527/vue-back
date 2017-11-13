<template>
  <div class="box">
    <mlabel :title="title" class="boxleft" :width="width"></mlabel>
    <Input v-model="value" :placeholder="placeholder" class="boxright" style="width: 100%" :type="type"
           :icon="icon"></Input>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'mtextbox',
    data () {
      return {}
    },
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      title: {},
      width: {},
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      icon: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>

</style>
