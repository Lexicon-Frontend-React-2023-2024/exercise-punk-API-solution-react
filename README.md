# Exercise Punk API solution with React

**This solution not just only contain an actual solution proposal but also information about Sass, asynchronous JS, state management, hooks and react specific routing**

<details>
<summary>Table of content</summary>

- [Sass](#sass)

  - [Sass or SCSS?](#sass-or-scss)
  - [Nesting](#nesting)
  - [Variables](#variables)
  - [@use](#use)
  - [@forward](#forward)
  - [@mixin and @include](#mixin-and-include)

  </details>

## Sass

Sass _( Syntactically Awesome Stylesheets )_ is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It adds functionality to CSS, making stylesheets more maintainable and easier to write. SassScript is the scripting language itself, and it comes in two syntax formats: Sass and SCSS.

When using vite.js, there are no extra configurations we have to do in order to use Sass, or other pre-processors, like less. It has already built-in support for it. We do however need the install the pre-processer itself.

[Official Sass Docs](https://sass-lang.com/)

```bash
# .scss and .sass
npm install -D sass
```

[Back to top](#exercise-punk-api-solution-with-react)

### Sass or SCSS?

- **Sass Syntax:** Uses indentation and line breaks instead of curly braces and semicolons.

```scss
body
  font:
    family: Arial, sans-serif
    size: 16px

```

- **SCSS Syntax:** Uses the same syntax as traditional CSS with curly braces and semicolons.

```scss
body {
  font: {
    family: Arial, sans-serif;
    size: 16px;
  }
}
```

**Key differences**

1. Syntax

The primary difference lies in the syntax. Sass uses indentation and line breaks for nesting and separation, while SCSS uses traditional CSS syntax with curly braces and semicolons.

2. Terminators

`Sass` uses indentation to indicate nesting, and there are no semicolons or braces to terminate statements or blocks. `SCSS` uses semicolons to terminate statements and curly braces to define blocks, just like in `CSS`.

3. Ease of Adoption

`SCSS` is more widely adopted and used, especially in larger projects or teams where familiarity with `CSS` is a significant consideration.
`Sass` syntax might be preferred by some developers who appreciate its brevity and cleaner appearance, but it has a steeper learning curve.

4. File extensions

   - `Sass` files have the `.sass` extension.
   - `SCSS` files have the `.scss` extension.

5. Compatibility

`SCSS` is more compatible with existing `CSS` syntax. You can take a valid `CSS` file and change the file extension to `.scss` to start using `SCSS` immediately. `Sass` syntax requires a more significant departure from `CSS`, and existing `CSS` files may need more modifications to be valid `Sass`.

[Back to top](#exercise-punk-api-solution-with-react)

### Nesting

[Back to top](#exercise-punk-api-solution-with-react)

### Variables

[Back to top](#exercise-punk-api-solution-with-react)

### @use

[Back to top](#exercise-punk-api-solution-with-react)

### @forward

[Back to top](#exercise-punk-api-solution-with-react)

### @mixin and @include

[Back to top](#exercise-punk-api-solution-with-react)
