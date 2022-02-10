<template>
  <Listing
    :options="{ actionBtns: true, inputs, entity, actions }"
    :listingTitles="titles"
    :listData="roles"
  />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../reusable/Listing.vue";
import { AppActionEvents } from "../../events/app.events";
@Options({
  computed: {
    roles() {
      const roles = this.$store.getters.getRoles;
      return roles;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.role.retrieve);
  },
})
export default class Role extends Vue {
  data() {
    return {
      titles: [
        "Name",
        "Permissions",
        "User",
        "Description"
      ],
      inputs: {
        name: "text",
        permissions: "select",
        user: "text",
        description: "textarea",
      },
      entity: "Role",
      actions: {
        add: AppActionEvents.role.add,
        edit: AppActionEvents.role.edit,
        delete: AppActionEvents.role.delete,
        details: AppActionEvents.role.retrieveSingle,
        list: AppActionEvents.role.retrieve,
      },
    };
  }
}
</script>

<style>
</style>