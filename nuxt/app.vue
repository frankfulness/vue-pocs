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
      <div>
        <UButton label="Modal Yup Form" @click="isOpen = true" />

        <UModal v-model="isOpen">
          <div class="p-4">
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
          </div>
        </UModal>
      </div>
    </UCard>

    <TableExampleAdvanced />
  </UContainer>
</template>

<script setup>
import { defineAsyncComponent, ref, reactive } from "vue";
import { object, string } from "yup";
import TableExampleAdvanced from "./components/TableExampleAdvanced";

const isOpen = ref(false);

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
