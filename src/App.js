
import React, { Component } from 'react';

import 'antd/dist/antd.css'; 
import {BrowserRouter,Route, Switch} from 'react-router-dom'

        import Login from "./pages/login/login.js";
        import Admin from "./pages/admin/admin.js";

             class App extends Component{
                 
    //     constructor(){
    //         super();
    // }
            render(){
             return  (
 <BrowserRouter>
            <Switch>
                    <Route path="/login" exact  component={Login} ></Route>
                    <Route path="/"   component={Admin}></Route>
                       
                </Switch>
    </BrowserRouter>
)
            }
          
             }

  

export default App;
