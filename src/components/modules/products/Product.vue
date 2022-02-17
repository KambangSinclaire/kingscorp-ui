<template>
  <Listing
    :options="{ actionBtns: true, inputs, entity, actions, relations }"
    :listData="products"
    :listingTitles="titles"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../../events/app.events";
import Listing from "../../reusable/Listing.vue";
@Options({
  computed: {
    products() {
      const prods = this.$store.getters.getProducts;
      return prods;
    },
  },
  components: {
    Listing,
  },
  mounted() {
    let relations = [];
    for (const [key, value] of Object.entries(this.relations)) {
      relations.push(`${key}`);
    }
    const payload = { relations };
    this.$store.dispatch(AppActionEvents.product.retrieve, payload);
  },
})
export default class Product extends Vue {
  data() {
    return {
      titles: [
        "name",
        "quantity",
        "unit_cost",
        // "Image Url",
        "description",
        // "Inventory",
        // "Stock",
        // "Category",
      ],
      inputs: {
        name: "text",
        quantity: "number",
        // stock: "select",
        "unit_cost": "number",
        description: "textarea",
        // "image_url": "file",
        // inventory: "select",
        // category: "select",
      },
      entity: "Product",
      relations: {
        // category: "Categories",
        // stock: "Stocks",
        // inventory: "Inventories",
      },
      actions: {
        add: AppActionEvents.product.add,
        edit: AppActionEvents.product.edit,
        delete: AppActionEvents.product.delete,
        details: AppActionEvents.product.retrieveSingle,
        list: AppActionEvents.product.retrieve,
      },
    }
  }
}
</script>

<style lang="sss" scoped>
</style>