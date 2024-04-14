import { ComponentProps } from "react";

interface navLinkProps extends ComponentProps<'a'> {
  children: string,
  className?: string,
}

export function NavLink({children, className, ...rest}: navLinkProps) {
  return (
    <a {...rest} className={className}>{children}</a>
  )
}