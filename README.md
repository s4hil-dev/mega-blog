# MegaBlog

A modern blog app built with React, Vite, Appwrite, Redux Toolkit, Tailwind CSS, and TinyMCE.

MegaBlog lets users sign up, log in, create posts, edit posts, upload featured images, browse published content, and manage their profile in a cleaner editorial-style interface.

## Features

- Authentication with Appwrite
- Rich text post editor with TinyMCE
- Create, edit, and delete blog posts
- Featured image upload with Appwrite Storage
- Protected routes for authenticated actions
- Responsive UI with desktop and mobile navigation
- Profile page for signed-in users
- Home page post listing with pagination

## Tech Stack

- React
- Vite
- React Router
- Redux Toolkit
- React Hook Form
- Tailwind CSS
- Appwrite
- TinyMCE
- React Icons

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd megaBlog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your environment file

Create a `.env` file in the project root and add:

```env
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
VITE_APPWRITE_BUCKET_ID=your_appwrite_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

Important:
- Do not commit real API keys or production credentials to GitHub.
- If any real keys were already committed, rotate them before publishing the repo.

### 4. Start the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

### 6. Run lint

```bash
npm run lint
```

## Appwrite Setup

This project expects:

- one Appwrite project
- one database
- one collection for posts
- one storage bucket for featured images

Your posts collection should support fields similar to:

- `title`
- `content`
- `featuredImage`
- `status`
- `userId`
- `createdAt`

Make sure your Appwrite permissions allow authenticated users to create and manage their own posts and uploaded files.

## Project Structure

```text
src/
  appwrite/       Appwrite auth and database/storage services
  components/     Shared UI components
  conf/           Environment configuration mapping
  pages/          Route-level pages
  store/          Redux store and auth slice
```

## Main Pages

- `/` Home page with post listing and pagination
- `/login` Login page
- `/signup` Signup page
- `/add-post` Create a new post
- `/edit-post/:slug` Edit an existing post
- `/post/:slug` Read a single post
- `/profile` User profile page
- `/about` About page

## Notes

- TinyMCE requires a valid API key in `VITE_TINYMCE_API_KEY`.
- Featured images use Appwrite Storage.
- The app uses client-side routing with protected sections for authenticated users.

## License

This project is available for personal and educational use. Update this section if you want to add a specific license such as MIT.
