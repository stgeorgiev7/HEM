import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Header from "../header/Header";
import User from "../user/User"
import Weather from "../weather/Weather";
import Time from "../time/Time";
import { Grid } from "@mui/material";

export default function Copyright() {

  const headerComponents = [<Weather degrees={15} type="stormy" />, <Time />];

  return (
    <div className={classNames(styles.wrapper)}>
      
          <Header
            left={<User avatar={"/images/avatar.png"} name={"John Doe"} size={80} />}
            right={headerComponents}
          />
       
    </div>
  );
}
