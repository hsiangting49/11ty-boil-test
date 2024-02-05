// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("name", function(name) {
      return `<div class="name">
      <div class= "username"> by ${name}</div>
      </div>`;
  });
};
