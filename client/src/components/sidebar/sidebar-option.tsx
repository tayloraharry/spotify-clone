import { IconType } from "react-icons";
import "./sidebar-option.css";

interface ISidebarOptionProps {
  title: string;
  Icon?: IconType;
  onSelect?: () => void
}

const SidebarOption = ({ title, Icon, onSelect }: ISidebarOptionProps) => {
  return (
    <div className="sidebar-option" onClick={() => onSelect ? onSelect() : null}>
      {Icon ? <div className="sidebar-option__icon" ><Icon size={50}/></div> : null}
       {Icon ? <p>{title}</p> : <p style={{marginLeft: 15}}>{title}</p>}
    </div>
  );
};

export default SidebarOption;
