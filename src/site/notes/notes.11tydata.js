require("dotenv").config();
const settings = require("../../helpers/constants");
const properties = require("../../helpers/properties");

const allSettings = settings.ALL_NOTE_SETTINGS;
const allProperties = properties.ALL_PROPERTIES;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "/";
      }
      return data.permalink || undefined;
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
    properties: (data) => {
      const noteProperties = {};
      allProperties.forEach((property) => {
        if (property in data) {
          let noteProperty = data[property];
          let propertyValue = noteSetting;
          noteProperties[property] = propertyValue;
        }
      });
      return noteProperties;
    },
}

};
