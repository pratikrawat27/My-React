function TabButton({children, click}){
    return(
        <li>
            <button onClick={click}>{children}</button>
        </li>
    );
}

export default TabButton;