import { useState } from "react";
import styles from "./Thermostat.module.scss";
import classNames from "classnames";
import { CircularProgress, Typography, Button } from "@mui/material";
import { AddCircleOutlined as AddCircleOutlinedIcon } from "@mui/icons-material";
import { RemoveCircleOutlined } from "@mui/icons-material";
import { ComposedChart, Line } from "recharts";

export default function Thermostat({ data }) {

    const [temperature, setTemperature] = useState(25);

    function increaseTemperature() {
        if (temperature < 50 && temperature >= 12) {
            setTemperature(temperature + 1);
        }
    };

    function decreaseTemperature() {
        if (temperature > 12 && temperature <= 50) {
            setTemperature(temperature - 1);
        }
    }

    return (
        <div className={classNames(styles["termostat-container"])}>
            <div className={classNames(styles["circular"])}>
                <CircularProgress
                    variant="determinate"
                    value={temperature}
                    className={classNames(styles["left-circle"])}
                    size={230}
                />

                <CircularProgress
                    variant="determinate"
                    value={50}
                    size={230}
                    className={classNames(styles["right-circle"])}
                />
            </div>

            <div className={classNames(styles["controls"])}>
                {/* <Button
                    variant="text"
                    onClick={decreaseTemperature}
                    className={classNames(styles["minusBtn"])}>
                    <RemoveCircleOutlined />
                </Button> */}


                <RemoveCircleOutlined />
                <Typography className={classNames(styles["temperature"])}>{temperature}&deg;</Typography>
                <AddCircleOutlinedIcon />

                {/* <Button
                    variant="text"
                    onClick={increaseTemperature}
                    className={classNames(styles["plusBtn"])} >
                    <AddCircleOutlinedIcon size="large" />
                </Button> */}


            </div>

            <div className={classNames(styles["linear-graphic"])}>
                <ComposedChart
                    width={500}
                    height={100}
                    data={data}
                >
                    <Line type="monotone" dataKey={"temperature"} stroke="#ffff" />
                </ComposedChart>
            </div>


        </div>
    )
}