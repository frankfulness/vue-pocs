# Steps

1. Scaffold all 3 projects (1 is stretch)
2. Add the libraries to each project (validate the runs)
3. Figure out what is a great Accessibilty Paradigm for Ui to determine what components to use in all 3.
4. Identify from the pros and cons of each, how the project can test all of them in same project.
5. Hit a few cons from the research we have done.

- TypeScript
- How difficult is it to go backward or swap out, the level of dependency.
- Test frameworks & styling practical details.
- Consistency with documentation, helpful?
- Learning curve, adaptability, velocity

# Quasar

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

# PrimeVue
