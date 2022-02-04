
## Angular project - Deploy to nexus

1. Make sure the version key in `package.json` matches your release verison eg: `"version": "5.7.0"`
2. Set NEXUS_USERNAME and NEXUS_PASSWORD as env variables in the terminal like below or add it in bashrc file.
```
export NEXUS_USERNAME=username
export NEXUS_PASSWORD=password
```
3. run `npm run deploy-to-nexus` in terminal
4. To customize any more please check `build.js` and `deploy.js` files