// Libraries
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Interface
export interface TaskData {
    id: number
    title: string
    dead_line: Date
    start_time: string
    end_time: string
    remind: string
    repeat: string
    completed: boolean
    is_new: boolean
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
        idsCompleted: [] as number[],
        idsPending: [] as number[],
    },
    reducers: {
        // Add 
        addTask(state, action) {
            let { tasks } = state;
            let { length: oldLength } = tasks;
            let newTask = action.payload;
            newTask.id = oldLength + 1;
            state.idsPending.push(newTask.id);
            newTask.is_new = true;
            state.tasks.push(newTask)
        },

        // Clear All Task
        clearTask(state, action) {
            state.tasks = [];
            state.idsCompleted = [];
            state.idsPending = [];
        },

        // Complete
        completeTask(state, action) {
            let { id } = action.payload;
            let index = state.tasks.findIndex((item) => item.id == id); 

            if(state.tasks.length > index){
                state.tasks[index].completed = true;
                state.tasks[index].is_new = false;

                let { id } = state.tasks[index];
                console.log({title: '------------------------------ Div ----------------------------------'});
                console.log({id, index});
                state.idsCompleted.push(id);
                state.idsPending = state.idsPending.filter((itemId) => itemId != id);
            }
        },

        // Revert
        revertTask(state, action) {
            let { id } = action.payload;
            let index = state.tasks.findIndex((item) => item.id == id); 

            if(state.tasks.length > index){
                state.tasks[index].completed = false;

                let { id } = state.tasks[index];
                state.idsPending.push(id);
                state.idsCompleted = state.idsCompleted.filter((itemId) => itemId != id);
            }
        },
    }
})

let State  = TasksSlice.getInitialState();

export const selectTasks = (state: typeof State) => state.tasks;
export const selectTaskById = (state: typeof State, id: number) => state.tasks.find(item => item.id === id);

export const selectAllPendingTaskIds = (state: typeof State) => state.tasks.filter(item => !item.completed).map(({ id }) => id);
export const selectAllCompletedTaskIds = (state: typeof State) => state.tasks.filter(item => item.completed).map(({ id }) => id);

// Exports
export const { 
    addTask,
    clearTask,
    completeTask,
    revertTask,
} = TasksSlice.actions

const persisterReducer = persistReducer(persistConfig, TasksSlice.reducer);

export default persisterReducer;