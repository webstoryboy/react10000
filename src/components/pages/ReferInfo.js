import React from "react";
import { Link } from "react-router-dom";
import Prototypes from "prop-types";

function ReferInfo({
  id,
  title,
  desc1,
  desc2,
  element,
  tag,
  version,
  view,
  use,
  definition,
}) {
  return (
    <li>
      <Link
        to={{
          pathname: "refer-detail",
          state: {
            id,
            title,
            desc1,
            desc2,
            element,
            tag,
            version,
            view,
            use,
            definition,
          },
        }}
      >
        <span className="alpha">{id}</span>
        <span className="attr">{title}</span>
        <span className="desc">{desc2}</span>
      </Link>
    </li>
  );
}

ReferInfo.prototype = {
  id: Prototypes.number.isRequired,
  title: Prototypes.number.isRequired,
  desc: Prototypes.number.isRequired,
};

export default ReferInfo;
