<template>
    <table>
        <tr v-if="showHeader === 'true'">
            <th />
            <th>Binary</th>
            <th>Decimal</th>
            <th />
        </tr>
        <tr>
            <td>
                <label>
                    {{ label }}
                </label>
            </td>
            <td>
                <input
                    type="number"
                    min="0"
                    v-bind:value="binaryValue"
                    @change="(event) => emitBinaryValue(event)"
                />
            </td>
            <td>
                <input
                    type="number"
                    min="0"
                    v-bind:value="decimalValue"
                    @change="(event) => emitDecimalValue(event)"
                />
            </td>
            <td />
        </tr>
    </table>
</template>

<script>
export default {
    name: 'InputGroup',
    props: {
        binaryValue: Number,
        decimalValue: Number,
        label: String,
        showHeader: Boolean,
    },
    methods: {
        emitBinaryValue(e) {
            this.$emit('binaryChange', e)
        },
        emitDecimalValue(e) {
            this.$emit('decimalChange', e)
        }
    }
}
</script>

<style scoped>
table {
    margin: auto;
    padding: 0.5rem 0;
}
td {
    width: 250px;
    padding: 1rem;
}
input {
    height: 3rem;
    font-size: 1.25rem;
    text-align: center;
    outline: none;
    box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.15);
    border-radius: 0.75rem;
    border: none;
}
</style>

