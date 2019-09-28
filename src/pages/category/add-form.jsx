
import React,{Component} from 'react';
import { Form,Select,Input } from "antd";
    import PropTypes from 'prop-types';
    const Item = Form.Item
    const Option = Select.Option

 class AddFrom extends Component{
   static propTypes = {
            categorys:PropTypes.array.isRequired,
            setForm:PropTypes.func.isRequired,
            parentId:PropTypes.string.isRequired,
            }

   componentWillMount(){
    this.props.setForm(this.props.form);
    }

    render(){
        const {categorys,parentId} = this.props
        
     const {getFieldDecorator} =this.props.form

        return (
        <Form>
        <Item>
            {
                getFieldDecorator('parentId',{
                    initialValue:parentId
                })(
   <Select>
                <Option value="0">一级分类</Option>
              {
                  categorys.map(c=> <Option value={c._id}>{c.title}</Option>)
              }
            </Select>
        )
            }

            </Item>
   <Item>
        {
                getFieldDecorator('categoryName',{
                    initialValue:''
                })(
 <Input placeholder = '请输入分类名称'></Input>
        )
            }
 </Item>
        </Form>
      
        )
    }
}

export default Form.create()(AddFrom)


