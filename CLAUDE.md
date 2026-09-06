# jamesmandrews.com

## What this is

**A personal site, not a professional one.** The point is to share things James
actually does and enjoys. It is not a portfolio, not a landing page, and not a
résumé with nicer type.

The test for anything proposed for the home page: *would this be strange on
LinkedIn?* If no, it probably doesn't belong. A résumé already exists — it lives
at `/cv/`, and that is where professional detail goes. Keep it out of the home
page.

Recurring failure mode worth naming: it is easy to drift back into optimising the
home page for recruiters — leading with work, framing hobbies as evidence of
employability, defending his learning style. Don't. If a section is about bread,
it is about bread.

## Standing constraints

- **Nothing that reads as looking for work.** The site is public and his current
  employer can find it. No "available for hire", no "open to opportunities". That
  line goes in later, when he decides, above the contact email.
- **No location.** Deliberately removed. "I've lived in Japan for years" as
  biography is fine where it's relevant; a city and prefecture is not.
- **Don't let one thing define him.** Software, music, photography and bread are
  all on the page. None of them is the headline. He has pushed back on being
  boxed as any single one of them more than once.
- **No hardcoded counts in headings.** "Two things I built" breaks the moment he
  adds a third. Anchors are fine ("since 1996") because they don't drift; spans
  ("for twenty years") and quantities ("two tools") rot.
- **Duration counting reads as résumé-speak** outside the work section. Fine for
  the career, wrong for the things he does for pleasure.

## Working style

- Show rendered output, don't describe it. He judges the real thing.
- Lead with the strongest counter-argument on judgment calls, then build.
- Verify with measurements, not by looking at a screenshot and expecting to see
  the change — that has produced a wrong "looks better" call before.

## Technical

- Two self-contained pages: `index.html` and `cv/index.html`. No build step, no
  dependencies beyond Google Fonts. Each page carries its own CSS, so neither can
  break the other.
- Type: Bricolage Grotesque (display), IBM Plex Sans (body), IBM Plex Mono
  (labels, dates, links). Colour comes from CSS custom properties with a
  `prefers-color-scheme` dark variant — always add both.
- **Specificity trap.** This CSS styles elements inside containers (`.flag p`,
  `.hero .links`). A new single-class rule like `.before` loses to `.flag p` and
  fails silently, looking exactly like "the change didn't apply". Scope new rules
  (`.flag p.before`) and confirm with `getComputedStyle`.
- Every size is `clamp()`-based and so viewport-relative. Anything that must work
  on paper has to be restated in absolute units inside `@media print` — see the
  CV's print block.
- Screenshots and PDFs via Playwright (`npx playwright`, or the `playwright`
  module with `NODE_PATH` pointed at the npx cache). Set the viewport with
  `page.setViewportSize()`, not `newPage({ viewportSize })`, which silently does
  nothing.

## Git

- Work on `dev`. That is what GitHub Pages serves; `main` is not used.
- Commit messages: plain prose, no Claude attribution, no co-author trailer.
- Commit and push only when asked.
