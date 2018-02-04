var bands = require("./bands.js");

for (var key in bands.bands)
{
  console.log("A", key, "band is", bands.bands[key]);
}