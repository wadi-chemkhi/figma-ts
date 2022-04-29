import React from "react";
import NavButton from "./NavButton";
interface NavBarProps {
  items: Array<string>;
  selected: string;
  onItemSelected: (item:string) => void;
}
class NavBar extends React.Component<NavBarProps, {}> {
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <NavButton
            key={item}
            selected={item === this.props.selected}
            onClick={() => this.props.onItemSelected(item)}
          >
            {item}
          </NavButton>
        ))}
      </div>
    );
  }
}

export default NavBar;
