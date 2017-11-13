<template>
  <RadioGroup v-model="value">
    <Radio :label="item.value" v-for="item in soure">
      <span>{{item.text}}</span>
    </Radio>
  </RadioGroup>
</template>

<script lang="ts">
  export default {
    name: 'app',
    data () {
      return {}
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      soure: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style>

</style>
