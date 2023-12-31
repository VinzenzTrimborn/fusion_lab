// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicHomepage } from "./plasmic/blank_website/PlasmicHomepage";
import supabase from "../utils/supabase";

function Homepage_(props, ref) {
  supabase.auth.getUser().then((user) => {console.log(user)});
  console.log(process.env.SUPABASE_API_KEY)
  return <PlasmicHomepage root={{ ref }} {...props} />;
}

const Homepage = React.forwardRef(Homepage_);

export default Homepage;
