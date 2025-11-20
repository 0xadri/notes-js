


-------------------------------------------------------

# AI and DevOps: Heads Up

AI can be pretty bad at everything devops related. 

That includes doing project configuration with Vite, Webpack, Linter, Prettier and the likes.

-------------------------------------------------------

# Best Practices












Do NOT install "husky" plugin

Add these plugins, only add these plugins to the existing ones.
    "@typescript-eslint/parser"
    "@typescript-eslint/eslint-plugin"
    "eslint-plugin-react"
    "eslint-plugin-tailwindcss"
    "lint-staged"
    
You may have the add the below config values in the indicated files

---

// package.json

  "scripts": {
    "format": "prettier --write \"src/**/*.{js,ts,jsx,tsx,json,css,md,html}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts,jsx,tsx,json,css,md,html}\"",
  },
  
  "lint-staged": {
    "src/**/*.{js,ts,jsx,tsx,json,css,md}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
  
  
  
---

// .editorconfig

root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2
max_line_length = 120

[*.md]
trim_trailing_whitespace = false

---

// .eslintignore

node_modules
dist
build
.vite
public/mockServiceWorker.js
*.log
