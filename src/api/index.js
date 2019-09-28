

import ajax from "./ajax";

//获取所有
export const reqL =() => ajax('http://localhost:5000/goods/all',{},'GET')
//添加

   export const reqAddCategory =(catgoryName) => ajax('http://localhost:5000/goods/change',{catgoryName},'post')


// 更新
export const reqUpdateCategory =(parentId,catgoryName) => ajax(`http://localhost:5000/goods/${parentId}`,{catgoryName},'post')




