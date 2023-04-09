import "./Pagination.css";

export default function Pagination() {
    return (
        <ul className="pagination-container">
            <li className="pagination-item">&lt;&lt;</li>
            <li className="pagination-item">1</li>
            <li className="pagination-item">2</li>
            <li className="pagination-item">3</li>
            <li className="pagination-item">4</li>
            <li className="pagination-item">5</li>
            <li className="pagination-item">&gt;&gt;</li>
        </ul>
    );
}