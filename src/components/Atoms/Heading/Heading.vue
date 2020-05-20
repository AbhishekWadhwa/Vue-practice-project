<template>
  <div class="panel-heading">
        <h3 class="panel-title">
            {{ stock.name }}
            <small>Price: {{ stock.price }} </small>
            <small v-if="stock.quantity >= 0">| Quantity: {{ stock.quantity }}</small>
        </h3>
    </div>
</template>

<script>
export default {
    props: ['stock']
}
</script>