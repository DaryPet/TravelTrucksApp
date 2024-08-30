// import { useState } from "react";
// // import css from "./Pagination.module.css";

// export default function Pagination({ items, itemsPerPage }) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(items.length / itemsPerPage);
//   const currentItems = items.slice(0, currentPage * itemsPerPage);

//   const handleLoadMore = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div>
//       <div>{currentItems}</div>
//       {currentPage < totalPages && (
//         <button onClick={handleLoadMore}>Load More</button>
//       )}
//     </div>
//   );
// }
