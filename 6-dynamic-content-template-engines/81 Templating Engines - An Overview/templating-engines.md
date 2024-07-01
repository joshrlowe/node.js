# Available Templating Engines

## 1. EJS (Embedded JavaScript)

- Syntax:

  ```html
  <p><%= name %></p>
  ```

- Description:
  - Uses normal HTML and plain JavaScript in your templates.

## 2. Pug (formerly Jade)

- Syntax:

  ```p
  p #{name}
  ```

- Description:
  - Uses minimal HTML and a custom template language.

## 3. Handlebars

- Syntax:

  ```html
  <p>{{ name }}</p>
  ```

- Description:
  - Uses normal HTML and a custom template language.

## Summary

- **EJS**: Integrates plain JavaScript into HTML, making it simple to use for those familiar with JavaScript.
- **Pug**: Adopts a minimalistic approach with its own syntax, reducing the need for HTML but requiring learning its specific language.
- **Handlebars**: Combines the familiarity of HTML with a custom templating syntax, providing a balance between ease of use and flexibility.
