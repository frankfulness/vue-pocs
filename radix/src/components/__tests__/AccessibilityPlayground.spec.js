import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AccessibilityPlayground from '../AccessibilityPlayground.vue'
import { nextTick } from 'vue'
import {
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  ToastProvider,
  ToastRoot,
} from 'radix-vue'

// Mock the Icon component
vi.mock('@iconify/vue', () => ({
  Icon: {
    name: 'Icon',
    render: () => null,
  },
}))

describe('AccessibilityPlayground.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AccessibilityPlayground, {
      global: {
        components: {
          // Register Radix components globally
          TabsContent,
          TabsIndicator,
          TabsList,
          TabsRoot,
          TabsTrigger,
          DropdownMenuRoot,
          DropdownMenuTrigger,
          DropdownMenuContent,
          DialogRoot,
          DialogTrigger,
          DialogContent,
          ToastProvider,
          ToastRoot,
        },
        stubs: {
          Icon: true,
          // Stub portal-related components
          DialogPortal: true,
          DialogOverlay: true,
          DropdownMenuPortal: true,
          ToastViewport: true,
        },
      },
    })
  })

  describe('Initial Rendering', () => {
    it('renders the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('renders tabs section', () => {
      const tabsList = wrapper.find('[aria-label="Manage your account"]')
      expect(tabsList.exists()).toBe(true)
    })

    it('renders tab triggers', () => {
      const tabTriggers = wrapper.findAll('button[role="tab"]')
      expect(tabTriggers.length).toBe(2)
    })

    it('has disabled button with correct properties', () => {
      const disabledButton = wrapper.find('button[disabled]')
      expect(disabledButton.exists()).toBe(true)
      expect(disabledButton.text()).toBe('Disabled Button with Props')
      expect(disabledButton.attributes('disabled')).toBeDefined()
    })
  })

  describe('Tab Content', () => {
    it('renders tab contents', async () => {
      await nextTick()
      const tabContents = wrapper.findAll('[role="tabpanel"]')
      expect(tabContents.length).toBeGreaterThan(0)
    })

    it('has correct tab structure', () => {
      const tabsContainer = wrapper.find('[aria-label="Manage your account"]')
      expect(tabsContainer.exists()).toBe(true)
    })
  })

  describe('Dropdown Menu', () => {
    it('renders dropdown menu structure', () => {
      const menuButton = wrapper.find('button[aria-label="Customise options"]')
      expect(menuButton.exists()).toBe(true)
    })

    it('handles checkbox state changes', async () => {
      wrapper.vm.checkboxOne = true
      await nextTick()
      expect(wrapper.vm.checkboxOne).toBe(true)

      wrapper.vm.checkboxTwo = true
      await nextTick()
      expect(wrapper.vm.checkboxTwo).toBe(true)
    })
  })

  describe('Dialog/Modal', () => {
    it('renders dialog structure', () => {
      const editProfileButton = wrapper.find('button', { text: 'Edit profile' })
      expect(editProfileButton.exists()).toBe(true)
    })
  })

  describe('Toast Functionality', () => {
    it('renders toast structure', () => {
      const addToCalendarButton = wrapper.find('button', { text: 'Add to calendar' })
      expect(addToCalendarButton.exists()).toBe(true)
    })

    it('has initial toast state', () => {
      expect(wrapper.vm.open).toBe(false)
    })

    it('formats date correctly', () => {
      const testDate = new Date('2024-01-21T12:00:00')
      const formattedDate = wrapper.vm.prettyDate(testDate)
      expect(formattedDate).toMatch(/January 21, 2024/)
    })
  })

  describe('State Management', () => {
    it('manages toggle state', async () => {
      expect(wrapper.vm.toggleState).toBe(false)
      wrapper.vm.toggleState = true
      await nextTick()
      expect(wrapper.vm.toggleState).toBe(true)
    })

    it('manages person selection', async () => {
      expect(wrapper.vm.person).toBe('Kristin')
      wrapper.vm.person = 'pedro'
      await nextTick()
      expect(wrapper.vm.person).toBe('pedro')
    })
  })

  describe('Component Methods', () => {
    it('calculates one week away correctly', () => {
      const now = new Date()
      const result = wrapper.vm.oneWeekAway()
      const expectedDate = new Date(now.setDate(now.getDate() + 7))
      expect(result.getDate()).toBe(expectedDate.getDate())
    })

    it('handles toast click', async () => {
      vi.useFakeTimers()
      await wrapper.vm.handleToastClick()
      expect(wrapper.vm.open).toBe(false)
      vi.advanceTimersByTime(150)
      expect(wrapper.vm.open).toBe(true)
      vi.useRealTimers()
    })
  })

  afterEach(() => {
    wrapper.unmount()
    vi.restoreAllMocks()
  })
})
