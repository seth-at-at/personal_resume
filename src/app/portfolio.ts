import { Job } from './classes';
import { Exp } from './classes';
import { Project } from './classes';

export const JOBS: Job[] = [
  {name: "Cap n' Cork", location: "Fort Wayne, IN", description: "I am a delivery driver and all around employee, anything that needs done I take care of whether it's unloading a delivery truck or pulling and sending orders to actually transfering them out.", contact: "260 483 1147"},
  {name: "The Habit Grill", location: "Oceanside, CA", description: "Setting up and stocking stations with all necessary supplies. Preparing food for service, Cooking menu items in cooperation with the rest of the kitchen staff", contact: "760 433 3390"},
  {name: "Smashburger", location: "Longmont, CO", description: "Prepared basic components of each dish on the menu using provided recipes. Memorized and utilized the serving portion sizes and all basic meal prep procedures used in the kitchen. Ensured that the kitchen, all food prep areas and all food storage areas met restaurant cleaning standards. Worked with team of cooks to do portion prep work for other shifts when needed", contact: "303 485 7412"}
]

export const EXPERIENCE: Exp[] = [
  {name: "Turing School Of Programming and Design", description: "I attended an intensive programming school that focused on ruby/rails with a heavy emphasis on TDD and API development."},
  {name: "East Leyden High School · Tech support", description: "I fixed student laptops and was the first stop for all tech problems in the school, including hardware and software issues."}
]

export const PROJECTS: Project[] = [
  {name: "Imgur Favorites", description: "Using the Imgur Oauth API, I allowed users to sign in and then displayed their favorite images. This site allows you to cycle through your favorites and sort them into folders you create.", github: "https://github.com/seth-at-at/imgur_favorites"},
  {name: "Little Shop", description: "As part of a small group, I built a full retail site with authentication, authorization and admin functionality. Since it wasn't a large project and a small group we worked on the whole project as a team through pairing.", github: "https://github.com/josh-works/black_shop_of_horrors"},
  {name: "Grab Bag", description: "Created a DropBox clone to host files as well as pull in the dropbox api letting you transfer files from their site to ours. It was a brown field project that was started by a different group and finished by ours. I worked on Zipping the files and downloading entire folders.", github: "https://github.com/stovermc/grab_bag"}
]