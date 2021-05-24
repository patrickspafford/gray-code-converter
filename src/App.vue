<template>
  <Header />
    <InputGroup
      v-on:binaryChange="handleBinaryChange"
      v-on:decimalChange="handleBinaryDecimalChange"
      v-bind:binaryValue="binary"
      v-bind:decimalValue="binaryDecimal"
      showHeader
      label="Value"
    />
    <InputGroup
      v-on:binaryChange="handleGrayCodeBinaryChange"
      v-on:decimalChange="handleGrayCodeDecimalChange"
      v-bind:binaryValue="grayCode"
      v-bind:decimalValue="grayCodeDecimal"
      label="Gray Code"
    />
    <button class="button" @click="clear()">
      Clear
    </button>
</template>

<script>
import Header from './components/Header.vue'
import InputGroup from './components/InputGroup.vue'
import { toBinary } from './utils'

export default {
  name: 'App',
  components: {
    Header,
    InputGroup,
  },
  data() {
    return {
      binary: 0,
      binaryDecimal: 0,
      grayCode: 0,
      grayCodeDecimal: 0,
    }
  },
  methods: {
    handleBinaryDecimalChange({ target: { value }}) {
      const temp = Number(value)
      this.binaryDecimal = temp
      this.binary = toBinary(temp)
      this.grayCodeDecimal = Number(temp ^ (temp >> 1))
      this.grayCode = toBinary(temp ^ (temp >> 1))
    },
    handleBinaryChange({ target: { value }}) {
      this.binary = Number(value)
    },
    handleGrayCodeDecimalChange({ target: { value }}) {
      let temp = Number(value)
      let accum = 0
      while (temp) {
        accum ^= temp
        temp >>= 1
      }
      this.binaryDecimal = accum
      this.binary = toBinary(accum)
      this.grayCodeDecimal = Number(value)
      this.grayCode = toBinary(value)
    },
    handleGrayCodeBinaryChange({ target : { value }}) {
      this.grayCode = Number(value)
    },
    clear() {
      this.binary = 0
      this.binaryDecimal = 0
      this.grayCode = 0
      this.grayCodeDecimal = 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
