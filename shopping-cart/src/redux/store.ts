import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
const saga = createSagaMiddleware();
export const store=configureStore({
reducer:{},
middleware:[saga]

})