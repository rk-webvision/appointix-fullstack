# AppointixFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# 🚀 Angular Frontend Setup – Complete Guide (Appointix)

---

# 🎯 1. What is Angular?

Angular is a **frontend framework** used to build:

* Single Page Applications (SPA)
* Dynamic UI (without page reload)

---

# 🧠 How Angular Works

Instead of:

* Reloading entire page ❌

Angular:

* Updates only required components ✅

---

# 🔁 Rendering Flow

Browser → Loads `index.html`
↓
Angular bootstraps app
↓
`main.ts` starts app
↓
`AppComponent` loads
↓
Routing decides which component to render

---

# 📦 2. Project Creation

## Command

```bash
ng new appointix-frontend
```

---

## What this does internally

* Creates Angular project structure
* Installs dependencies
* Configures build system
* Sets up routing (if selected)

---

# 📁 3. Folder Structure Explained

## Root Folder

```
frontend/
│
├── src/
├── angular.json
├── package.json
├── tsconfig.json
```

---

## 🔹 `src/` (Main code lives here)

```
src/
├── app/
├── assets/
├── index.html
├── main.ts
├── styles.css
```

---

# 📄 4. Important Files (Deep Understanding)

---

## 🔹 `index.html`

```html
<app-root></app-root>
```

### Meaning:

* Entry point of your app
* Angular injects UI inside `<app-root>`

---

## 🔹 `main.ts`

```ts
bootstrapApplication(AppComponent)
```

### Meaning:

* Starts Angular app
* Loads root component

---

## 🔹 `app.component.ts`

```ts
@Component({
  selector: 'app-root'
})
```

### Meaning:

* Root UI component
* Connected to `<app-root>`

---

## 🔹 `app.component.html`

```html
<router-outlet></router-outlet>
```

### Meaning:

* Placeholder where pages render

---

## 🔹 `app-routing.module.ts`

### Purpose:

* Controls navigation

Example:

```ts
{ path: '', component: BookingFormComponent }
```

---

# 🧠 How Routing Works

URL → Angular Router
↓
Matches route
↓
Loads component
↓
Renders inside `<router-outlet>`

---

# 📦 5. package.json

Contains:

* Dependencies (Angular libraries)
* Scripts

Example:

```json
"scripts": {
  "start": "ng serve"
}
```

---

# ⚙️ 6. angular.json

### Purpose:

* Build configuration
* Assets, styles, scripts

---

# 🧪 7. Running the App

```bash
ng serve
```

### What happens:

* Starts dev server
* Compiles code
* Enables hot reload

---

## Open:

```
http://localhost:4200
```

---

# 🔁 Hot Reload Explained

Change code → Auto refresh UI
(No manual reload needed)

---

# 🧱 8. Angular Architecture (Your Project)

```
app/
│
├── core/        → services (API, auth)
├── shared/      → reusable components
├── features/
│     ├── booking/
│     ├── business/
│     └── auth/
```

---

# 🧠 Why This Structure?

| Folder   | Purpose                 |
| -------- | ----------------------- |
| core     | global logic            |
| shared   | reusable UI             |
| features | actual business modules |

---

# 🧩 9. Component System

Create component:

```bash
ng generate component booking-form
```

---

## Generated files:

```
booking-form/
├── booking-form.component.ts
├── booking-form.component.html
├── booking-form.component.css
```

---

## How Component Works

TS → logic
HTML → UI
CSS → styling

---

# 🔗 10. API Integration (Future)

Angular → calls backend:

```
http://localhost:8080/api/...
```

Using:

* HttpClient

---

# 🧠 11. Data Flow

User input → Component → Service → API → Backend
↓
Response → UI update

---

# 🎯 12. Your Appointix Use Case

---

## Pages

* Booking Form (Customer)
* Business Login
* Dashboard

---

## Flow

```
Customer → fills form → API call → DB stored
Business → login → sees appointments
```

---

# ⚠️ 13. Common Mistakes

❌ Mixing backend & frontend code
❌ Not using routing
❌ No folder structure
❌ Hardcoding API URLs

---

# 🚀 14. What You Learned

* Angular project structure
* Rendering flow
* Routing system
* Component architecture

---

# 🔥 15. Next Step

Build:

👉 Booking Form UI
👉 Connect to backend

---

# 💡 FINAL INSIGHT

Angular is:

```
Component-based + Reactive + Structured
```

Master this → you can build any frontend 🚀

---

