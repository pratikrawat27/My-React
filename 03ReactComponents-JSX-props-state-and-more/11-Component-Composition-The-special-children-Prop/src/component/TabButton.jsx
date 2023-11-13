// function TabButton(props){
//     return(
//         <li><button>{props.children}</button></li>
//     );
// }

// or do destructing

function TabButton({children}){
    return(
        <li><button>{children}</button></li>
    );
}

// or

// function TabButton({label}){
//     return(
//         <li><button>{label}</button></li>
//     );
// }

export default TabButton;