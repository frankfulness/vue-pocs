<script setup>
{
  /* <script setup lang='ts'> */
}
import { Icon } from '@iconify/vue'
import { ref, h } from 'vue'
import {
  // TABS
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
  // EVENTS

  // DROPDOWN MENU
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  // Modal / Dialog Component
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,

  // TOASTS COMPONENT
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastViewport,
} from 'radix-vue'

import DataTable from '@/components/DataTable.vue'
import people from '@/components/mockDataPeople.json'
import EditButton from '@/components/EditButton.vue'
import { format } from 'date-fns'
const columnsPeople = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableSorting: false,
  },
  {
    accessorKey: 'first_name',
    header: 'First name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last name',
  },
  // {
  //   accessorFn: row => `${row.first_name} ${row.last_name}`,
  //   header: 'Name',
  // },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'created_at',
    header: 'Created',
    cell: (info) => format(new Date(info.getValue()), 'MMM d, yyyy'),
  },
  {
    accessorKey: 'edit',
    header: ' ',
    cell: ({ row }) => h(EditButton, { id: row.original.id }),
    enableSorting: false,
  },
]

const toggleState = ref(false)
const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('Kristin')
const isDisabled = ref(true)

function handleClick() {
  alert('hello!')
}

const open = ref(false)
const eventDateRef = ref(new Date())
const timerRef = ref(0)

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

function prettyDate(date) {
  // function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date)
}

function handleToastClick() {
  open.value = false
  window.clearTimeout(timerRef.value)
  timerRef.value = window.setTimeout(() => {
    eventDateRef.value = oneWeekAway()
    open.value = true
  }, 100)
}
</script>

<template>
  <!-- TABS -->
  <TabsRoot
    class="flex flex-col w-full sm:w-[300px] shadow-[0_2px_10px] shadow-blackA4"
    default-value="tab1"
  >
    <TabsList
      class="relative shrink-0 flex border-b border-mauve6"
      aria-label="Manage your account"
    >
      <TabsIndicator
        class="absolute px-8 left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300"
      >
        <div class="bg-grass8 w-full h-full" />
      </TabsIndicator>
      <TabsTrigger
        class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tl-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black"
        value="tab1"
      >
        Account
      </TabsTrigger>
      <TabsTrigger
        class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black"
        value="tab2"
      >
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent
      class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <p class="mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label class="text-[13px] leading-none mb-2.5 text-green12 block" for="name"> Name </label>
        <input
          id="name"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
          value="Pedro Duarte"
        />
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label class="text-[13px] leading-none mb-2.5 text-green12 block" for="username">
          Username
        </label>
        <input
          id="username"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
          value="@peduarte"
        />
      </fieldset>
      <div class="flex justify-end mt-5">
        <button
          class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"
        >
          Save changes
        </button>
      </div>
    </TabsContent>
    <TabsContent
      class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <p class="mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal">
        Change your password here. After saving, you'll be logged out.
      </p>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label class="text-[13px] leading-none mb-2.5 text-green12 block" for="currentPassword">
          Current password
        </label>
        <input
          id="currentPassword"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
          type="password"
        />
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label class="text-[13px] leading-none mb-2.5 text-green12 block" for="newPassword">
          New password
        </label>
        <input
          id="newPassword"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
          type="password"
        />
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label class="text-[13px] leading-none mb-2.5 text-green12 block" for="confirmPassword">
          Confirm password
        </label>
        <input
          id="confirmPassword"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none"
          type="password"
        />
      </fieldset>
      <div class="flex justify-end mt-5">
        <button
          class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"
        >
          Change password
        </button>
      </div>
    </TabsContent>
  </TabsRoot>

  <!-- BUTTON -->
  <button
    class="px-[10px] text-green9 bg-slate-50 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-slate-200 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7"
    style="margin-left: auto"
  >
    Button
  </button>
  <button
    :disabled="isDisabled"
    class="px-[10px] text-green9 bg-slate-50 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-slate-200 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 disabled:cursor-not-allowed disabled:bg-slate-300"
    style="margin-left: auto"
  >
    Disabled Button with Props
  </button>

  <!-- MENU -->
  <DropdownMenuRoot v-model:open="toggleState">
    <DropdownMenuTrigger
      class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-grass11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Customise options"
    >
      <Icon icon="radix-icons:hamburger-menu" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
        <DropdownMenuItem
          value="New Tab"
          class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
          @click="handleClick"
        >
          New Tab
          <div
            class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⌘+T
          </div>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            value="more toolsz"
            class="group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
          >
            More Tools
            <div
              class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              <Icon icon="radix-icons:chevron-right" />
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent
              class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              :side-offset="2"
              :align-offset="-5"
            >
              <DropdownMenuItem
                class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Save Page As…
                <div
                  class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                >
                  ⌘+S
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Create Shortcut…
              </DropdownMenuItem>
              <DropdownMenuItem
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Name Window…
              </DropdownMenuItem>
              <DropdownMenuSeparator class="h-[1px] bg-green6 m-[5px]" />
              <DropdownMenuItem
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Developer Tools
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem
          value="New Window"
          class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
        >
          New Window
          <div
            class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⌘+N
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          value="New Private Window"
          class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
          disabled
        >
          New Private Window
          <div
            class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⇧+⌘+N
          </div>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            value="more tools"
            class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none w-full outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
          >
            More Tools
            <div
              class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
            >
              <Icon icon="radix-icons:chevron-right" />
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent
              class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              :side-offset="2"
              :align-offset="-5"
            >
              <DropdownMenuItem
                class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Save Page As…
                <div
                  class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                >
                  ⌘+S
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Create Shortcut…
              </DropdownMenuItem>
              <DropdownMenuItem
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Name Window…
              </DropdownMenuItem>
              <DropdownMenuSeparator class="h-[1px] bg-green6 m-[5px]" />
              <DropdownMenuItem
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Developer Tools
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger
                  value="more toolsz"
                  class="group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                >
                  More Tools
                  <div
                    class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                  >
                    <Icon icon="radix-icons:chevron-right" />
                  </div>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent
                    class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    :side-offset="2"
                    :align-offset="-5"
                  >
                    <DropdownMenuItem
                      class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                    >
                      Save Page As…
                      <div
                        class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                      >
                        ⌘+S
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                    >
                      Create Shortcut…
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                    >
                      Name Window…
                    </DropdownMenuItem>
                    <DropdownMenuSeparator class="h-[1px] bg-green6 m-[5px]" />
                    <DropdownMenuItem
                      class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                    >
                      Developer Tools
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger
                        value="more toolsz"
                        class="group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                      >
                        More Tools
                        <div
                          class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                        >
                          <Icon icon="radix-icons:chevron-right" />
                        </div>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent
                          class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                          :side-offset="2"
                          :align-offset="-5"
                        >
                          <DropdownMenuItem
                            class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          >
                            Save Page As…
                            <div
                              class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                            >
                              ⌘+S
                            </div>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          >
                            Create Shortcut…
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          >
                            Name Window…
                          </DropdownMenuItem>
                          <DropdownMenuSeparator class="h-[1px] bg-green6 m-[5px]" />
                          <DropdownMenuItem
                            class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          >
                            Developer Tools
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem
                class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              >
                Developer Tools
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator class="h-[1px] bg-green6 m-[5px]" />
        <DropdownMenuCheckboxItem
          v-model:checked="checkboxOne"
          class="group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
        >
          <DropdownMenuItemIndicator
            class="absolute left-0 w-[25px] inline-flex items-center justify-center"
          >
            <Icon icon="radix-icons:check" />
          </DropdownMenuItemIndicator>
          Show Bookmarks
          <div
            class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
          >
            ⌘+B
          </div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          v-model:checked="checkboxTwo"
          class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
        >
          <DropdownMenuItemIndicator
            class="absolute left-0 w-[25px] inline-flex items-center justify-center"
          >
            <Icon icon="radix-icons:check" />
          </DropdownMenuItemIndicator>
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator class="h-[1px] bg-green6 m-[5px]" />

        <DropdownMenuLabel class="pl-[25px] text-xs leading-[25px] text-mauve11">
          People
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup v-model="person">
          <DropdownMenuRadioItem
            class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
            value="pedro"
          >
            <DropdownMenuItemIndicator
              class="absolute left-0 w-[25px] inline-flex items-center justify-center"
            >
              <Icon icon="radix-icons:dot-filled" />
            </DropdownMenuItemIndicator>
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
            value="colm"
          >
            <DropdownMenuItemIndicator
              class="absolute left-0 w-[25px] inline-flex items-center justify-center"
            >
              <Icon icon="radix-icons:dot-filled" />
            </DropdownMenuItemIndicator>
            Colm Tuite
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuArrow class="fill-white" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>

  <!-- MODAL / DIALOG with Form -->
  <DialogRoot>
    <DialogTrigger
      class="text-grass11 font-semibold shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
    >
      Edit profile
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold"> Edit profile </DialogTitle>
        <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <fieldset class="mb-[15px] flex items-center gap-5">
          <label class="text-grass11 w-[90px] text-right text-[15px]" for="name"> Name </label>
          <input
            id="name"
            class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset class="mb-[15px] flex items-center gap-5">
          <label class="text-grass11 w-[90px] text-right text-[15px]" for="username">
            Username
          </label>
          <input
            id="username"
            class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            defaultValue="@peduarte"
          />
        </fieldset>
        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button
              class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Save changes
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>

  <!-- EVENT EXAMPLE WITH TOASTS -->
  <ToastProvider>
    <button
      class="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-grass11 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
      @click="handleToastClick"
    >
      Add to calendar
    </button>

    <ToastRoot
      v-model:open="open"
      class="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
    >
      <ToastTitle class="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
        Scheduled: Catch up
      </ToastTitle>
      <ToastDescription as-child>
        <time
          class="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
          :dateTime="eventDateRef.toISOString()"
        >
          {{ prettyDate(eventDateRef) }}
        </time>
      </ToastDescription>
      <ToastAction class="[grid-area:_action]" as-child alt-text="Goto schedule to undo">
        <button
          class="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8"
        >
          Undo
        </button>
      </ToastAction>
    </ToastRoot>
    <ToastViewport
      class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none"
    />
  </ToastProvider>

  <!-- <div class="container mx-auto px-8 py-8"> -->
  <DataTable :data="people" :columns="columnsPeople" />
  <!-- </div> -->
</template>
