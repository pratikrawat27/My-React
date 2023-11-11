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

export default TabButton;