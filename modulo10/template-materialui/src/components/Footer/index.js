import React from "react";
import { Grid, Card } from "@mui/material";

function Footer() {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        Footer
      </Card>
    </Grid>
  );
}

export default Footer;
