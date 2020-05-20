<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <app-heading :stock="stock"></app-heading>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: insufficientFunds}"
                    >
                </div>
                <div class="pull-right">
                    <app-button
                            @click="buyStock"
                            :disabled="insufficientFunds || +quantity <= 0"
                    >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
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
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: +this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        },
        components: {
            appHeading: Heading,
            appButton: Button
        }
    }
</script>