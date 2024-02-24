import './CustomButton.css';


const CustomButton = ({text}) => {
    return (
        <a className="customs">{text} <img className='customs__img' src="/src/assets/header/rigthVectorButton.svg" alt="" /></a>
    );
}

export default CustomButton;