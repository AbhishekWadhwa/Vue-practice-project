<template>
            <input
                type="number"
                class="form-control"
                @input="$emit('input')"
                placeholder="Quantity"
                value="quantity">
</template>