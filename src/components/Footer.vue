<template>
        <a href="https://www.buymeacoffee.com/patrickspafford" v-if="width > 600">
            <img src="https://img.buymeacoffee.com/button-api/?&emoji=&slug=patrickspafford&button_colour=5F7FFF&font_colour=ffffff&font_family=Arial&outline_colour=000000&coffee_colour=FFDD00">
        </a>
</template>

<script>
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
export default {
    name: 'Footer',
    data() {
        return {
            width
        }
    }
}
</script>

<style scoped>
a {
    position: absolute;
    bottom: 0;
    margin: 20px;
    right: 0;
}
</style>>
