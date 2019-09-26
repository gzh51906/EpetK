import React,{Component} from 'react';
import { Layout } from 'antd';
import {Route, Switch,Redirect} from 'react-router-dom'
    import LeftNav from "../../components/left-nav";
    import Header from "../../components/header";


 import Home from "../home/home.js";
   import Category from "../category/category.js";
   import Product from "../product/product.js";
   import Role from "../role/role.js";
   import User from "../user/user.js";
   import Bar from "../charts/bar.js";
   import Line from "../charts/line.js";
   import Pie from "../charts/pie.js";
 





const {  Footer, Sider, Content } = Layout;


 export default class Admin extends Component{
    render(){
        return (
             <Layout style={{height:'100%'}} >
      <Sider>
        <LeftNav/>
      </Sider>
      <Layout>
        <Header>Header</Header>

        <Content style={{ margin:20,background:' #fff'}}>
      
   <Switch>
                 <Route path="/home"   component={Home}/>
              <Route path="/category"   component={Category}/>
              <Route path="/product"  component={Product}></Route>
              <Route path="/role"   component={Role}></Route>
              <Route path="/user"   component={User}></Route>
              <Route path="/bar"   component={Bar}></Route>
              <Route path="/line"   component={Line}></Route>
              <Route path="/pie"   component={Pie}></Route>
                      <Redirect to='/home'/> 
                </Switch>


             
      
        </Content>
        <Footer style={{textAlign: 'center'}}>好难受</Footer>
      </Layout>
    </Layout>
      
        )
    }
}


