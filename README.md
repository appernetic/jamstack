## JAMstack Site

"JavaScript, APIs and Markup"

### Resources

- https://www.netlify.com/blog/2016/11/15/new-to-jamstack-how-to-make-a-site-from-a-to-z/
- https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/
- https://www.netlify.com/blog/2016/10/18/how-our-build-bots-build-sites/
- https://www.netlifycms.org/docs/quick-start/

### Static Site

- Currently just using my own static site generator for this POC to try it out.

### Netlify

"Netlify is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps."

#### Process

- Set up a Netlify account (https://app.netlify.com/signup).
- I signed up with Github
- Now we need to connect Netlify to the our static site github repo.
- In https://app.netlify.com/ click 'new site from Git'. (Image 1)
- Under 'Continuous Deployment' select 'Github'
- Then need to authorize the Netlify to have permissions to access repo (Image 2). Click 'Authorize Application' and confirm your Git password.
- Back on the Netlify app, all repos are listed. Choose the repo for your site.
- Configure Deployment! Here you'll select the branch to deploy and configure basic build settings (e.g. `gulp build` and the directory to compile to, I set this as `netlify-build/` to test) (Image 3)
- Click 'deploy site'
- A CLI style interface starts building
- It runs NPM Install (I didn't ask it to - does it always do this? Can I use yarn?).
- If it finds a yarn.lock, it seems to use Yarn instead I think.
- Says it's using v6.10.1 of node, is it using nvmrc or is it configured to use LTS? IT USES NVMRC!
- Then it runs `gulp build`
- It failed! "Error deploying site: lstat /mnt/build-work/1491387070249918744/repo/netlify-build: no such file or directory" does build/target dir need to exist? (Image 4)
- added empty build dir (with gitkeep), pushed. try again... (Image 5)
- didn't do an npm install the second time - this is good. The npm modules are being cached.
- worked second time! So, build dir needs to exist in project.
- Netlify gives you a temporary url (https://jamstack-demo.netlify.com) to view the deploy. Has options to 'lock deploy', not sure what this does.
- The build worked, but https://jamstack-demo.netlify.com gives a 404.
- Trying again with setting the build folder to dist/ 
- YESSSSS, definitely worked this time. ok, so because Gulp is told to build to dist in the static FE, that's what it needs to be configured as in Netlify.
- So, in short, each time you commit to master, Netlify kicks off a build. Holla.

### Netlify CMS

"A CMS for static site generators. Give non-technical users a simple way to edit and add content to any site built with a static site generator."

- I *think* this requires us to use GitHub to store the site.
- For this POC I'm using Netlify so we can use that to authenticate the CMS with GitHub.
- We need to register a new OAuth application. In GitHub, go to the developer settings (https://github.com/settings/developers) Click 'Register new application' and enter the details. The Auth callback url is `https://api.netlify.com/auth/done` (Image 8)
- Once completed, go to your Netflify dashboard (https://app.netlify.com).
- Click 'Authentication' from the nav. Scroll down to Authentication Providers and click 'Install Provider' (Image 9)
- Enter the client ID and secret that Github gave you when you registered the OAuth app and click 'install provider'.

#### Installation

- Create a directory `admin` inside `src` and create index.html and config.yml files.
- index.html is the entry point the CMS interface (e.g. you can go to https://jamstack-demo.netlify.com/admin)
- Copy the html snippet from this tutorial (https://www.netlifycms.org/docs/quick-start/). NetlifyCMS JS and CSS is being delivered from a CDN for now but we should be able to require/import this in real life. (Image 10)


#### Configuration

- Since we're using GitHub for auth and Netlify for hosting, config to get started is straightforward.
- See here for snippet: https://www.netlifycms.org/docs/quick-start/#configuration
- Replace `owner-name/repo-name` in snippet with your repo path. Gonna leave branch as master for now.
- Add config for media_folder: "./src/img/uploads", It'll moan if we don't add this.


#### Collections

- Collections essentially define the content types the site will have. Configuring these is essentially the same thing as creating a new custom post type in wordpress.
- For this demo, I'm just gonna set up pages and posts.
- Add your collection(s) to the config.yml

#### Other things

- Gulp (or whatever task runner) needs to compile ./src/admin to ./dist/admin so add a task for that and also add it to the overall `build` task.
- Then, commit those changes to master. This kicks off a build in Netlify.
- Once the build is done, go to http://jamstack-demo.netlify.com/admin
- If you just see 'Loading configuration', something has gone awry.
- Check the console in dev tools. I had an error: "Error in configuration file: A `media_folder` wasn't found. Check your config.yml file.". So, it looks like the netlify cms config reqiures you to define your media location.
- Ok, added the media_folder config now it seems to work. http://jamstack-demo.netlify.com/admin.
- First thing you'll see is 'login with github' (Image 11)
- Then had to authorize application so the cms has permission to access my GitHub account. Click 'Authorize Application' (Image 12) then confirm your password.
- WOAH, got an error "Cannot read property 'replaceChild' of null" (Image 13). I *think* this is because I didn't add any collections to the config.yml. I shall try doing that.
- Running this locally, `gulp watch` then go to http://localhost:3000/admin/index.html (THIS DID NOT WORK)

