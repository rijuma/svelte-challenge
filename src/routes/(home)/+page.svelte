<h1>Svelte and Vanilla Frontend Challenge</h1>

<h2>Developer info</h2>

<ul>
  <li>Name: <b>Juan Marcos Rigoli</b></li>
  <li>
    Email: <a href="mailto:marcos@rigoli.dev" target="_blank" rel="noopener noreferer"
      >marcos@rigoli.dev</a
    >
  </li>
  <li>
    Contact info: <a href="https://rigoli.dev" target="_blank" rel="noopener noreferer"
      >https://rigoli.dev</a
    >
  </li>
  <li>
    Repository: <a
      href="https://github.com/rijuma/svelte-challenge"
      target="_blank"
      rel="noopener noreferer">https://github.com/rijuma/svelte-challenge</a
    >
  </li>
</ul>

<h2>Frontend Challenge instructions</h2>

<p>
  This coding challenge consists of four deliverables, the prompts are inside the <code
    >/prompts</code
  > folder were copied as received:
</p>

<ol>
  <li>Navigation hover</li>
  <li>Gradient background</li>
  <li>To do application</li>
</ol>

<p>
  For each folder, use the preview.jpg file as a reference and create a html / css / js version
  using the index.html (welcome to create external css / js file).
</p>

<p>Here are some overal instructions for each exercise:</p>

<ul>
  <li>Please don't use any framework building platform for these tests.</li>
  <li>Please do a pure css / js version first.</li>
  <li>Make considerations for Accessibility and Responsiveness.</li>
  <li>Use images when only necessary. SVG's are preferred.</li>
  <li>If you don't have a font, choose a similar one using google fonts.</li>
  <li>
    If you don't have images, you are welcome to swap them out for a similar image from pexels.com.
  </li>
  <li>Finally, re-do the exercise using the Svelte & Tailwind frameworks.</li>
  <li>Bonus: if you are able to add tasteful CSS animations to elements.</li>
</ul>

<p><b>Specific instructions:</b></p>

<ol>
  <li>
    <p>Navigation hover</p>
    <ul>
      <li>
        Recreate a centered navigation similar to this with hover/active animations changing color
        and underlining the text.
      </li>
    </ul>
  </li>
  <li>
    <p>Gradient background logo</p>
    <ul>
      <li>Recreate this gradient background with a centered logo.</li>
    </ul>
  </li>
  <li>
    <p>To do application</p>
    <ul>
      <li>
        Recreate this web design as close as possible. Please create a javascript application making
        the to do application interactive. You are welcome to do a version using your preferred JS
        framework as well.
      </li>
    </ul>
  </li>
</ol>

<h2>Solutions</h2>

<table>
  <thead>
    <tr>
      <th>Task</th>
      <th>Vanilla</th>
      <th>Svelte + TailwindCSS</th>
      <th>Image Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1. Navigation</th>
      <td><a href="/vanilla/1-navigation/index.html" target="_blank">Open</a></td>
      <td><a href="/1-navigation" target="_blank">Open</a></td>
      <td
        ><a href="/img/preview-01.jpg" target="_blank"
          ><img width="200" src="/img/preview-01.jpg" alt="1. Navigation hover reference" /></a
        ></td
      >
    </tr>
    <tr>
      <th>2. Gradient</th>
      <td><a href="/vanilla/2-gradient/index.html" target="_blank">Open</a></td>
      <td><a href="/2-gradient" target="_blank">Open</a></td>
      <td
        ><a href="/img/preview-02.jpg" target="_blank"
          ><img width="200" src="/img/preview-02.jpg" alt="2. Gradient background reference" /></a
        ></td
      >
    </tr>
    <tr>
      <th>3. To do</th>
      <td><a href="/vanilla/3-to-do/index.html" target="_blank">Open</a></td>
      <td><a href="/4-to-do" target="_blank">Open</a></td>
      <td
        ><a href="/img/preview-03.jpg" target="_blank"
          ><img width="200" src="/img/preview-03.jpg" alt="3. To do application reference" /></a
        ></td
      >
    </tr>
  </tbody>
</table>

<blockquote>
  <p>
    <b>Developer notes:</b> The Vanilla version is much closer to the provided image reference due
    to the tailwind token system. It is possible to set custom values to the theme but these are
    usually agreed between the design team and the dev teams. For these examples I've used
    <a
      href="https://tailwindcss.com/docs/theme#default-theme-variable-reference"
      target="_blank"
      rel="noopener noreferer">Tailwind's default design tokens</a
    > on the Tailwind version.
  </p>
  <p>
    Animations for solution <b>1</b> and solution <b>3</b> rely heavily on the new browsers
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API"
      target="_blank"
      rel="noopener noreferer">View Transition API</a
    >. I was hoping that by now Firefox was already implementing the feature but it seems like we
    will have to wait a bit longer. I've added a polyfill, but for the full experience I'd recommend
    testing it on Chrome.
  </p>
  <p>
    Vanilla HTML + CSS + JS versions are located in the repository's <code>static/vanilla/</code> folder.
  </p>
</blockquote>

<h2>Run locally</h2>

<p>To run this code locally please follow these steps:</p>

<ol>
  <li>
    If you don't have the files already, clone this repository locally, for example by using the
    <a href="https://cli.github.com" target="_blank" rel="noopener noreferer">github CLI</a>:
    <pre><code>git clone git@github.com:rijuma/svelte-challenge.git</code></pre>
    Then, get into the folder by:
    <pre><code>cd svelte-challenge</code></pre>
  </li>
  <li>
    Using a terminal on the extracted/cloned folder, install the dependencies by running:
    <pre><code>npm install</code></pre>
    <blockquote>
      <b>Note:</b> Check <b>npm</b> documentation
      <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferer">here</a> if needed.
    </blockquote>
  </li>
  <li>
    Start the server by running <code>npm run dev</code> and open the browser at
    <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>.
  </li>
  <li>
    You should be able to see a home page with the details on the frontend test and a list of links
    to open each solution.
    <blockquote>
      <b>Note:</b> To stop the server, just hit <kbd>Ctrl + C</kbd> in the terminal. Make sure to stop
      the server before closing the terminal window, otherwise the server process will remain open in
      the background.
    </blockquote>
  </li>
</ol>

<blockquote>
  The <code>Dockerfile</code>, the <code>compose.yml</code> and the <code>.env.example</code> are just
  part of the configuration for the server to be deployed.
</blockquote>
