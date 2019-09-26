const menuList = [
{
    title:'首页',
    key:'/home',
    icon:'home',
},
    
{
    title:'商品',
    key:'/products',
    icon:'appstore',

    children:[
        {
            title:'品类管理',
          key:'/category',
    icon:'bars',
        },
             {
            title:'商品管理',
          key:'/product',
    icon:'mail',
        }
    ]

},

 {
    title:'用户管理',
    key:'/user',
    icon:'home',
},

{
    title:'角色管理',
    key:'/role',
    icon:'home',
},


{
    title:'图形图表',
    key:'/charts',
    icon:'home',

 children:[
        {
            title:'柱形图',
          key:'/bar',
    icon:'bars',
        },
             {
            title:'折线图',
          key:'/line',
    icon:'line',
        },
          {
            title:'饼图',
          key:'/pie',
    icon:'line',
        }
    ]

},







]


export default menuList

