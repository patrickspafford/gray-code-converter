<template>
  <Header />
    <InputGroup
      v-on:binaryChange="handleBinaryChange"
      v-on:decimalChange="handleBinaryDecimalChange"
      v-bind:binaryValue="binary"
      v-bind:decimalValue="binaryDecimal"
      showHeader="true"
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
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import InputGroup from './components/InputGroup.vue'
import Footer from './components/Footer.vue'
import {
  toBinary,
  binaryRegex,
  calculateDecimalFromGray,
  calculateGrayCode,
  } from './utils'

export default {
  name: 'App',
  components: {
    Header,
    InputGroup,
    Footer,
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
      if (value === '') {
        this.clear()
        return
      }
      const temp = Number(value)
      this.binaryDecimal = temp
      this.binary = toBinary(temp)
      const grayCode = calculateGrayCode(temp)
      this.grayCodeDecimal = grayCode
      this.grayCode = toBinary(grayCode)
    },
    handleBinaryChange({ target: { value }}) {
      if (!value.match(binaryRegex)) {
        this.clear()
        return
      }
      const decimalValue = parseInt(value, 2)
      this.binary = Number(value)
      this.binaryDecimal = decimalValue
      const grayCodeRaw = Number(decimalValue ^ (decimalValue >> 1))
      this.grayCodeDecimal = grayCodeRaw
      this.grayCode = toBinary(grayCodeRaw)
    },
    handleGrayCodeDecimalChange({ target: { value }}) {
      if (value === '') {
        this.clear()
        return
      }
      const decimal = calculateDecimalFromGray(value)
      this.binaryDecimal = decimal
      this.binary = toBinary(decimal)
      this.grayCodeDecimal = Number(value)
      this.grayCode = toBinary(value)
    },
    handleGrayCodeBinaryChange({ target : { value }}) {
      if (!value.match(binaryRegex)) {
        this.clear()
        return
      }
      this.grayCode = Number(value)
      let decimalGrayCodeValue = parseInt(value, 2)
      this.grayCodeDecimal = decimalGrayCodeValue
      let accum = 0
      while (decimalGrayCodeValue) {
        accum ^= decimalGrayCodeValue
        decimalGrayCodeValue >>= 1
      }
      this.binaryDecimal = accum
      this.binary = toBinary(accum)
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
body {
  margin: 0;
}
.button {
  background-color: #ccc;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.button:hover {
  opacity: 0.75;
}
</style>
