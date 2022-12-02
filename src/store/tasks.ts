// Libraries
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Interface
export interface TaskData {
    id?: number
    title: string
    dead_line: Date
    start_time: string
    end_time: string
    remind: string
    repeat: string
    completed: boolean
}

// Persist config
const id = "tasks";
const persistConfig = {
    key: id,
    storage: AsyncStorage,
};

// Slide
const TasksSlice = createSlice({
    name: id,
    initialState: {
        tasks: [] as TaskData[],
        completedTasks: [] as TaskData[]
    },
    reducers: {
        // Add 
        addTask(state, action) {
            let { tasks } = state;
            let { length: oldLength } = tasks;
            let newTask = action.payload;
            newTask.id = oldLength + 1;
            tasks.push(newTask);
        },

        // Clear All Task
        clearTask(state, action) {
            state.tasks = [];
            state.completedTasks = [];
        },

        // Complete
        completeTask(state, action) {
            let { index } = action.payload;

            if(state.tasks.length > index){
                let tempTask = state.tasks[index];
                tempTask.completed = true;
                state.tasks = state.tasks.filter((item) => !item.completed)
                state.completedTasks.push(tempTask);
            }
        },

        // Revert
        revertTask(state, action) {
            let { index } = action.payload;

            if(state.completedTasks.length > index){
                state.completedTasks[index].completed = false;
                let tempTask = state.completedTasks[index];
                tempTask.completed = false;
                state.tasks.push(tempTask);
                state.completedTasks = state.completedTasks.filter((item) => item.completed)
            }
        },
    }
})

// Exports
export const { 
    addTask,
    clearTask,
    completeTask,
    revertTask,
} = TasksSlice.actions

const persisterReducer = persistReducer(persistConfig, TasksSlice.reducer);

export default persisterReducer;