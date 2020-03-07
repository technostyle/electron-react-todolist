import {get} from 'lodash'

export const prop = (key, defaultValue) => object =>  get(object, key, defaultValue)