# — PyCodeX —

<img src="https://github.com/diegobajetti/seg3125_p2_s5/blob/d14e191e763e46a28608a13c968268ed6535cb1c/public/images/gif-1.gif" alt="PyCodeX Home Page" width="100%"/>

This repository uses the [`gh-pages`][gh-pages] `npm` package to build and deploy a React application. See a live, interactive version of the website [here][live-website].

## Getting Started: [`gh-pages`][gh-pages]

### 1. Install the `gh-pages` `npm` package

1. Install the package specified above by executing the following command.

   ```bash
   npm install gh-pages --save-dev
   ```

   > The [official documentation][gh-pages] recommends installing the `npm` package as a development dependency; however, this _could_ be problematic. Try installing as a normal dependency if it does not work.

### 2. Add a `homepage` property to the `package.json` file

1. Open the `package.json` file in a text editor.
1. Add a [`homepage`][package-json-homepage] property.

   ```diff
   {
     "name": "seg3125_p2.github.io",
     "version": "0.1.0",
   + "homepage": "http://diegobajetti.github.io/seg3125_p2_s5",
     [...]
   }
   ```

   > The `homepage` property should follow this format: `http://{github_username}.github.io/{repo_name}`

### 3. Add deployment scripts to the `package.json` file

1. Open the `package.json` file in a text editor.
1. Add a [`predeploy`][package-json-predeploy] and [`deploy`][package-json-deploy] property.

   ```diff
   "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
   + "predeploy": "npm run build",
   + "deploy": "gh-pages -d build"
   },
   ```

### 4. Deploy the React app

1. Push the app to the GitHub repository.

   ```bash
   npm run deploy
   ```

   By executing the command above, the `predeploy` and `deploy` scripts will run and the React app will be deployed. Internally, the `predeploy` script creates a distributable version of the app and the `build` script pushes the compiled app to a commit in the `gh-pages` branch.

### 5. Configure GitHub Pages

1. Under the repository name, click **Settings**.
1. In the "Code and automation" section of the sidebar, click **Pages**.
1. Configure the "Build and deployment" settings as follows:
   1. **Source**: Deploy from a branch
   1. **Branch**:
      - Branch: `gh-pages`
      - Folder: `/ (root)`
1. Click on the "Save" button

The [`gh-pages`][gh-pages] package will deploy the application to the specified [URL](#2-add-a-homepage-property-to-the-packagejson-file) whenever the `npm run deploy` command is executed. Once the command is executed successfully, a [GitHub workflow][github-action] links the GitHub page with the source files in the [`gh-pages`][gh-pages-branch] branch.

## Common Issues

### `README.md` file as website

On the first deployment of the app, the package builds the site based on the default GitHub Pages configuration. GitHub Pages displays the site by parsing the target branch (`master` by default) and identifying a source file (e.g., `index.html`, `index.md`, or `README.md`<sup>&#91;[1][github-pages-doc]&#93;</sup>). Upon creating a React app with the `npx create-react-app` command, a `README.md` file is generated and, consequently, regarded as the source file for the site. The [`gh-pages`][gh-pages-branch] branch is available _after_ the application is built for the first time, and only then the GitHub Pages configuration can be changed in order to display the correct site. After completing step [five](#5-configure-github-pages) above, deploy the application against the [`gh-pages`][gh-pages-branch] branch.

### Broken Media Display

More than likely, images and/or videos will not render in the deployed site using common `src` linking:

```html
<img src="./images/img-1.jpg" />
```

Since the website is deployed under the [`homepage`][package-json-homepage] URL, it will not recognize the source file for the image or video using local pathing. To overcome this, follow the steps below to change all `src` linking, depending on the use case.

1. Diagnose the type of media.

   1. _Background Image_

      1. Open the `.css` file that imports an image with the `background-image` property.
      1. Change the format of the `url()` value.

         ```css
         * {
           background-image: url("https://diegobajetti.github.io/seg3125_p2_s5/images/img-1.jpg");
         }
         ```

         > The `url()` value should follow this format: `https://{github_username}.github.io/{repo_name}/{file_path}`

   1. _Image/Video Tag_

      1. Open the `.html` file that utilizes the `<img/>` or `<video/>` tag.
      1. Change the format of the `src` attribute.

         ```html
         <img src={process.env.PUBLIC_URL + "/images/img-1.jpg"} />
         ```

         > The `src` attribute's value should follow this format: `process.env.PUBLIC_URL + "/{file_path}"`

   Alternatively, run the following two commands to match the two cases above:

   ```sh
   cd $(git rev-parse --show-cdup)/src
   ```

   ```sh
   grep -RIlxP --include=\*.{html,css,js} '^.*\b(?:src=|background\-image:).*$'
   ```

   `grep` is a utility for searching strings through multiple text files. Here, it is invoked with the following parameters:

   - `R` — reads all files under each directory, recursively, across all symbolic links
   - `I` — ignore binary files; process a binary file as if it did not contain matching data
   - `l` — print the name of each file for which a match was found
   - `x` — select only those matches that exactly match the whole line
   - `P` — interpret patterns as Perl-compatible regular expressions (PCREs)
   - `--include=` — search only files whose base name matches the pattern
   - Regex — find an explanation for the regular expression [here][regex-example]

1. Push these changes to the remote repository and [deploy](#4-deploy-the-react-app) the application. The global `process.env.PUBLIC_URL` variable allows for the images to be displayed when running locally _and_ when being deployed to the remote.

### Blank Page

Upon opening the deployed GitHub Pages site, the page might be blank until refreshing the browser. Follow the steps below to fix this.

1. Identify any `BrowserRouter` tags in the codebase.

1. Add the following property.

   ```html
   basename={process.env.PUBLIC_URL}
   ```

   Alternatively, run the following two commands to identify and replace the property:

   ```sh
   cd $(git rev-parse --show-cdup)/src
   ```

   ```sh
   grep -RIl --include=\*.js '<BrowserRouter' | xargs sed -i 's/<BrowserRouter/<BrowserRouter basename={process.env.PUBLIC_URL}/g'
   ```

Specifying the `basename={process.env.PUBLIC_URL}` in the routing root allows the router to extract the base URL of the project and properly display the site.

[gh-pages]: https://github.com/gitname/react-gh-pages
[live-website]: https://diegobajetti.github.io/seg3125_p2_s5/
[npm-doc]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[package-json-homepage]: https://github.com/diegobajetti/seg3125_p2_s5/blob/master/package.json#L4
[package-json-predeploy]: https://github.com/diegobajetti/seg3125_p2_s5/blob/master/package.json#L25
[package-json-deploy]: https://github.com/diegobajetti/seg3125_p2_s5/blob/master/package.json#L26
[gh-pages-branch]: https://github.com/diegobajetti/seg3125_p2_s5/tree/gh-pages
[github-action]: https://github.com/diegobajetti/seg3125_p2_s5/actions
[github-pages-doc]: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site
