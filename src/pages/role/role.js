import React,{Component} from 'react';
import {Card,Table,Button} from "antd";
import {role} from "../../api/index";

export default class Role extends Component{

        state = {
            roles:[
//                 {
//     key: '1',
//     name: '胡彦斌',
//     age: 32,
//     address: '西湖区湖底公园1号',
//   },
//   {
//     key: '2',
//     name: '胡彦祖',
//     age: 42,
//     address: '西湖区湖底公园1号',
//   },
            ]
        }

initColumn = () => {
    this.columns = [
        {
            title:'角色名称',
            dataIndex :'title'
        },
         {
            title:'授权人',
            dataIndex :'name'
        },
    ]
}
getRoles = async() => {
    const ressult = await  role()
                const roles = ressult.data.data
                console.log(roles);
                this.setState({roles})
}

componentWillMount (){
    this.initColumn()
} 

        onRow = (role) =>{
            return {
                onClick: event =>{
                    console.log(role);
                }
            }
        }


componentDidMount (){
    this.getRoles()
} 



// 




    render(){
             const{roles} = this.state
         const title = (
        
                    <span>
                    <Button  type = 'primary'>创建角色</Button>&nbsp;&nbsp;
                    <Button  type = 'primary' disabled>设置角色授权</Button>
                    </span>
                )     

        return (
       

          <Card title={title}  >
           <Table  bordered    rowKey = "_id" dataSource={roles} columns={this.columns}
        pagination = {{defaultPageSize:5,showQuickJumper:true}}
        rowSelection = {{type:'radio'}}
        onRow = {this.onRow}
    
     />
         
         
         </Card>

      
        )
    }
}