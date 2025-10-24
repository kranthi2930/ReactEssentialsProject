//Either can props children or label attribute
export default function TabButton({children, onSelect, isSelected}){
    console.log('TABBUTTON COMPONENT EXECUTING');

   return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
    //props.children: Special built-in prop named "children" set by React to every Custom Component.
    //This children can be text or some complex JSX struxture
}


/*
export default function TabButton({label}){
    return (
        <li>
            <button>{label}</button>
        </li>
    );
}
    */