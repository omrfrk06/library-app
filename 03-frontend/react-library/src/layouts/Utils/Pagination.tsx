export const Pagination: React.FC<{
  currentpage: number;
  totalPages: number;
  paginate: any;
}> = (props) => {
  const pageNumbers = [];

  if (props.currentpage === 1) {
    pageNumbers.push(props.currentpage);
    if (props.totalPages >= props.currentpage + 1) {
      pageNumbers.push(props.currentpage + 1);
    }
    if (props.totalPages >= props.currentpage + 2) {
      pageNumbers.push(props.currentpage + 2);
    }
  } else if (props.currentpage > 1) {
    if (props.currentpage >= 3) {
      pageNumbers.push(props.currentpage - 2);
      pageNumbers.push(props.currentpage - 1);
    } else {
      pageNumbers.push(props.currentpage - 1);
    }
    pageNumbers.push(props.currentpage);

    if (props.totalPages >= props.currentpage + 1) {
      pageNumbers.push(props.currentpage + 1);
    }
    if (props.totalPages >= props.currentpage + 2) {
      pageNumbers.push(props.currentpage + 2);
    }
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item" onClick={() => props.paginate(1)}>
          <button className="page-link">First Page</button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => props.paginate(number)}
            className={
              "page-item " + (props.currentpage === number ? "active" : "")
            }
          >
            <button className="page-link">{number}</button>
          </li>
        ))}
        <li
          className="page-item"
          onClick={() => props.paginate(props.totalPages)}
        >
          <button className="page-link">Last Page</button>
        </li>
      </ul>
    </nav>
  );
};
