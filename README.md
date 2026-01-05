# Spaceflight News Blog 

A React Single Page Application (SPA) built with **TypeScript** and **Redux Toolkit**. The application fetches space-related news articles, provides an advanced search with keyword highlighting, and features a detailed article view.

## 🛠 Tech Stack

* **Core:** React (Vite), TypeScript
* **State Management:** Redux Toolkit (Typed hooks)
* **Routing:** React Router DOM
* **UI Framework:** Material UI (MUI)
* **Styling:** SCSS (Sass), MUI System (sx props)
* **HTTP Client:** Axios
* **Utilities:** Date-fns

## Key Features

### 1. Advanced Search & Filtering
* **Priority Sorting:** The search algorithm assigns weights to matches. Matches in the **Title** have higher priority (score: 10) than matches in the **Description** (score: 1).
* **Whole Word Search:** Implemented utilizing Regex with word boundaries (`\b`) to ensure accurate matching (e.g., searching for "in" won't match "China").
* **Keyword Highlighting:** Search terms are highlighted in yellow within the article cards.

### 2. Scalable Architecture
* **Redux Store:** Manages the global state of articles to avoid prop drilling and redundant API calls.
* **Custom Hooks:** Logic for searching and filtering is encapsulated in `useArticleSearch` hook.
* **Separation of Concerns:** Strict folder structure (`components`, `pages`, `store`, `utils`, `types`).

### 3. Responsive UI
* **Grid Layout:** Adaptive grid using Material UI that scales from 1 column (mobile) to 3 columns (desktop).
* **Article Page:** Features a custom "overlap" layout where the content card overlays the header image.

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone <your-repo-link>
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📂 Project Structure

```text
src/
├── components/    # Reusable UI components (ArticleCard)
├── hooks/         # Custom hooks (useArticleSearch)
├── pages/         # Page views (HomePage, ArticlePage)
├── store/         # Redux setup (slices, store configuration)
├── types/         # TypeScript interfaces
├── utils/         # Helper functions (highlighter)
├── App.tsx        # Main application component
└── main.tsx       # Entry point