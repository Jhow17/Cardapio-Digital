import { LuDessert } from "react-icons/lu";
import { RiDrinks2Fill } from "react-icons/ri";
import { FaHamburger } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
export const routes = [
    { title: 'Tudo', href: '/' , Icon: IoMdHome  },
  { title: 'Salgados', href: '/salgados', Icon: FaHamburger  },
  { title: 'Sobremesas', href: '/sobremesas', Icon: LuDessert },
  { title: 'Bebidas', href: '/bebidas', Icon: RiDrinks2Fill  }
]