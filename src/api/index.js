

import ajax from "./ajax";

// export const reqLogin =(username,password) => ajax('/login',{username,password},'POST')
export const reqL =() => ajax('http://localhost:5000',{},'GET')

// export  const reqAdduser =(user) => ajax('/manage/user/add',user,'POST')


