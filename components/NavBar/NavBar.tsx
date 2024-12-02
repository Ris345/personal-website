import * as style from "./navBar.css"

import navigationLinks from "../../data/navigation.json"

import { CallToAction } from "../CallToAction"
import { SideMenu } from "../SideMenu"
import Link from "next/link"
import Image from "next/image"

import useScroll from "../../utils/useScroll"

const Logo = () => (
  <Link href="/">
  
  </Link>
)

export function NavBar() {
  const { direction, scrolledToTop } = useScroll()

  return (
    <header
      className={scrolledToTop ? style.header["top"] : style.header[direction]}
    >
      <nav className={style.nav}>
        <Logo />
        <div className={style.links}>
          <ol className={style.list}>
            {navigationLinks.map((data) => (
              <li className={style.link} key={data.label}>
                <Link href={data.href}>
                  <span className={style.prefix}>{data.prefix}</span>
                  <span>{data.label}</span>
                </Link>
              </li>
            ))}
          </ol>
          <CallToAction
            text={"Contact me"}
            link="rishav345@gmail.com"
            type="primary_small"
            mode="link"
          />
        </div>
      </nav>
      <SideMenu />
    </header>
  )
}
