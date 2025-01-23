<template>
  <div class="card flex justify-center" >
      <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-64">
          <div class="flex flex-wrap items-center gap-2 align-middle">
              <ToggleSwitch name="activation" /> <h3 class="text-sm font-light text-surface-300 text-nowrap">I accept the license and terms.</h3>
              <Message v-if="$form.activation?.invalid" severity="error" size="small" variant="simple">{{ $form.activation.error?.message }}</Message>
          </div>
          <Button type="submit" severity="secondary" label="Submit" />
      </Form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
const initialValues = ref({
  activation: false
});
const resolver = ref(zodResolver(
  z.object({
      activation: z.boolean().refine((val) => val === true, { message: 'Activation is required.' })
  })
));
</script>
