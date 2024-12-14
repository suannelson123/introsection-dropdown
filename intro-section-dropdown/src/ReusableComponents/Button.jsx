
const Button = ({ text = 'Learn More', styles }) => {
    return (
        <div className="flex justify-center lg:justify-normal">
            <button className={`${styles}`}>
                {text}
            </button>
        </div>
    );
};

export default Button;
