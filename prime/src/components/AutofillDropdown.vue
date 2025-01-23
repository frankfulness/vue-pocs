
<template>
  <FloatLabel>
    <div class="card flex justify-center">
      <AutoComplete v-model="selectedCountry" dropdown optionLabel="name" :suggestions="filteredCountries" @complete="search" inputId="over_label"/>
      <label for="over_label">Autofill Dropdown</label>
    </div>
  </FloatLabel>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryServiceData";

onMounted(() => {
  CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
  setTimeout(() => {
      if (!event.query.trim().length) {
          filteredCountries.value = [...countries.value];
      } else {
          filteredCountries.value = countries.value.filter((country) => {
              return country.name.toLowerCase().startsWith(event.query.toLowerCase());
          });
      }
  }, 250);
}
</script>
