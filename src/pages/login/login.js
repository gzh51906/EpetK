import React,{Component} from 'react';
   
import { Form, Icon, Input, Button} from 'antd';
import img from './img/demo2.png'
import "./login.css";
// import {reqLogin} from '../../api'
 class Login extends Component{
// 提交
  handleSubmit = e => {
    e.preventDefault();

      this.props.form.validateFields((err, values) => {
      if (!err) {
  
          this.props.history.replace('/')

//         const {username,password} = values
// reqLogin(username,password).then(response=>{
//   console.log('成功了',response.data);
// }).catch(error=>{
//    console.log('失败了',error);
// })

        // console.log('提交登陆的ajax请求 ', values);

      }else{
        console.log('检验失败');
      }
    });

  
  };

// componentDidMount(){
//       const form = this.props.form
//         console.log(form.getFieldsValue());
// }


    render(){

      const form = this.props.form
      const{getFieldDecorator} = form;
 
        return (
            <div  className="loginq" >
          <img src={img} alt="" /> 
 <header className="login-header" >
          <h1>欢迎来到三毛后台管理系统</h1>
 </header>
    <section className="login-content" >
          <h2>用户登录</h2>
     <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            {
              getFieldDecorator( "username",{
                 rules: [{ required: true, message: '用户名必须输入' },
                 { min:4, message: '用户名至少4位' },
                 { max:12, message: '用户名至少12位' },
                 { pattern: /^[a-zA-Z0-9_]+$/ , message: '用户名必须是英文、数字或下划线组成' }
                 ],
              })(
 <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />

              )
            }
        </Form.Item>
        <Form.Item>
 {
              getFieldDecorator( "password",{
                 rules: [{ required: true, message: '用户名必须输入' },
                 { min:4, message: '用户名至少4位' },
                 { max:12, message: '用户名至少12位' },
                 { pattern: /^[a-zA-Z0-9_]+$/ , message: '用户名必须是英文、数字或下划线组成' }
                 ],
              })(
<Input  
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />

              )
            }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
          登录
          </Button>
        </Form.Item>
      </Form>
    </section>
            </div>

   
        )
    
         
    }
   
}
       
  const WrapLogin = Form.create()(Login)


 export default WrapLogin 
