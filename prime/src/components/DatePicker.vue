
<template>
  <div class="card flex flex-wrap gap-4">
    <FloatLabel>
      <div class="flex-auto">
          <DatePicker v-model="buttondisplay" showIcon fluid :showOnFocus="false" inputId="over_label" />
          <label for="over_label">Date Picker</label>
      </div>
    </FloatLabel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DatePicker from 'primevue/DatePicker';

const buttondisplay = ref();
</script>
