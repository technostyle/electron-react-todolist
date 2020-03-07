import {get} from 'lodash'

export const equals = to => val => (val === to);
export const prop = (key, defaultValue) => object =>  get(object, key, defaultValue)
