
# Motivation
Unfortunately, eslint requires href attribute for A tag, that's why
a perfectly normal for Next.js code:

```javascript
<Link href="/link">
  <a>Something</a>
</Link>
```
produces a lint error. See [jsx-a11y/anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)

# Solution
Use ActiveLink component instead of standart next/link.
```javascript
import ActiveLink from '../components/ActiveLink';

const Render = () => (
  <ActiveLink href="/about">See About!</ActiveLink>
);
```
