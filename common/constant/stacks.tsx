import { BiLogoPostgresql } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiRedux,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiPython
} from 'react-icons/si';

type stacksProps = {
  [key: string]: React.JSX.Element;
};

const iconSize = '100%';

export const STACKS: stacksProps = {
  Python: <SiPython size={iconSize} className="text-blue-800" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  'Material UI': <SiMui size={iconSize} className="text-sky-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  SASS: <SiSass size={iconSize} className="text-pink-600" />,
  Gulp: <SiGulp size={iconSize} className="text-red-500" />,
  'Framer Motion': <SiFramer size={iconSize} />,
  Jest: <SiJest size={iconSize} className="text-orange-600" />,
  'Express.js': <SiExpress size={iconSize} />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  'React Query': <SiReactquery size={iconSize} className="text-red-600" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
  'Node JS': <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} />,
  Storybook: <SiStorybook size={iconSize} className="text-pink-500" />,
  'React Router': <SiReactrouter size={iconSize} className="text-pink-500" />,
  'React Hook Form': <SiReacthookform size={iconSize} className="text-pink-500" />,
  'React Table': <SiReacttable size={iconSize} className="text-rose-600" />
};
