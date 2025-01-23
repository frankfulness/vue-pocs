<template class="flex bg-surface-50 dark:bg-surface-900 dark:text-surface-50">
  <header>
    <nav>
      <NavigationBar />
    </nav>
  </header>
  <main>
    <section class="object-contain">
      <div>
        <SideNavigation class="float-left space" />
        <Card style="border-radius: 0.5rem">
          <template #title><h1 class="text-center text-3xl text-primary-500 font-bold -indent-72"> Tabs </h1></template>
          <template #content><TabsTemplate /></template>
        </Card>
      </div>
    </section>
    <section class="object-contain my-5">
      <h1 class="text-center px-4 py-4 text-3xl text-primary-500 font-bold"> Buttons </h1>
      <div class="flex flex-wrap align-middle place-content-evenly">
        <div class="justify-self-auto m-3"><BasicButton /></div>
        <div class="justify-self-auto m-3"><GroupButton /></div>
        <div class="justify-self-auto m-3"><BadgeButton /></div>
        <div class="justify-self-auto m-3"><SizesButton /></div>
        <div class="justify-self-auto m-3"><DisabledButton /></div>
      </div>
    </section>
    <section class="object-contain my-5">
      <h1 class="text-center px-4 py-4 text-3xl text-primary-500 font-bold"> Forms </h1>
      <div class="flex flex-wrap align-middle place-content-evenly">
        <div class="justify-self-auto m-3"><AutofillDropdown /></div>
        <div class="justify-self-auto m-3"><CascadeSelect /></div>
        <div class="justify-self-auto m-3"><DatePicker /></div>
        <div class="justify-self-auto m-3"><SearchFields /></div>
      </div>
      <div class="flex flex-wrap align-middle place-content-evenly">
        <div class="justify-self-auto m-3"><SwitchButton /></div>
        <Toast />
      </div>
    </section>
    <section class="object-contain mx-20 my-5">
      <h1 class="text-center px-4 py-4 text-3xl text-primary-500 font-bold"> Table </h1>
      <div class="justify-self-auto rounded-xl border-2 border-surface-800"><ItemTable /></div>
    </section>
  </main>
</template>


