export const Tabs = ({ children, buttons, ButtonsContainer }) => {
    // const ButtonsContainer = buttonsContainer;
    return (
    <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}   
    </>
    );
}