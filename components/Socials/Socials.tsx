import * as style from "./socials.css"
import socials from "../../data/socials"

type ISocials = { viewport: "desktop" | "mobile" }
export function Socials({ viewport }: ISocials) {
  return (
    <div className={style.container[viewport]}>
      {socials.map(({ title, url, Icon }) => (
        <a
          key={title}
          href={url}
          target="_blank"
          className={style.link[viewport]}
          rel="noreferrer"
        >
          <Icon className={style.icon[viewport]} />
        </a>
      ))}
    </div>
  )
}
