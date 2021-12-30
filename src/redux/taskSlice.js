import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        isDarkMode: false,
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(e => e.id !== action.payload)
        },
        toggleIsDone: (state, action) => {
            const idx = state.tasks.findIndex(t => t.id === action.payload);
            state.tasks[idx].isDone = !state.tasks[idx].isDone
        }
    }
})

export const { addTask, removeTask, toggleIsDone } = taskSlice.actions;
export default taskSlice.reducer;