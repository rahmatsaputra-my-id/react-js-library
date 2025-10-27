# React JS Library

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)  
A React component and utility library developed by Rahmat Saputra to simplify and accelerate the development of modern React applications.

---

## 🔍 Overview

**React JS Library** provides a set of reusable UI components and custom utilities built with TypeScript and React.  
It aims to help developers build scalable and maintainable front-end applications quickly and efficiently.

---

## ✅ Key Features

- Reusable and customizable UI components (e.g., Button, Modal, Input).
- Custom React hooks for state management, form handling, and side effects.
- Written in **TypeScript** for full type safety.
- Configured with **Rollup** for optimized production builds.
- Ready for unit testing and CI/CD integration.

---

## 📦 Installation

```bash
# via npm
npm install @rahmatsaputra-my-id/react-js-library

# or via yarn
yarn add @rahmatsaputra-my-id/react-js-library
```

> Note: Update the package name based on the actual npm publication.

---

## 🛠️ Usage Example

```tsx
import React from "react";
import { Button } from "@rahmatsaputra-my-id/react-js-library";

function App() {
  return (
    <div>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>
    </div>
  );
}

export default App;
```

---

## 🧩 Available Exports

- `Button` – Standard button component with `onClick`, `children`, and `variant` props.
- `Modal` – Overlay dialog with `isOpen`, `onClose`, and `children` props.
- _(Add more components or utilities as the library grows.)_

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit and push your changes.
4. Open a pull request to the `master` branch.
5. Follow coding standards and documentation guidelines.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

### 💡 Author

**Rahmat Saputra**

- 🌐 [rahmatsaputra.my.id](https://rahmatsaputra.my.id)
- 💼 [GitHub: rahmatsaputra-my-id](https://github.com/rahmatsaputra-my-id)
