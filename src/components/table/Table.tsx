type TablePropType = {
  tableData: any[];
};
const Table: React.FC<TablePropType> = ({ tableData }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full mt-5 ">
          {/* map on title of table */}
          <thead>
            <tr className="bg-primary-400">
              <th className="p-2">#</th>
              {tableData &&
                Object.keys(tableData[0] || {}).map((item, index) => (
                  <th className="p-2" key={index}>
                    {item}
                  </th>
                ))}
            </tr>
          </thead>
          {/* map table data */}
          <tbody>
            {tableData &&
              tableData.map((data, index) => (
                <tr
                  key={data._id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  {Object.values(data || {}).map((value, index) => (
                    <td key={index} className="px-4 py-2 text-center">
                      {String(value)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
