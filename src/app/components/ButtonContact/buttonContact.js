import "./style.css"

export default function ButtonContact({ children }) {
    return(
        <a  
            href="https://wa.me/5551998749583"
            target="_blank"
            rel="noopener noreferrer"
            className="button-contact"
        >
            {children}
        </a>
    );
}