export const TabButton = ({children}) => {

    const handleClick = () => {
        console.log("check")
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}