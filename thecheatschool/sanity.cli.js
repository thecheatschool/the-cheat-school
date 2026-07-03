import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: '4x6wdy47',
    dataset: 'production'
  },
  deployment: {




    autoUpdates: true
  }
});