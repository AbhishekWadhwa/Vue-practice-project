<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <app-heading :stock="stock"></app-heading>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: insufficientQuantity}"
                    >
                </div>
                <div class="pull-right">
                    <app-button
                            @click="sellStock"
                            :disabled="insufficientQuantity || quantity <= 0"
                    >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}
                    </app-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    import {mapActions} from 'vuex';
    import Heading from '../../Atoms/Heading/Heading.vue';
    import Button from '../../Atoms/Button/Button.vue';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
          insufficientQuantity() {
              return this.quantity > this.stock.quantity;
          }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        },
        components: {
            appHeading: Heading,
            appButton: Button
        }
    }
</script>