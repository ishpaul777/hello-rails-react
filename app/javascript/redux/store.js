import { createStore, combineReducers } from '@reduxjs/toolkit'
import greetingsReducer  from './greetingsDux'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

const reducer = combineReducers ({
	greeting: greetingsReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store;
