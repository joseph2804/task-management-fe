import './App.css';
import config from './config/config';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  let listSatus1 = []
  const [taskName, setTaskName] = useState('');
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
  //  listSatus1 = render()
  });

  function addTask() {
    let url = config.HOST + '/home/addNew'
    if (taskName) {
      axios.post(url, {
        TaskName: taskName,
        Note: '',
        StatusID: 1,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // console.log(taskName)
  }

  function getListTask() {
    let url = config.HOST + '/home/list'
    axios.get(url)
      .then((response) => {
        // console.log(response.data);
        setListTask(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function render() {
    let listSatus1 = []
    listTask.map(item => item.statusID == 1).forEach(item => {
      console.log('oke')
      listSatus1.push(<div><p>{item.TaskName}</p></div>)
    })
    return listSatus1
  }

  getListTask()

  return (
    <div className='container-wrapper'>
      <div className='container mt-3 mb-3'>
        <div className='row g-3 justify-content-center align-items-center'>
          <div className='col-1'>
            <label className='w-100 text-right'>Task Name</label>
          </div>
          <div className='col-3'>
            <input className='w-100' value={taskName} onChange={(e) => { setTaskName(e.target.value) }}></input>
          </div>
          <div className='col-1'>
            <button className='btn btn-primary' onClick={addTask}>Add Task</button>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='row'>
          <div className='col-2'>
            {listSatus1}
          </div>
          <div className='col-10' style={{ backgroundColor: 'blue' }}>
            xyz
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
