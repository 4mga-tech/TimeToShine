import Link from "next/link";

export interface FooterLink {
  label: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

interface FooterColumnProps {
  links: FooterLink[];
  className?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  links,
  className = "",
}) => {
  return (
    <div className={`footer-col-block align-items-start ${className}`}>
      <ul className="footer-menu-list">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="link"
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
