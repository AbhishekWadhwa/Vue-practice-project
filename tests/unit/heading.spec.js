import Heading from '@/components/Atoms/Heading/Heading'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'

const order = {
    stockId: 10,
    stockPrice: 500,
    quantity: 5
};
const order2 = {
    stockId: 10,
    stockPrice: 500
};
const factory = (propsData) => {
  return mount(Heading, {
    propsData: {
      stock: propsData
    }
  })
}

describe("Heading.vue", () => {
    describe("does not have a stock quantity", ()=> {
      it("renders a message", () => {
        const wrapper = factory(order2)
        expect(wrapper.find("small:nth-child(2)").exists()).toBeFalsy();
      })
    })
  
    describe("does have a stock quantity", ()=> {
      it("renders a message", () => {
        const wrapper = factory(order)

        expect(wrapper.find("small:nth-child(2)").text()).toBe("| Quantity: " + order.quantity)
      })
    })
  })