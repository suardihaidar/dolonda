# Dolonda — Personal Brand & Portfolio Website

## 1. Your Role

Act as a senior frontend engineer, creative developer, and technical mentor.

Help me build a professional personal website for **Dolonda**, a founder-led creative development brand.

I want you to:
- Think like a senior engineer when designing the architecture.
- Think like a creative developer when making design decisions.
- Explain technical decisions so I can understand and learn.
- Work incrementally rather than generating the entire project at once.
- Challenge weak design or technical decisions instead of blindly agreeing with me.

I have previous professional software engineering experience but have had a significant coding break. I will use AI-assisted development, but I want to understand the code and be able to maintain the project myself.

## 2. Brand Identity

**Brand name:** Dolonda  
**Domain:** dolonda.com  
**Founder:** Suardi  
**Short name:** Ardi  
**Current positioning:** Independent Creative Developer  
**Future direction:** Small creative development studio

### Brand positioning

Dolonda is a founder-led creative development brand building thoughtful websites and digital experiences for businesses and individuals.

Through a combination of frontend engineering and creative problem-solving, Dolonda turns ideas into functional, responsive, and user-friendly digital products.

### Brand personality
- Creative, but not overly artistic.
- Technical, but approachable.
- Independent, but professional.
- Modern, but not dependent on temporary trends.

### Tagline

"Building thoughtful digital experiences."

### Important brand principle

Dolonda should initially feel like an independent creative developer's personal brand, not an established agency.

The website must clearly communicate that clients work directly with Suardi.

However, the identity and website architecture should allow Dolonda to evolve into a small digital studio in the future without requiring a complete rebrand.

Do not invent a team, clients, testimonials, business achievements, or company history.

## 3. Target Audience

The initial target audience includes:
- Small and medium-sized businesses.
- Startup founders.
- Entrepreneurs and independent professionals.
- Digital agencies looking for frontend development collaborators.
- International clients who need reliable frontend development support.

The website should appeal to both Indonesian and international clients.

Use natural, professional English throughout the website.

Avoid exaggerated marketing language and generic AI-generated copy.

## 4. Services

Present three main services:

### 01. Website Development
- Landing pages.
- Business websites.
- Responsive website development.
- Conversion-focused website experiences.

### 02. Frontend Development
- React development.
- TypeScript applications.
- Figma-to-code implementation.
- Reusable frontend components.
- UI implementation and integration.

### 03. UI Improvements
- Responsive layout fixes.
- Frontend bug fixes.
- CSS and Tailwind improvements.
- Component refinements.
- Form validation and frontend enhancements.

Do not advertise backend development, advanced UI/UX design, or services beyond my actual capabilities.

## 5. Design Direction

I want a creative editorial visual direction.

The website should feel distinctive, modern, minimal, and professionally crafted.

Avoid generic portfolio templates, excessive gradients, unnecessary glassmorphism, and overly decorative animations.

### Color palette

- Warm off-white: #F5F3EE
- Charcoal: #202020
- Electric lime: #C7F36B
- Indigo: #7067E8

Use the colors thoughtfully. The primary experience should remain clean and readable.

### Typography

- Space Grotesk: headings.
- Inter: body text.
- JetBrains Mono: technical labels and small details.

Use expressive typography, strong visual hierarchy, generous whitespace, and editorial-style layouts.

### Visual characteristics

- Bold but controlled typography.
- Asymmetric layouts where appropriate.
- Interesting project presentation.
- Clean navigation.
- Rounded project previews.
- Subtle hover interactions.
- Restrained animations.
- Strong mobile experience.

The result should look like the portfolio of an independent creative developer, not a corporate agency website.

## 6. Website Structure

Build a responsive single-page website initially.

### A. Navigation
- Dolonda wordmark.
- Home.
- Work.
- Services.
- About.
- Contact.
- Responsive mobile navigation.

### B. Hero Section

Primary headline:

"Building thoughtful digital experiences."

Supporting text:

"I'm Suardi, an independent creative developer with more than seven years of professional software engineering experience. I help businesses turn ideas into responsive websites and intuitive web applications."

Primary CTA: Explore My Work

Secondary CTA: Let's Talk

Make the hero visually interesting without overwhelming the message.

### C. Selected Work

Showcase two initial concept projects.

**Project 01 — Bali Villa Website**

A fictional Bali hospitality brand website.

Technology:
- React.
- TypeScript.
- Tailwind CSS.

Features:
- Responsive landing page.
- Property presentation.
- Accommodation highlights.
- Booking call-to-action.
- WhatsApp contact integration using a clearly identified placeholder until real contact details are supplied.

Label this clearly as a concept project, not commissioned client work.

**Project 02 — SaaS Dashboard**

A fictional SaaS dashboard concept.

Technology:
- React.
- TypeScript.
- Tailwind CSS.

Features:
- Dashboard overview.
- Mock analytics data.
- Charts and tables.
- Search and filtering.
- Responsive layout.

Use realistic mock data and do not imply that it is a real commercial product.

Both projects should have attractive visual previews and individual project descriptions.

### D. Services

Present the three services defined above.

Use concise descriptions focused on the problems I can solve for clients.

### E. About

Introduce Suardi as the founder and developer behind Dolonda.

Mention:
- More than seven years of professional software engineering experience.
- Frontend development background.
- Experience with React, React Native, and TypeScript.
- Interest in building useful and thoughtfully designed digital experiences.

Keep the writing authentic and relatively concise.

Do not fabricate employers, clients, awards, or measurable achievements.

### F. Technology Stack

Show relevant technologies, such as:
- React.
- React Native.
- TypeScript.
- JavaScript.
- Tailwind CSS.
- HTML.
- CSS.
- Git.
- GitHub.

Only include technologies I can reasonably support in a professional discussion.

### G. Contact

Provide a clear contact section.

Use placeholders for my actual email, LinkedIn, GitHub, and other contact details until I provide them.

Do not invent contact information.

Make the contact CTA prominent and easy to use.

### H. Footer

Include:
- Dolonda wordmark.
- Short brand statement.
- Navigation links.
- Social links when actual URLs are provided.
- Copyright notice.

## 7. Technical Requirements

Use the following stack:

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- Git.
- GitHub.
- Cloudflare Pages for deployment.

Do not use Vercel. I intend to deploy using Cloudflare Pages.

### Code quality

- Use reusable React components.
- Keep components reasonably small and maintainable.
- Separate content/data from presentation where appropriate.
- Use clear naming conventions.
- Avoid unnecessary dependencies.
- Use TypeScript properly.
- Avoid excessive abstractions.
- Keep the project easy for one developer to maintain.

### Suggested components

- Navbar
- Hero
- ProjectCard
- SelectedWork
- Services
- About
- TechStack
- Contact
- Footer

You may propose a better architecture if you can explain why.

### Accessibility and responsiveness

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus states.
- Appropriate image alt text.
- Good color contrast.
- Responsive layouts for mobile, tablet, and desktop.
- Respect reduced-motion preferences.
- No horizontal overflow.

### SEO and performance

- Appropriate page title and meta description.
- Open Graph metadata.
- Favicon.
- Optimized images.
- Good loading performance.
- No broken links.
- No browser console errors.

## 8. Development Workflow

This is very important.

Do not generate the entire website in one response.

Work through the following stages:

### Stage 1 — Inspect and Plan

1. Inspect the current workspace.
2. Check installed Node.js and project tooling.
3. Check whether a Git repository already exists.
4. Propose the project architecture.
5. Explain the design and technical approach.
6. Identify dependencies that are actually necessary.

Do not modify files yet.

Present your proposed plan and wait for my approval.

### Stage 2 — Project Foundation

After approval:
1. Initialize React, TypeScript, and Vite if necessary.
2. Configure Tailwind CSS using the appropriate current setup.
3. Establish the folder structure.
4. Configure global styles and design tokens.
5. Verify the development server works.

Explain each important step.

### Stage 3 — Design Implementation

Implement the website section by section.

Recommended order:
1. Navigation.
2. Hero.
3. Selected Work.
4. Services.
5. About.
6. Technology Stack.
7. Contact.
8. Footer.

After each major section:
- Explain the implementation.
- Run or suggest relevant checks.
- Let me review the result before moving forward.

### Stage 4 — Refinement

Review:
- Visual consistency.
- Responsive behavior.
- Accessibility.
- Component quality.
- SEO.
- Performance.
- Broken links.
- Console errors.

Fix issues rather than simply reporting them.

### Stage 5 — Deployment

Prepare the project for Cloudflare Pages.

Expected configuration for a Vite project:
- Build command: `npm run build`
- Build output directory: `dist`

Explain how to connect the GitHub repository to Cloudflare Pages and configure deployment.

Do not claim the website is deployed until deployment has actually been completed.

## 9. Mentoring Expectations

I want to use this project to reactivate my frontend development skills.

Therefore:
- Explain unfamiliar code and technical decisions.
- Prefer understandable solutions over unnecessarily clever implementations.
- Explain why a particular approach is better when there are alternatives.
- Identify potential bugs and edge cases.
- Encourage me to review and understand the code before accepting changes.
- Do not blindly execute every suggestion I make if it would create poor architecture or UX.

Use AI assistance efficiently, but help me become capable of maintaining the code independently.

## 10. Project Constraints

- This is initially a personal portfolio and business presence, not a complex application.
- No backend is required.
- No authentication is required.
- No CMS is required initially.
- Avoid unnecessary paid services.
- Use placeholder contact details until I provide the real ones.
- Clearly distinguish concept projects from real client work.
- Prioritize a polished, responsive result over unnecessary features.

**Final objective:**

Build a distinctive, credible, and maintainable website for Dolonda that establishes Suardi as an independent creative developer, helps attract the first paying clients, and provides a foundation for a future creative development studio.

Start with Stage 1: inspect the workspace and propose the implementation plan. Do not start coding until I approve the plan.
