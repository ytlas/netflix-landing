import { Fragment } from "react";

import TVSection from "./TVSection";
import MobileSection from "./MobileSection";
import DesktopSection from "./DesktopSection";
import KidsSection from "./KidsSection";

const HowSection = () => {
  return (
    <Fragment>
      <TVSection />
      <MobileSection />
      <DesktopSection />
      <KidsSection />
    </Fragment>
  );
};

export default HowSection;
