import {configureStore} from '@reduxjs/toolkit';
import { todoReducer } from '../file/slice';

export const store = configureStore({
    reducer: todoReducer
});