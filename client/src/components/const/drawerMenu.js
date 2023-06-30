import { HOME, CHARACTERS, EPISODES, LOCATIONS } from "./routes";

export const drawerMenu = [
  {
    label: "Home",
    path: `${HOME}`,
    icon: HomeIcon,
  },
  {
    label: "Characters",
    path: `/${CHARACTERS}`,
    icon: FaceIcon,
  },
  {
    label: "Locations",
    path: `/${LOCATIONS}`,
    icon: PersonPinCircleIcon,
  },
  {
    label: "Episodes",
    path: `/${EPISODES}`,
    icon: LiveTvIcon,
  },
];