import calculator from '../assets/investment-calculator-logo.png'

export const Header = () => {
    return (
        <header id='header'>
            <img src={calculator} alt="" />
            <h1>React Investment Calculator</h1>
        </header>
    );
}