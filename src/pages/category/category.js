import React,{Component} from 'react';
import {Card,Table,Button,Icon,Modal} from "antd";
import LinkButton from "../../components/link-button";
import {reqL} from "../../api/index";
import  AddFrom  from "./add-form.jsx";
import  Update  from "./update-form.jsx";
export default class Category extends Component{
   state = {
       flag:true,
    //    parentId:"0",
       parentName:'',
       loading:false,
       categorys:[],
       subCategorys:[],
       showStatus:0,   
   }
    
    //异步获取请求 await返回对象 而不是prm对象
    getCategorys = async()=>{
        this.setState({loading:true})
        const {flag} = this.state
     
        const  result = await reqL();
          this.setState({loading:false})
         const categorys = result.data.arr
         const subCategorys = categorys.filter(item=>item.parentId!=='0')
            if (flag) {
                   this.setState({
            categorys
        })
            }else{
            this.setState({
            subCategorys:subCategorys
        })
        console.log(this.state);
            }
    }



    initColumns = () =>{
  this.columns = [
{
    title: '分类的名称',
    dataIndex: 'title',
  },
  {
    title: '操作',
    width:300,
    render:(category) => (
      <span >
     <LinkButton onClick = {this.showUpdate} > 修改分类 </LinkButton>
    {this.state.flag? <LinkButton  onClick = {()=>{this.showSub(category)}} > 查看子分类 </LinkButton>:null }
      </span>
    )
  }
]
    }

    componentWillMount (){
        this.initColumns()
    }


        handleCancel = () =>{
             this.setState({
                  showStatus:0
            })
        }

    //添加分类

addCategory = () =>{
    console.log('showAdd');
}

showAdd = () =>{
      this.setState({
                  showStatus:1
            })
}



//修改分类
updateCategory =() => {
      console.log('123');
}

showUpdate = () =>{
       this.setState({
                  showStatus:2
            })
}



    showSub = (category)=>{
       this.setState({
           flag:false,
           parentName:category.title
       }, ()=>{
           console.log('flag',this.state.flag);
             this.getCategorys()
       })

    }

        showCat =()=>{
            this.setState({
                flag:true,
                parentName:'',
                subCategorys:[]
            })
        }




        //发送异步ajax请求
        componentDidMount (){
            this.getCategorys()
           
        }


    render(){

const {categorys,loading,flag,subCategorys,parentName,showStatus} = this.state
        // console.log(subCategorys);
     const title =  flag? '一级分类列表' :(
         <span>
         <LinkButton  onClick={this.showCat} >一级分类列表</LinkButton>
         <Icon type='arrow-right' style = {{marginRight:5}}/>
        <span>  {parentName} </span>
         </span>
     )
            const extra = (
                <Button type = 'primary'  onClick = {this.showAdd}>
                   
                    <Icon type = 'plus'/>
                添加
                </Button>

            )

        return (
           <Card title={title} extra={extra}>
    <Table  bordered  loading={loading}   rowKey = "_id" dataSource={flag? categorys: subCategorys} columns={this.columns}
        pagination = {{defaultPageSize:5,showQuickJumper:true}}
    
     />


       <Modal
          title="添加分类"
          visible={showStatus===1}
          onOk={this.addCategory}
          onCancel={this.handleCancel}
        >
         <AddFrom/>
         
        </Modal>


       <Modal
          title="修改分类"
          visible={showStatus===2}
          onOk={this.updateCategory}
          onCancel={this.handleCancel}
        >
           <Update/>
        
        </Modal>


     
    </Card>
        )
    }
}



