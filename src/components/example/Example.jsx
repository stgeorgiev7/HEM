import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Header from "../header/Header";
import User from "../user/User"
import Weather from "../weather/Weather";
import Time from "../time/Time";
import Thermostat from "../thermostat/Thermostat";
import Card from "../card/Card";

export default function Copyright() {

  return (
    <div className={classNames(styles.wrapper)}>
        <Card />
    </div>
  );
}
