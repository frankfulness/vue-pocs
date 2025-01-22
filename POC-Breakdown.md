# ⛰️ Steps

1. Scaffold all 3 projects (1 was stretch, we got 4 total)
2. Add the libraries to each project (validate running of apps)
3. Figure out what is a great Accessibilty Paradigm for Ui to determine what components to use in all 3.
4. Identify from the pros and cons of each, how the project can test all of them in same project.
5. Hit a few cons from the research we have done.

- TypeScript
- How difficult is it to go backward or swap out, the level of dependency.
- Test frameworks & styling practical details.
- Consistency with documentation, helpful?
- Learning curve, adaptability, velocity

Components to use:

1. Tabs
2. Buttons
3. Form with input
4. Props
5. Events
6. Unit test with vitest
7. 508 compliance Axe locally until e2e
8. Smaller screen site (consideration)
9. Dark mode / themes / style considerations for overrides or customizations to match design specs

# ⚙️ I. Quasar

## 3 OPTIONS: Quasar CLI, Vite plugin, & Vue CLI Plugin

- So, Quasar CLI you have to create the entire project through this.
- Vite Plugin makes it easy to add, but you lose a lot & all SSR capabilities,
- Vue CLI plugin is in maintenance mode, WARNED to use Quasar CLI

### CLI vs Plugin, Pros & Cons

<https://quasar.dev/start/quasar-cli>

Without CLI you lose SSR, PWA, crossplatform (Electron), better hot reloading/server features, lose preconfig build commands, lose unified configuration, and much more.
Essentially, CLI means project regenerate/rewrite. Vite Plugin means lower quality/support.

The documentation completely lacked in explaining plugin installation. For example:
For installing Vue devtools you have to create a boot/devtools.js file, and update the quasar.config.js file in 4 locations (boot, vitePlugins, framework, & build) after installing the dependency. And though we input everything that we should, we still could not get them in. No documentation provided from Quasar outside Electron. This means, due to inability to install browser extensions, we get NO Vue devtools with this CLI setup.

1. Once fully rigged up, copy paste code is there, but the script code they provide for the component api doesn't work / errors with eslint etc (Dialog Prompt example), the documentation links to codepen html/js, but it's not just "Vue" ready though in the "Vue components" section, took a minute to figure out how to properly do it with different imports/script.
2. Style overriding quasar's pure Material UI influence is challenging. Quasar is probably one of the worst frameworks to get working with Tailwind.
3. No TypeScript config, seems difficult to move to TypeScript in the future.
4. The Vitest support for Quasar was not found in documentation, might have to utilize a dependency in order to set it up, may not be too complex, but time investment not worthwhile currently.  <https://testing.quasar.dev/packages/unit-vitest/>
5. Axe dev tools reveals fairly standard need to add custom accessibility attributes.
6. Theming and styling in general is standard lock in in. <https://quasar.dev/style/theme-builder>
7. Responsivity is nothing special, just Grid / Layout like every other component library.
8. Table implementation and documentation and support for customization is lacking, potentially concerning.

Quasar Vite-Plugin flavor was easier to set up, but you lose essentially everything Quasar really offers.

# 🏎️ II. PrimeVue + Tailwind

1. Immediately noticeable how much better/clearer the documentation is than Quasar.
2. Easy to setup, install TailwindCSS and quickly configure the Vue app.
3.
4.
5.
6.
7.
8.

# 🏁 III. Radix + Tailwind

Video example of Accessibility stress test:
<https://github.com/user-attachments/assets/f6cdd50f-96a2-4c93-9dc5-5fb5d52e3f19>
![Screenshot 2025-01-21 at 4 37 13 PM](https://github.com/user-attachments/assets/3cdae166-5f87-4c7f-a2c9-03386227f5cc)

1. Installation very smooth, easy to jump right into adding components. Component features in documentation specify it's compliance to accessibility.

- Keyboard navigation and Focus management documentation holds up in accessibility: <https://www.radix-vue.com/overview/accessibility.html>

2. TailwindCSS configuration is straight forward. Every component has a link to stackblitz example utilized as well as the tailwindcss config for css transitions, etc.
3. TypeScript is opt in, but only for intellisense for usage of Radix components, simply omit lang='ts' from the `<script>` of a component, easy to add ts later.
4. Testing/TDD, straight forward to work with vitest, wrote a `AccessibilityPlayground.spec.js` test to hit basics of every single component brought in.
5. 508 compliance, checked full scan from Axe DevTools
6. Dark/Light theme
7. Responsivity implementation exists baked in, didn't input time for layout.
8. **POTENTIAL BLOCKER Radix** doesn't have a Data Table component out the box because it acknowledges that there are better table solutions out there, like AG Grid or the underlying TanStack Table v8 (used under the hood of AG Grid). Thus, I did implement a fairly simply tailwind styled TanStack Table in vue showing only a couple of the customizeable tables we can make for free <https://tanstack.com/table/latest/docs/framework/vue/examples/row-selection>

Running tests, tailwindcss, application, and poc breakdown in neovim
![Screenshot 2025-01-21 at 4 52 16 PM](https://github.com/user-attachments/assets/21438ff8-19a4-44ba-a5cf-959c3d5c5446)

**Alternative considerations for tables is an entirely larger discussion outside of component libraries:**

- Kendo UI (Cost) <https://www.telerik.com/kendo-vue-ui/components/grid/>
- AG Grid (Cost) <https://www.ag-grid.com/javascript-data-grid/licensing/>
- RevoGrid <https://rv-grid.com/demo/>
- Handsontable (Excel replacement)  <https://handsontable.com/docs/javascript-data-grid/vue3-hot-reference/>
- Bryntum Grid <https://bryntum.com/products/grid/docs/api/widgets/Grid/view/Grid>
- Vue3-easy-data-table <https://hc200ok.github.io/vue3-easy-data-table-doc/getting-started.html>
- Vue 3 table lite <https://vue3-lite-table.vercel.app/advance-examples.html>
- Datatables <https://datatables.net/examples/basic_init/>
- More examples <https://www.vuetoolbox.com/categories/table>
- Tanstack Table for vue <https://github.com/drehimself/tanstack-table-vue-example/tree/main> & <https://www.youtube.com/watch?v=qaXYtT_WJBw>
- Codesandbox samples for Vue <https://codesandbox.io/search?refinementList%5Btemplate%5D=&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=%40tanstack%2Fvue-table&page=1&configure%5BhitsPerPage%5D=12>

# 🪴 IV. Nuxt with Nuxt UI + TailwindCSS

1. Quick to generate a Nuxt application. Configuration documentation is straight forward. <https://nuxt.com/docs/getting-started/configuration>
2. TypeScript opt out or in no problem, for form validation Yup > Zod if no TS.
3. Component Library: It appears Nuxt UI has a decent free version and appears to be the go to for the component library choice for Nuxt. However, there is a Pro/Premium component version of this. <https://ui.nuxt.com/pro/pricing> fortunately it's a one time cost for life for 5 developers, there also appears to be a Figma Kit Pro for the 1500+ component & variants which has Tailwind CSS assets and icons included.
4. TODO: Didn't implement Vitest yet
5. 508 Axe DevTools initially had more flagged issues, but this is simply because you have to manually add aria labels properly, it's not a problem, just needs to be done correctly. Potentially section in MR's and e2e test for 508 itself to catch any lack.
6. Dark/Light theme implemented out the box.
7. Responsivity is supported out the box.
8. Has Table component and implemented it.
9. Nuxt with Tailwind Quick & Easy Setup <https://nuxt.com/modules/tailwindcss>
![Screenshot 2025-01-22 at 8 56 27 AM](https://github.com/user-attachments/assets/cf28d51a-fcd8-4500-a70e-5c5feeb3d11b)

# 📏 508 Compliance - Axe DevTools

Initial look:-
