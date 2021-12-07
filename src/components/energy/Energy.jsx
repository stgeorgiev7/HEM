import styles from "./Energy.module.scss";
import classNames from "classnames";
import { ComposedChart, Line, CartesianGrid, Area, AreaChart, XAxis } from "recharts";
import { Grid, Typography, Select, MenuItem } from "@mui/material";

export default function Energy({ data = [] }) {

    return (
        <div>
            <Grid container>
                <Grid item xs={3}>
                    <Typography>Energy</Typography>
                </Grid>

                <Grid item xs={3}>
                    <Select value={0}>
                        <MenuItem value={0}>This Week</MenuItem>
                        <MenuItem value={1}>This Month</MenuItem>
                        <MenuItem value={2}>This Year</MenuItem>
                    </Select>
                </Grid>

                <Grid container>
                    <ComposedChart
                        width={500}
                        height={300}
                        data={data}
                        className={classNames(styles["chart"])}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"hour"} />
                        <Area type="montone" dataKey={"energy"} stroke="#ffff" fillOpacity={10} fill="#E150A6">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </Area>

                        <Line type="monotone" dataKey={"energy"} stroke="#E150A6" />
                    </ComposedChart>
                </Grid>

            </Grid>
        </div>
    )
}
