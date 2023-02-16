# Components

## Component locations

- Components used for rendering as a '*Column Component*' are placed within `/components/content/` this is the **content** of the website.
- Components used for rendering, any component that is **not** used as 'content' is placed in `/components/website/`

If a component is used as both content and for the website it is supposed to be placed in `/components/content/` regardless. (This scenario is not desirable)

## Naming
Naming rules for components within these folders.

### List
A component that is a list of an existing components should be name `componentList`. 
For example a component that generates a list of `singleApple` should be name `appleList`

### Set
A component that is used as a collection of other Components should be named `componentSet`.
For example a component that implements `appleList`, `pearList` should be named `fruitSet`