
//// CHAT GPT ASSISTED HERE... I TRIED /////
const groups = document.querySelectorAll("div");

function switchImg(display, before, after) {
  // compare attribute values to avoid absolute URL vs relative issues
  const curr = display.getAttribute("src");
  const srcBefore = before.getAttribute("src");
  const srcAfter  = after.getAttribute("src");

  display.setAttribute("src", curr === srcBefore ? srcAfter : srcBefore);
}

groups.forEach(group => {
  const display = group.querySelector(".displayImg");
  const before  = group.querySelector(".before");
  const after   = group.querySelector(".after");

  // one handler reused for all three events
  const handler = () => switchImg(display, before, after);

  group.addEventListener("mouseenter", handler); // nicer than mouseover (ignores child bubbles)
  group.addEventListener("mouseleave", handler); // nicer than mouseout
  group.addEventListener("click", handler);
});

