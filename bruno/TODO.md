# TODO - MainBody section splitting

## Plan summary
- Split `MainBody.tsx` sections (Hero/About, Skills, Projects, Education, Contact) into separate components under `src/components/MainBody/sections/`.
- Keep using the same CSS module `Mainbody.module.css` to avoid rewriting styles.
- Update `MainBody.tsx` to import and render the new section components.
- Ensure imports (assets + react-icons) are moved into the sections that use them.

## Steps
1. Create new components:
   - `HeroSection.tsx`
   - `AboutSection.tsx`
   - `SkillsSection.tsx`
   - `ProjectsSection.tsx`
   - `EducationSection.tsx`
   - `ContactSection.tsx`
2. Update `MainBody.tsx` to render:
   - `HeroSection`
   - `AboutSection`
   - `SkillsSection`
   - `ProjectsSection`
   - `EducationSection`
   - `ContactSection`
3. Ensure each component imports `styles` from `Mainbody.module.css` and uses correct `styles.*` classNames.
4. Move `heroImage` import into `HeroSection`.
5. Move social icons + `react-icons` imports into `ContactSection`.
6. Move project mapping data into `ProjectsSection`.
7. Run TypeScript build (`npm run build` or `npm run dev` check) to confirm no TS/React errors.

