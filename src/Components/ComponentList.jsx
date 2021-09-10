import React from "react";

export default function ComponentList({list, ComponentList }) {
  return list.map((item) => <ComponentList key={item.id} item={item} />);
}
