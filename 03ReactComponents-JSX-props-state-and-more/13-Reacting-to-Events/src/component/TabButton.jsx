function TabButton({children}){
    function handelClick() {
        console.log('Hello')
    }

    return(
        <li>
            <button onClick={handelClick}>{children}</button>
        </li>
    );
}

export default TabButton;