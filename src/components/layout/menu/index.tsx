import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <aside className="colums is-2 is-narrow-mobile is-fullheigth section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">My Sales</p>
      <ul className="menu-list">
        <MenuItem hrel="/" label="Home" />
        <MenuItem hrel="/" label="Registration" />
        <MenuItem hrel="/" label="Settings" />
        <MenuItem hrel="/" label="Exit" />
      </ul>
    </aside>
  );
};

interface MenuItemProps {
  hrel: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <li>
      <Link href={props.hrel}>
        <a>
          <span className="icon"></span> {props.label}
        </a>
      </Link>
    </li>
  );
};
