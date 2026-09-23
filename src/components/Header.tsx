"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";
import { Download } from "@/components/home/Icons";

import { routes } from "@/app/resources";
import { person, about, blog, work, gallery } from "@/app/resources/content";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          <Flex hide="s">
            <Link href="/" className={styles.brand} aria-label="Lucas Olivato, página inicial">
              <span className={styles.brandMark} aria-hidden="true" />
              lucas.olivato
            </Link>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} aria-label="Início" />
              )}
              <Line vert maxHeight="24" />
              {routes["/about"] && (
                <ToggleButton
                  prefixIcon="person"
                  href="/about"
                  label={about.label}
                  selected={pathname === "/about"}
                  aria-label={about.label}
                />
              )}
              {routes["/work"] && (
                <ToggleButton
                  prefixIcon="grid"
                  href="/work"
                  label={work.label}
                  selected={pathname.startsWith("/work")}
                  aria-label={work.label}
                />
              )}
              {routes["/contact"] && (
                <ToggleButton
                  prefixIcon="email"
                  href="/contact"
                  label="Contato"
                  selected={pathname === "/contact"}
                  aria-label="Contato"
                />
              )}
              {routes["/blog"] && (
                <ToggleButton
                  prefixIcon="book"
                  href="/blog"
                  label={blog.label}
                  selected={pathname.startsWith("/blog")}
                  aria-label={blog.label}
                />
              )}
              {routes["/gallery"] && (
                <ToggleButton
                  prefixIcon="gallery"
                  href="/gallery"
                  label={gallery.label}
                  selected={pathname.startsWith("/gallery")}
                  aria-label={gallery.label}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">
              <a href={person.cv} download className={styles.cvButton}>
                <Download />
                Currículo
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
