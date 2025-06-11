Svelte and Vanilla Frontend Challenge

## Developer info

- Full name: Juan Marcos Rigoli
- Email: [marcos@rigoli.dev](mailto:marcos@rigoli.dev)
- Contact info: https://rigoli.dev

Live version: svelte-challenge.rigoli.dev

## Challenge instructions

This coding challenge consists of four deliverables, the prompts are inside the `/prompts` folder were copied as received:

1. Navigation hover
2. Gradient background
3. To do application

For each folder, use the preview.jpg file as a reference and create a html / css / js version using the index.html (welcome to create external css / js file).

Here are some overal instructions for each exercise:

- Please don't use any framework building platform for these tests.
- Please do a pure css / js version first.
- Make considerations for Accessibility and Responsiveness.
- Use images when only necessary. SVG's are preferred.
- If you don't have a font, choose a similar one using google fonts.
- If you don't have images, you are welcome to swap them out for a similar image from pexels.com.
- Finally, re-do the exercise using the Svelte & Tailwind frameworks.
- Bonus: if you are able to add tasteful CSS animations to elements.

Specific instructions:

1. Navigation hover

   - Recreate a centered navigation similar to this with hover/active animations changing color and underlining the text.

2. Gradient background logo

   - Recreate this gradient background with a centered logo.

3. To do application

   - Recreate this web design as close as possible. Please create a javascript application making the to do application interactive. You are welcome to do a version using your preferred JS framework as well.

> **Developer Notes:** Animations for solutions **1** and **3** rely heavily on the new browsers [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API). I was hoping that by now Firefox was already implementing the feature but it seems like we will have to wait a bit longer. I've added a polyfill, but for the full experience I'd recommend testing it on Chrome.

> Vanilla HTML + CSS + JS versions are located in the repository's `static/vanilla/` folder.

#### Run locally

To run this code locally please follow these steps:

1. If you don't have the files already, clone this repository locally, for example by using the [github CLI](https://cli.github.com):
   ```text
   git clone git@github.com:rijuma/svelte-challenge.git
   ```
   Then, get into the folder by:
   ```text
   cd svelte-challenge
   ```
2. Using a terminal on the extracted/cloned folder, install the dependencies by running:
   ```text
   npm install
   ```
   > **Note:** Check **npm** documentation [here](https://www.npmjs.com) if needed.
3. Start the server by running `npm run dev` and open the browser at [http://localhost:5173](http://localhost:5173).
4. You should be able to see a home page with the details on the frontend test and a list of links to open each solution.
   > **Note:** To stop the server, just hit `Ctrl + C` in the terminal. Make sure to stop the server before closing the terminal window, otherwise the server process will remain open in the background.

> The `Dockerfile`, the `compose.yml` and the `.env.example` are just part of the configuration for the server to be deployed.
