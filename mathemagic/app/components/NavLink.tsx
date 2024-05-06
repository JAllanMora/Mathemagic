import { Link, useColorModeValue } from "@chakra-ui/react";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  libraryLink?: React.ElementType;
};

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const { children, href, libraryLink } = props;
  const isLibraryLinkDefined = !!libraryLink;
  const propsForLink = isLibraryLinkDefined
    ? { to: href, as: libraryLink }
    : { href: href };

  return (
    <Link
      {...propsForLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.200",
      }}
    >
      {children}
    </Link>
  );
};
