import React,{Component} from 'react';
import  "./index.css";
import { withRouter } from "react-router-dom";
import { Modal } from 'antd';
import LinkButton from "../link-button";
import {formateDate} from "../../config/dateUtils";
import menuList from "../../config/menuConfig";
 class Header extends Component{
     state = {
         currentTime:formateDate(Date.now()),
         dayPictureUrl:'http://api.map.baidu.com/images/weather/day/qing.png',
         weather:'晴',
     }
// 动态渲染title
   getTitle = () =>{
        const path = this.props.location.pathname
    let title  
    menuList.forEach(item => {
        if (item.key ===path) {
            title = item.title
        }else if (item.children){
            const cItem = item.children.find(cItem => cItem.key ===path)
            if (cItem) {
                title = cItem.title
            }
        }
    })
  return  title

    }

//  获取时间

   getTime = () =>{
       setInterval(()=>{
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
       },1000 )
   }


// 对话框
    logout = () =>{
        Modal.confirm ({
    content: '确认退出吗',
    onOk:() =>{
      this.props.history.replace('/login')
    },
 
  })

    }




  componentDidMount(){
      this.getTime()
  }
    render(){

        const title = this.getTitle()
        const {currentTime,dayPictureUrl,weather}=this.state
        return (
            <div className="header">
            <div className="header-top">
             <span>
                 欢迎, admin
             </span>
             <LinkButton onClick ={this.logout}> 退出 </LinkButton>
          
           
            </div>
  <div className="header-bottom">
  <div className="header-bottom-left">{title}</div>
       <div className="header-bottom-right">
           <span >{currentTime}</span>
           <img src={dayPictureUrl} alt=""/>
           <span>{weather}</span>
       </div>
  
   </div>
            </div>
      
        )
    }
}


 export default withRouter(Header)


