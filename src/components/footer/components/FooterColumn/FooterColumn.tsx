import React from "react";
import styles from "../../FooterPage.module.scss";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterItem } from "../../helpers/footerConfig";

type FooterColumnProps = {
  title?: string | undefined | null;
  items: any;
};

const FooterColumn: NextPage<FooterColumnProps> = ({
  title = "",
  items,
}: any) => {
  return (
    <div className={styles.column}>
      {title && <div className={styles["column-title"]}>{title}</div>}
      <ul className={styles["column-list"]}>
        {items?.map((item: FooterItem) => (
          <li className={styles["column-item"]} key={item.id}>
            {item.isFooterItemLogo && (
              <Image
                src={item.footerItemLogoPath ?? ""}
                alt={item?.footerItemTitle ?? ""}
                width={100}
                height={100}
              />
            )}
            {!item.isFooterItemLogo && (
              <Link href={item.footerItemRedirectURL} passHref>
                <div className={styles.link}>{item.footerItemTitle}</div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
