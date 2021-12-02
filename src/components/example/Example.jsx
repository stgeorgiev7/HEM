import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Header from "../header/Header";
import User from "../user/User"
import Weather from "../weather/Weather";
import Time from "../time/Time";
import Termostat from "../termostat/Termostat"; 

export default function Copyright() {

  return (
    <div className={classNames(styles.wrapper)}>
      
          <Termostat data={
            [
              { temperature: 25, hour: 12 },
              { temperature: 13, hour: 13 },
              { temperature: 14, hour: 14 },
              { temperature: 15, hour: 15 },
              { temperature: 15, hour: 16 },
              { temperature: 10, hour: 17 },
            ]
          }/>
       
    </div>
  );
}
