import React from "react";
import { Link } from "react-router-dom";
import propType from "prop-types";

function ReferInfo({ id, title, desc1, desc2, definition, element, tag, version, view, use }) {
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

ReferInfo.propType = {
  id: propType.number.isRequired,
  title: propType.number.isRequired,
  desc1: propType.number.isRequired,
  definition: propType.number.isRequired,
};

export default ReferInfo;
