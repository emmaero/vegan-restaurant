export default function List({ list, LayoutComponent }) {
  return list.map((item) => <LayoutComponent key={item.id} item={item} />);
}
