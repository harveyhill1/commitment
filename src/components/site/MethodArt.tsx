import { Icon } from "./Brand";

import target from "@/assets/icons/target.png";
import checklist from "@/assets/icons/checklist.png";
import gears from "@/assets/icons/gears.png";
import chart from "@/assets/icons/chart.png";

/** Shared sizing so every method illustration renders at the same scale (object-contain via Icon). */
const art = "size-32 md:size-36";

/** 01 Understand — target: understanding customer needs and identifying priorities. */
export function UnderstandArt() {
  return <Icon src={target} className={art} />;
}

/** 02 Prepare — checklist: knowledge preparation and quality assurance. */
export function PrepareArt() {
  return <Icon src={checklist} className={art} />;
}

/** 03 Integrate — interlocking gears: connecting the agent with existing systems. */
export function IntegrateArt() {
  return <Icon src={gears} className={art} />;
}

/** 04 Improve — rising bar chart: continuous optimisation. */
export function ImproveArt() {
  return <Icon src={chart} className={art} />;
}
