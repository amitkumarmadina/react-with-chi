import {configurerStore} from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';
import reducer from '../features/todo/todoSlice';
export const store = configurerStore({
    reducer : todoReducer
}
)