/*
includes interface request functions
*/
import ajax from './ajax'

//request register interface
export const reqRegister = (user) => ajax('/register', user, 'POST')

//request login interface
export const reqLogin = (user) => ajax('/login', user, 'POST')

//request update interface
export const reqUpdateuser = (user) => ajax('/update', user, 'POST')