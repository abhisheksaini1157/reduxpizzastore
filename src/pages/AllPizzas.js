import { React, useEffect, useState } from "react";
import {
  Grid,
  Box,

  TextField,
  MenuItem,
} from "@mui/material";
import Pizza from "../components/Pizza";
import { fetchData } from "./data";
import { toast } from "react-toastify";

const AllPizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtersort, setFiltersort] = useState("all");

  useEffect(() => {
    // by default show data and if filtersort value change then show filtered data
    if (filtersort === "all") {
      fetchData().then((data) => {
        setPizzas(data);
        setLoading(false);
        toast.success("All Data loaded successfully");
      });
    } else if (filtersort === "veg") {
      fetchData().then((data) => {
        setPizzas(data.filter((pizza) => pizza.isVeg === true));
        setLoading(false);
        toast.success("Filtered By Veg");
      });
    } else if (filtersort === "nonveg") {
      fetchData().then((data) => {
        setPizzas(data.filter((pizza) => pizza.isVeg === false));
        setLoading(false);

        toast.success("Filtered By Non Veg");
      });
    } else if (filtersort === "price") {
      fetchData().then((data) => {
        setPizzas(data.sort((a, b) => a.price - b.price));
        setLoading(false);
        toast.success("Sorted By Price successfully");
      });
    } else if (filtersort === "rating") {
      fetchData().then((data) => {
        setPizzas(data.sort((a, b) => b.rating - a.rating));
        setLoading(false);
        toast.success("Sorted By Rating successfully");
      });
    }
  }, [filtersort]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box p={2}>
        <TextField
          select
          label="Sort or Filter"
          style={{ width: "50%", margin: "20px" }}
          value={filtersort}
          onChange={(e) => setFiltersort(e.target.value)}
        >
          <MenuItem value="price">Sort By Price</MenuItem>
          <MenuItem value="rating">Sort By Rating</MenuItem>
          <MenuItem value="veg">Filter Veg</MenuItem>
          <MenuItem value="nonveg"> Filter Non Veg</MenuItem>
          <MenuItem value="all">Show All</MenuItem>
        </TextField>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} {...pizza} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default AllPizzas;
