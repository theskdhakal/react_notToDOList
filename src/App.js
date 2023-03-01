import "./App.css";
import { Form } from "./component/Form.js";
import { Table } from "./component/Table.js";
import { useState } from "react";
const hrWk = 24 * 7;

function App() {
  const [taskList, setTaskList] = useState([]);
  const hr = taskList.reduce((subttl, { hr }) => subttl + +hr, 0);
  // const hr=taskList.reduce((subttl,item)=> subttl + +item.hr,0)
  const addTask = (data) => {
    if (hrWk < hr + +data.hr) {
      return alert("Hrs exceeded");
    }
    setTaskList([...taskList, data]);
  };

  const taskSwitcher = (id, type) => {
    const tempArg = taskList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(tempArg);
  };

  // const handleOnMarkGood = (id) => {
  //   const tempArg = taskList.map((item) => {
  //     if (item.id === id) {
  //       item.type = "entry";
  //     }
  //     return item;
  //   });
  //   setTaskList(tempArg);
  // };

  const deleteBtn = (id) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      const deleteArg = taskList.filter((item) => item.id !== id);
      setTaskList(deleteArg);
    }
  };

  return (
    <div class="wrapper">
      <div class="container">
        {/* <!-- title  --> */}
        <div class="row">
          <div class="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        {/* <!-- form area  --> */}
        <Form addTask={addTask} />

        {/* <!-- list area  --> */}
        <Table
          taskList={taskList}
          taskSwitcher={taskSwitcher}
          deleteBtn={deleteBtn}
        />

        {/* <!-- total hrs area  --> */}
        <div class="row fw-bold">
          <div class="col">
            The total hours allocated for this week is{" "}
            <span id="totalHrs">{hr}</span> Hours
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
