## JAMstack Site

### Static Site

- Currently just using my own static site generator for this POC to try it out.

### Netlify

"Netlify is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps."

- https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/
- https://www.netlify.com/blog/2016/10/18/how-our-build-bots-build-sites/

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
- It runs NPM Install (I didn't ask it to - does it always do this? Can I use yarn? What version of node is this?)
- Says it's using v6.10.1 of node, is it using nvmrc or is it configured to use LTS? IT USES NVMRC!
- Then it runs `gulp build`
- It failed! "Error deploying site: lstat /mnt/build-work/1491387070249918744/repo/netlify-build: no such file or directory" does build/target dir need to exist? (Image 4)









### CMS: Netlify

- Netlify CMS relies on the GitHub API for managing files, so site needs to be stored in a GitHub repo.
