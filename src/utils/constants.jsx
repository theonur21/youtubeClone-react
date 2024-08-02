import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';

// Kategoriler
export const categories = [
  { name: 'New', icon: <AiFillHome />, type: 'home' },
  {
    name: 'Trend',
    icon: <MdLocalFireDepartment />,
    type: 'category',
  },
  {
    name: 'Music',
    icon: <CgMusicNote />,
    type: 'category',
  },
  { name: 'Films', icon: <FiFilm />, type: 'category' },
  { name: 'Canlı', icon: <MdLiveTv />, type: 'category' },
  {
    name: 'Game',
    icon: <IoGameControllerSharp />,
    type: 'category',
  },
  {
    name: 'News',
    icon: <ImNewspaper />,
    type: 'category',
  },
  {
    name: 'Sports',
    icon: <GiDiamondTrophy />,
    type: 'category',
  },
  {
    name: 'Educative',
    icon: <RiLightbulbLine />,
    type: 'category',
  },
  {
    name: 'Beauty & Cosmetic',
    icon: <GiEclipse />,
    type: 'category',
    divider: true,
  },
  { name: 'Settings', icon: <FiSettings />, type: 'menu' },
  {
    name: 'Report History',
    icon: <AiOutlineFlag />,
    type: 'menu',
  },
  { name: 'Help', icon: <FiHelpCircle />, type: 'menu' },
  {
    name: 'Send feedback',
    icon: <RiFeedbackLine />,
    type: 'menu',
  },
];

// API 'a istek atarken gerkeli olan veriler
export const options = {
  params: {
    hl: 'tr',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};
