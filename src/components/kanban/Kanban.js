import React, { useState } from 'react'
import './Kanban.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {TiDelete} from 'react-icons/ti'

export default function Kanban() {
    const [taskInput, setTaskInput] = useState('')
    const [tasks, setTasks] = useState([
        {
          name: "Test",
          stage: 0,
        },
      ])
    
      const stageNames = ["First stage", "Second stage", "Third stage", "Fourth stage"]


      const tasksWithStages = stageNames.map((stage, index) => {
        let stageTasks = []
        for(let i = 0; i < tasks.length; i ++) {
          if (tasks[i].stage === index) {
            stageTasks.push({...tasks[i]})
          }
        }
        return {
          stageName: stage,
          stages: [...stageTasks]
        }
      })

    
      function removeTask(task) {
        const newTasks = tasks.filter((t) => t.name != task.name && t.stage != task.stage) 
        setTasks(newTasks)
      }
    
      function moveNextStage(task) {
        const newTasks = tasks.map((t, i) => {
          if (t.name == task.name) {
            return {
              ...t,
              stage: task.stage === 3 ? 3 : task.stage + 1 
            }
          } else {
            return t
          }
        })
        setTasks(newTasks)
      }

      function movePrevStage(task) {
        const taskIndex = tasks.findIndex((t) => t != task) 
        const newTasks = tasks.map((t, i) => {
          if (t.name == task.name) {
            return {
              ...t,
              stage: task.stage === 0 ? 0 : task.stage - 1
            }
          } else {
            return t
          }
        })
        setTasks(newTasks)
      }
      

      function addTask() {
        setTasks(prevTasks => {
          return ([
            ...prevTasks,
            {
              name: taskInput,
              stage: 0,
            }
          ])
        })
        setTaskInput('')

      }
      
      return (
        <div className="Kanban">
            <div className="input-container">
              <input onChange={(e) => setTaskInput(e.target.value)} value={taskInput} placeholder="New task name"className="task-input" />
              <button onClick={addTask} disabled={!taskInput} className="task-input-button">Create task</button>
            </div>
            <div className="kanban-content">
              {tasksWithStages.map((stageName, index) => (
                <div className="kanban-card">
                  <h3 className="kanban-card-heading">{stageName.stageName}</h3>
                  <ul className="kanban-card-items-container">
                    {stageName.stages.map((task, index) => {
                      return(
                        <li className="kanban-card-item">
                          <h4 className="card-item-heading">{task.name}</h4>
                          <div className="kanban-card-item-icons">
                            <BsFillArrowLeftCircleFill onClick={() => movePrevStage(task)} id="arrow-left-icon" />
                            <BsFillArrowRightCircleFill onClick={() => moveNextStage(task)}/>
                            <TiDelete onClick={() => removeTask(task)} id="delete-icon" />
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      )
}