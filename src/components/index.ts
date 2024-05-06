import { lazy } from "react";
const Intro = lazy(()=>import('./Intro/Intro'))
const About = lazy(()=>import('./About/About'))
const Skills= lazy(()=>import('./Skills/Skills'))
const Projects = lazy(()=>import('./Projects/Projects'))
const Testimonial= lazy(()=>import('./Testimonial/Testimonial'))
const Footer=lazy(()=> import('./Footer/Footer'))

export {
  Intro,
  About,
  Skills,
  Projects,
Testimonial,
Footer
}
