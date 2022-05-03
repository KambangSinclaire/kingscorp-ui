<template>
  <Listing
    :listData="invoices"
    :options="{ actionBtns: true, inputs, entity, actions, relations }"
    :listingTitles="titles"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
import { AppActionEvents } from "../../../events/app.events";
@Options({
  computed: {
    invoices() {
      const invoices = this.$store.getters.getInvoices;
      return invoices;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.invoice.retrieve);
    this.$store.dispatch(AppActionEvents.product.retrieve);
  },
})
export default class Invoice extends Vue {
  data() {
    return {
      titles: [
        "Total amount",
        "Items",
        "Expected date",
        "User",
        "Description",
        "Status",
        "Client",
        "Expiry date",
      ],
      inputs: {
        "total_amount": "number",
        items: "select",
        status: "text",
        description: "textarea",
        "expected_date": "date",
        user: "text",
        client: "text",
        "expiry_date": "date",
      },
      entity: "Invoice",
       relations: {
        // category: "Categories",
        items: "Products",
        // inventory: "Inventories",
      },
      actions: {
        add: AppActionEvents.invoice.add,
        edit: AppActionEvents.invoice.edit,
        delete: AppActionEvents.invoice.delete,
        details: AppActionEvents.invoice.retrieveSingle,
        list: AppActionEvents.invoice.retrieve,
      },
    };
  }
}
</script>
<style>
</style>