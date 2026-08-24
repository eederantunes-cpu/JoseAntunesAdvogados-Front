import "./style.css"

export default function ButtonContact({ children }) {
    return(
        <a  
            href="https://wa.me/5551999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="button-contact"
        >
            {children}
        </a>
    );
}