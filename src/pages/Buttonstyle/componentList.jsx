import React from "react";
import DemoButton from "./sunny-ui/DemoButton";
import DemoOutlineButton from "./sunny-ui/DemoOutlineButton";
import DemoIconButton from "./sunny-ui/DemoIconButton";
import DemoDarkLightButton from "./sunny-ui/DemoDarkLightButton";

// You can include code strings if you want to show code in ComponentCard
export const componentList = [
  {
    title: "Gradient Button",
    description: "A beautiful gradient button with hover shadow effect.",
    component: <DemoButton label="Click Me" onClick={() => alert("Clicked!")} />,
    code: `<DemoButton label="Click Me" onClick={() => alert("Clicked!")} />`
  },
  {
    title: "Outline Button",
    description: "A stylish outline button suitable for secondary actions.",
    component: <DemoOutlineButton label="Outline" />,
    code: `<DemoOutlineButton label="Outline" />`
  },
  {
    title: "Icon Button",
    description: "A button with an icon inside, ideal for toolbar actions.",
    component: <DemoIconButton icon="⭐" onClick={() => alert("Star clicked!")} />,
    code: `<DemoIconButton icon="⭐" onClick={() => alert("Star clicked!")} />`
  },
  {
    title: "Dark/Light Toggle Button",
    description: "Toggle between dark and light modes using this button.",
    component: <DemoDarkLightButton />,
    code: `<DemoDarkLightButton />`
  },
];
