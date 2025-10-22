//Either can props children or label attribute
export default function TabButton(props){

    return <li><button>{props.children}</button></li>; 
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