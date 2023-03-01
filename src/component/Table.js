import React from "react";

export const Table = ({ taskList, taskSwitcher, deleteBtn }) => {
  const entryList = taskList.filter((item) => item.type === "entry");
  const badList = taskList.filter((item) => item.type === "bad");
  // const entryList = taskList.filter((item) => {
  //   if (item.type === "entry") {
  //     return item;
  //   }
  // });

  // const deleteBtn = (item) => {
  //   return entryList.remove();
  // };

  console.log(entryList);
  return (
    <div class="row mt-5 g-2">
      <div class="col-md">
        <h2 class="text-center">Entry List</h2>
        <hr />
        <table class="table table-striped table-hover">
          <tbody id="task-list">
            {entryList.map((item, i) => (
              <tr key={i.id}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr} hr(s)</td>

                <td class="text-end">
                  <button
                    onClick={() => deleteBtn(item.id)}
                    class="btn btn-danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>{" "}
                  <button
                    onClick={() => taskSwitcher(item.id, "bad")}
                    class="btn btn-success"
                  >
                    <i class="fa-solid fa-right-long"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="col-md">
        <h2 class="text-center">Bad List</h2>
        <hr />
        <table class="table table-striped table-hover">
          <tbody id="bad-list">
            {badList.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr} hr(s)</td>

                <td class="text-end">
                  <button
                    onClick={() => taskSwitcher(item.id, "entry")}
                    class="btn btn-warning"
                  >
                    <i class="fa-solid fa-left-long"></i>
                  </button>{" "}
                  <button
                    onClick={() => deleteBtn(item.id)}
                    class="btn btn-danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div class="text-end fw-bold">
          You can save{" "}
          <span id="totalBadHrs">
            {badList.reduce((bttl, { hr }) => bttl + +hr, 0)}
          </span>{" "}
          Hours
        </div>
      </div>
    </div>
  );
};
