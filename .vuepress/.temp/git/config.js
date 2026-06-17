import { GitContributors } from "/data/data/com.termux/files/home/dvnge-docs/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
