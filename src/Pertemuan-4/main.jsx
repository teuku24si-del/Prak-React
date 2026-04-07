import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveText from "./ResponsiveDesign";
import "./tailwind.css";


createRoot(document.getElementById("root"))
    .render(
        <div className="card">
           {/* <FrameworkListSearchFilter/> */}
           <ResponsiveText/>
           {/* <FrameworkList/> */}
        </div>
    )