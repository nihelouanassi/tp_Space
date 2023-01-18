import React, { useState } from 'react';

const Table= ({ data, itemsPerPage })=> {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  return (
    <div>
      <table className="table-fixed border-separate rounded-lg border-2 border-orange-600 my-8 mx-8">
        <thead>
          <tr>
            <th className="px-4 py-2 text-white rounded-lg border-2 bg-orange-400 border-orange-600">Name</th>
            <th className="px-4 py-2 text-white rounded-lg border-2 bg-orange-400 border-orange-600">Rocket</th>
            <th className="px-4 py-2 text-white rounded-lg border-2 bg-orange-400 border-orange-600">Details</th>
            <th className="px-4 py-2 text-white rounded-lg border-2 bg-orange-400 border-orange-600 min-w-64"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 rounded-lg border-2 border-orange-600">{item.name}</td>
              <td className="px-4 py-2 rounded-lg border-2 border-orange-600">{item.rocket}</td>
              
              
              {item.details ? <td className="px-4 py-2 rounded-lg  border-2 border-orange-600">{item.details}</td> : <td className="px-4 py-2 rounded-lg  border-2 border-orange-600">Pas de details</td>}
              <th className="px-4 py-2 text-white rounded-lg border-2 bg-orange-400 border-orange-600 min-w-64"><img src={item.links.patch.small}></img></th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <button
          className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-l"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-2 text-orange-600 ">{currentPage}</span>
        <button
          className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-r"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;
