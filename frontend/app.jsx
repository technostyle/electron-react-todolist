import React from 'react'
import { Provider } from "react-redux";

import {store} from 'store'
import {Todos} from 'containers/todos'

export const App = () => (
<Provider store={store}>
    <Todos />
</Provider>
)
