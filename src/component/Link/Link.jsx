import React, { useEffect, useState } from "react";

const Link = ({ route }) => {

  return (
    <li className="text-xl hover:text-secondary p-2 rounded text-center text-stone-950 font-semibold">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
