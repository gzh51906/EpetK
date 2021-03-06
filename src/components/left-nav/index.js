import React,{Component} from 'react';

import "./index.css";

import menuList from "../../config/menuConfig";
import { Menu, Icon} from 'antd';
import { Link, withRouter} from "react-router-dom";
const { SubMenu } = Menu;
  class LeftNav extends Component{
//   遍历menuConfig文件到左侧导航栏

        getMenuNodes = (menuList) => {
              const path = this.props.location.pathname
            return menuList.map(item=>{
                if (!item.children) {
                    return (
                 <Menu.Item key={item.key}>
             <Link to ={item.key}  >
                   <Icon type={item.icon} />
            <span>{item.title}</span>
                </Link>
          </Menu.Item>
                    )
           
                }else{
                            // 展开选项
                        const cItem = item.children.find(cItem => cItem.key === path)
                            if (cItem) {
                                  this.openKey = item.key
                            }

                    return(
                         <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
          {this.getMenuNodes(item.children)}
</SubMenu>
                    )

                }


            })
        }

componentWillMount(){
    this.menuNodes =  this.getMenuNodes(menuList)
}
    render(){
        const path = this.props.location.pathname
    const openKey =  this.openKey

        return (
            <div className="left-nav">
                <Link to ='/'   className="left-nav-header" >
                    <h1>三毛后台</h1>
                </Link>

                <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
        >
            {

               this.menuNodes
            }

  </Menu>


            </div>
      
        )
    }
}



export default withRouter(LeftNav)





