<template>
  <Listing
    :listData="personnels"
    :options="{ actionBtns: true, inputs, entity, actions, relations }"
    :listingTitles="titles"
    @fetchDropDownIcons="upDateActions"
  />
  <!-- event above @fetchDropDownIcons is used to mutate the state of the dropdown in each component -->
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../../events/app.events";
import Listing from "../../reusable/Listing.vue";

@Options({
  components: {
    Listing,
  },
  computed: {
    personnels() {
      const personnels = this.$store.getters.getPersonnels;
      return personnels;
    },
    upDateActions() {
      let dropDowns = [
        {
          icon: "@/assets/feather_icons/users.svg",
          title: "analysis",
          url: "/login",
        },
        {
          icon: "@/assets/feather_icons/users.svg",
          title: "history",
          url: "/",
        },
        {
          icon: "@/assets/feather_icons/users.svg",
          title: "statistics",
          url: "/",
        },
        {
          icon: "@/assets/feather_icons/users.svg",
          title: "status",
          url: "/login",
        },
      ];
      this.$store.dispatch("upDropdownActions", dropDowns);
    },
  },
  mounted() {
    this.$store.dispatch(AppActionEvents.personnel.retrieve);
    this.$store.dispatch(AppActionEvents.role.retrieve);
  },
})
export default class Personnel extends Vue {
  data() {
    return {
      titles: [
        "Username",
        "Email",
        "Role",
        "Password"
        // "Name",
        // "Group",
        // "Profile image"
      ],
      inputs: {
        username: "text",
        "email": "email",
        role: "select",
        // group:"text",
        // password:"password",
        // "profile_image":"file",

      },

      entity: "personnel",
      relations: {
        // category: "Categories",
        role: "Roles",
        // inventory: "Inventories",
      },
      actions: {
        add: AppActionEvents.personnel.add,
        edit: AppActionEvents.personnel.edit,
        delete: AppActionEvents.personnel.delete,
        details: AppActionEvents.personnel.retrieveSingle,
        list: AppActionEvents.personnel.retrieve,
      },
    };
  }
}
</script>

<style>
</style>