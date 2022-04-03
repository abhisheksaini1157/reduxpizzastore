import { React } from "react";
import { Box, Typography, Paper, Grid, Rating } from "@mui/material";
import Pizzadetail from "./Pizzadetail";

const Pizza = ({ ...props }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={props.id}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            width: "250px",
            height: "500px",
          }}
        >
          <Box p={2}>
            <Typography variant="h6">{props.name}</Typography>
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundImage: `url(${props.img_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <br />
            <div
              style={{
                width: "100%",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {props.isVeg ? (
                <Typography variant="body2" style={{ color: "green" }}>
                  Veg
                </Typography>
              ) : (
                <Typography variant="body2" style={{ color: "red" }}>
                  Non-Veg
                </Typography>
              )}
            </div>
            <Box p={2} sx={{ width: "fit-content" }}>
              <Typography variant="body2">{props.description}</Typography>
            </Box>

            <Box p={2} sx={{ width: "fit-content", alignItems: "center" }}>
              <Rating
                name="half-rating-read"
                value={props.rating}
                precision={0.5}
                readOnly
              />
            </Box>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" style={{ color: "#008000" }}>
                Rs: {props.price}
              </Typography>

              <Pizzadetail id={props.id} {...props} />
            </div>
          </Box>
        </Paper>
      </Grid>

    </>
  );
};

export default Pizza;
