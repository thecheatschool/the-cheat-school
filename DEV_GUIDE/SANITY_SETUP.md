# Setting Up Sanity CMS - Quick Guide

## Prerequisites
- Node.js installed (v18 or higher recommended)
- An existing Sanity account at [sanity.io](https://www.sanity.io)

---

## Step 1: Install the Sanity CLI
```bash
npm install -g @sanity/cli
```

---

## Step 2: Initialize a Sanity Project
```bash
npx sanity init
```

**When prompted, select the following options:**
- **Project:** Choose your existing project (or create a new one)
- **Dataset:** `production`
- **Template:** `Blog (schema)`
- **TypeScript:**
  - `No` (choose Yes only if your frontend uses TypeScript)
- **Package manager:** `npm`

This will create a new folder called `sanity-studio`.

---

## Step 3: Run & Deploy the Sanity Studio

### Run locally
```bash
cd sanity-studio
npm run dev
```
→ Opens the studio at `http://localhost:3333`  
Test it by creating a sample blog post.

### Deploy the studio online
```bash
npx sanity deploy
```
Enter a hostname (e.g., `my-blog`) → Your studio will be live at `https://my-blog.sanity.studio`

---

## Step 4: Configure CORS Origins
1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project → **Settings** → **API** → **CORS Origins**
3. Add these origins (with "Allow credentials" checked):
   - `http://localhost:5173` → for local development (Vite default port)
   - `https://your-site.vercel.app` → your production URL
4. Save

---

## Step 5: Install Sanity Packages in Your React Project
```bash
# From your React app root (not inside sanity-studio)
npm install @sanity/client @sanity/image-url @portabletext/react
```

> Note: `react-portable-text` is now officially `@portabletext/react`

---

## Step 6: Create the Sanity Client Config
Create `src/lib/sanityClient.js` (or `src/sanity/client.js`):

```javascript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'YOUR_PROJECT_ID',   // Find this in sanity.io/manage
  dataset: 'production',
  useCdn: true,                   // `false` if you want fresh data every request
  apiVersion: '2024-01-01',       // Use today's date for future compatibility
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
```

---

## Step 7: Fetch & Display Blog Posts
Example components are in:
- `src/pages/BlogsPage.jsx` → list of all posts
- `src/pages/BlogDetailPage.jsx` → single post with Portable Text rendering

(Feel free to copy/adapt those components as needed)

---

## Step 8: Deploy Your Frontend
```bash
git add .
git commit -m "Add Sanity CMS integration"
git push
```
Vercel (or your hosting provider) will auto-deploy. Done! ✅

---

## Updating Content (No Code Required!)
Non-technical editors can create/edit blog posts at:  
`https://your-hostname.sanity.studio`

Changes appear instantly on the live site (thanks to the CDN).

---

## Helpful Links
- Official Sanity Docs → [https://www.sanity.io/docs](https://www.sanity.io/docs)
- Sanity Manage Dashboard → [https://www.sanity.io/manage](https://www.sanity.io/manage)

---

**All set!** Your blog is now powered by a professional headless CMS. 🚀
```

Just replace `YOUR_PROJECT_ID` and the example URLs with your actual values, and you're good to go!

---