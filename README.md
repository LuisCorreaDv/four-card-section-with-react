# Frontend Mentor - Four card feature section solution

This is my solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). This challenge helped me strengthen my skills in responsive layouts, semantic HTML, and dynamic rendering with React using a mobile-first approach.

## Overview

### The challenge

- View the optimal layout for the site depending on their device's screen size
- See a consistent, centered design of the feature cards

### Screenshot

![FourCardLayout](https://github.com/user-attachments/assets/8f2678b5-1abf-48ca-8345-7fd2470c9698)

### Links

- Live Site URL: [Four card feature](https://four-card-section-with-react.vercel.app/)

## My process

### Built with

- Semantic HTML5
- CSS custom properties
- Flexbox
- Mobile-first responsive design
- React

### What I learned

During this project, I practiced dynamic rendering in React using `map()` to generate the four feature cards from an array of objects. This made the layout cleaner, easier to maintain, and reusable.

```jsx
<section className="cards-feature">
          {["left", "center", "right"].map((col) => (
            <div key={col} className={`card-col ${col}`}>
              {cards
                .filter((card) => card.column === col)
                .map((card, i) => (
                  <Card
                    key={i}
                    color={card.color}
                    title={card.title}
                    text={card.text}
                    src={card.imgLink}
                  />
                ))}
            </div>
          ))}
</section>
```
Initially, I implemented the layout using **CSS Grid**. However, it introduced a visual gap in the center due to the layout's structure. To fix this, I switched to **Flexbox**, which allowed more control and better alignment across breakpoints without awkward spacing. This change ensured that all cards stayed uniform in size and spacing.

### Continued development

In future projects, I plan to:

- Improve accessibility (ARIA roles, color contrast, keyboard navigation)
- Experiment more with utility-first frameworks like Tailwind CSS for faster prototyping

---

### Useful resources

- [MDN Web Docs - Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_Concepts_of_Flexbox) — Helped clarify layout alignment and distribution issues.

---

### Author

- GitHub - [@LuisCorreaDv](https://github.com/LuisCorreaDv)
- Frontend Mentor - [@LuisCorreaDv](https://www.frontendmentor.io/profile/LuisCorreaDv)


