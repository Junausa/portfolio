# juna-website

Portfolio website for Juna, powered by [Vitepress](https://vitepress.dev/).

## Editing & Creating Pages

Each webpage is created through a .md ([markdown](https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet)) file. Edit or create a markdown file to edit the page. Markdown files can exist within folders & subfolders too! `index.md` is your site's homepage, `[url]/page.html` would come from a .md file named `page.md`, and `[url]/folder/page.html` would come form a .md file from `folder/page.md`

### Add images

Images must live in the `public` folder. Add them in there or within a subfolder of it. Access an image via the following example: An image named `image.png` in the `public` folder can be accessed via `/image.png`. If the image was in `public/folder`, it would be `/folder/image.png`.

## Building the Website

### First time setup (do this once!)
First, you need [NodeJS](https://nodejs.org/) version 18 or higher.
Next, in a terminal with the current working directory set to the project's folder, run `npm i`

### Start a local dev instance
In a terminal with the current working directory set to the project's folder, run `npm run docs:dev`. From here, you will be provided a localhost url where you can see your site. Changes you make to files will automatically update the site too. Press q (and maybe enter) to quit out of this.