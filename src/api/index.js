

import ajax from "./ajax";

//获取所有
export const reqL =() => ajax('http://localhost:5000/goods/all',{},'GET')
export const role =() => ajax('http://localhost:5000/goods/role',{},'GET')
//添加
   export const reqAddCategory =(catgoryName) => ajax('http://localhost:5000/goods/change',{catgoryName},'post')
// 更新
export const reqUpdateCategory =(parentId,catgoryName) => ajax(`http://localhost:5000/goods/xiugai/${parentId}`,{catgoryName},'post')

//删除
export const reqremoveCategory =(parentId) => ajax(`http://localhost:5000/goods/del/${parentId}`,{parentId},'post')

//查找
export  const reqSearchCategory =(search) => ajax('http://localhost:5000/goods/searchlist',{
            title:search
},'post')













