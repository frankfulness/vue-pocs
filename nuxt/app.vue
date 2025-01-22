<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme
            ><USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
          /></ColorScheme>
        </div>
      </template>
      <UButton
        icon="i-heroicons-book-open"
        to="https://ui.nuxt.com"
        target="_blank"
        >Open Nuxt UI Documentation</UButton
      >
      <UButton color="black" variant="solid">Button</UButton>
      <UCheckbox label="Label" help="Please check this box" />
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton
          color="white"
          label="Options"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </UDropdown>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
      </UForm>

      <UTabs :items="tabItems" />
      <UInputMenu v-model="selected" :options="people">
        <template #leading>
          <UIcon v-if="selected.icon" :name="selected.icon" class="w-5 h-5" />
          <UAvatar
            v-else-if="selected.avatar"
            v-bind="selected.avatar"
            size="2xs"
          />
        </template>
      </UInputMenu>
      <UButton label="Reveal modal" @click="openModal" />
    </UCard>

    <UTable v-model="selectedPerson" :rows="tablePeople" :columns="columns">
      <template #name-data="{ row }">
        <span
          :class="[
            selectedPerson.find((person) => person.id === row.id) &&
              'text-primary-500 dark:text-primary-400',
          ]"
          >{{ row.name }}</span
        >
      </template>

      <template #actions-data="{ row }">
        <UDropdown :items="tableItems(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>
  </UContainer>
</template>

<script setup>
import { object, string } from "yup";
import ModalExampleComponent from "./components/ModalExampleComponent";

const toast = useToast();
const modal = useModal();
const count = ref(0);

function openModal() {
  count.value += 1;
  modal.open(ModalExampleComponent, {
    count: count.value,
    onSuccess() {
      toast.add({
        title: "Success !",
        id: "modal-success",
      });
    },
  });
}

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "title",
    label: "Title",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "actions",
  },
];

const tablePeople = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
  },
];

const tableItems = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];

const selectedPerson = ref([tablePeople[1]]);

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event) {
  // Do something with event.data
  console.log(event.data);
}

const items = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["E"],
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
      shortcuts: ["D"],
      disabled: true,
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      shortcuts: ["⌘", "D"],
    },
  ],
];

const tabItems = [
  {
    label: "Tab1",
    icon: "i-heroicons-information-circle",
    content: "This is the content shown for Tab1",
  },
  {
    label: "Tab2",
    icon: "i-heroicons-arrow-down-tray",
    disabled: true,
    content: "And, this is the content for Tab2",
  },
  {
    label: "Tab3",
    icon: "i-heroicons-eye-dropper",
    content: "Finally, this is the content for Tab3",
  },
];

const people = [
  {
    id: "benjamincanac",
    label: "benjamincanac",
    href: "https://github.com/benjamincanac",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/739984?v=4" },
  },
  {
    id: "Atinux",
    label: "Atinux",
    href: "https://github.com/Atinux",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/904724?v=4" },
  },
  {
    id: "smarroufin",
    label: "smarroufin",
    href: "https://github.com/smarroufin",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/7547335?v=4" },
  },
  {
    id: "nobody",
    label: "Nobody",
    icon: "i-heroicons-user-circle",
  },
];

const selected = ref(people[0]);
</script>
