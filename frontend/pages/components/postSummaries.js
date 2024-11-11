const postSummaries = [
`
<div class="postSummary">
  <button onclick="pushWindowState('/blog/post1'); injectPost(post1)"><h2>Lorem Ipsum Dolor</h2></button>
  <button onclick="pushWindowState('/blog/post1'); injectPost(post1)"><img src="/assets/webpage.png" class="post-summary-image"></img></button>
  <p>"This is an article I wrote. It is short. ahhhhhhhhh."</p>
</div>
`,
`
<div class="postSummary">
  <button onclick="pushWindowState('/blog/test-post'); injectPost(testPost)"><h2>Lorem Ipsum Dolor</h2></button>
  <button onclick="pushWindowState('/blog/test-post'); injectPost(testPost)"><img src="/assets/webpage.png" class="post-summary-image"></img></button>
  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
</div>
`]