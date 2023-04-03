import React from "react";
import classNames from "classnames";

import { createMountComponent } from "../../utils/mountComponent";
import styles from "./HeroBanner.module.scss";

interface IHeroBannerProps {
  title: string;
  content: string;
  buttonTitle: string;
  description: string;
  url: string;
  navigate: any;
}

const HeroBanner = (props: IHeroBannerProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.navigate(props.url);
    e.preventDefault();
  };
  return (
    <div
      className={classNames(styles.hero__item, "set-bg")}
      style={{ backgroundImage: "url(/img/hero/banner.jpg)" }}
    >
      <div className={styles.hero__text}>
        <span>{props.title}</span>
        <h2 dangerouslySetInnerHTML={{ __html: props.content }} />
        <p>{props.description}</p>
        <button className="primary-btn" onClick={handleClick}>
          {props.buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default (el: any, props: IHeroBannerProps) =>
  createMountComponent(HeroBanner, props, el);
