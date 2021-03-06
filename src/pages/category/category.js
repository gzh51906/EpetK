import React,{Component} from 'react';
import {Card,Table,Button,Icon,Modal,Input} from "antd";
import LinkButton from "../../components/link-button";
import {reqL,reqUpdateCategory,reqAddCategory,reqremoveCategory,reqSearchCategory} from "../../api/index";
import  AddFrom  from "./add-form.jsx";
import  UpdateForm  from "./update-form.jsx";
export default class Category extends Component{
   state = {
       flag:true,
       parentId:"0",
       parentName:'',
       loading:false,
       categorys:[],
       subCategorys:[],
       showStatus:0,   
       searchName:'',
   }
    
    //异步获取请求 await返回对象 而不是prm对象
    getCategorys = async()=>{
        this.setState({loading:true})
        const {flag} = this.state
     
        const  result = await reqL();
          this.setState({loading:false})
         const categorys = result.data.data
         const subCategorys = categorys.filter(item=>item.parentId!=='0')
   
            if (flag) {
                   this.setState({
            categorys
        })
            }else{
            this.setState({
            subCategorys:subCategorys
        })
     
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
     <LinkButton onClick = { ()=> this.showUpdate(category)} > 修改分类 </LinkButton>
    {this.state.flag? <LinkButton  onClick = {()=>{this.showSub(category)}} > 查看子分类 </LinkButton>:null }
    <LinkButton  onClick = { ()=> this.delete(category)} > 删除 </LinkButton>
      </span>
    )
  }
]
    }
//删除
    delete= async (category) =>{
        console.log(category._id);

    const parentId = category._id

 await reqremoveCategory (parentId)
    this.getCategorys()
    }





    componentWillMount (){
        this.initColumns()
    }
            //点击取消

        handleCancel = () =>{
            //清除数据
            this.from.resetFields()
             this.setState({
                  showStatus:0
            })
        }

    //添加分类

addCategory =async () =>{
     this.setState({
                  showStatus:0
            })
    const categoryName = this.from.getFieldValue('categoryName')
    
     this.from.resetFields()

 await reqAddCategory (categoryName)


    this.getCategorys()


}


showAdd = () =>{
      this.setState({
                  showStatus:1
            })
}

//修改分类
updateCategory = async() => {
      this.setState({
                  showStatus:0
            })
    const categoryId = this.category._id

    const categoryName = this.from.getFieldValue('categoryName')
     this.from.resetFields()

 await reqUpdateCategory (categoryId,categoryName)


    this.getCategorys()


}




showUpdate = (category) =>{
this.category = category
       this.setState({
                  showStatus:2
            })
}



    showSub = (category)=>{
       this.setState({
           flag:false,
           parentName:category.title
       }, ()=>{
        //    console.log('flag',this.state.flag);
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
        // 查询
        getPro = async()=>{
            this.setState({loading:true})
 const search  =  this.state.searchName
 console.log(search)
       const result   =  await  reqSearchCategory(search)
       this.setState({loading:false})
        const data12  =  result.data.data
 console.log(data12);
        this.setState({
            subCategorys:data12
        })
        }
    render(){
        const category = this.category || {}

       
const {categorys,loading,flag,subCategorys,parentName,showStatus,parentId,searchName} = this.state
  


     const title =  flag? '一级分类列表'  :(
         <span>
         <LinkButton  onClick={this.showCat} >一级分类列表</LinkButton>
         <Icon type='arrow-right' style = {{marginRight:5}}/>
        <span>  {parentName} </span>
                    <span> 
          <Input placeholder = '关键字'  style={{width:"140px"}}
            onChange = { event => this.setState({searchName:event.target.value})}
           />     
    <Button type = 'primary'   onClick = {this.getPro} >搜索 </Button>
  </span>    
         </span>
     )

            const extra = (
 
                <Button type = 'primary'  onClick = {this.showAdd}>
                    <Icon type = 'plus'/>
                添加
                </Button>
            )
        return (
           <Card title={title}  extra={extra} >
       

    <Table  bordered  loading={loading}   rowKey = "_id" dataSource={flag? categorys: subCategorys} columns={this.columns}
        pagination = {{defaultPageSize:5,showQuickJumper:true}}
    
     />

       <Modal
          title="添加分类"
          visible={showStatus===1}
          onOk={this.addCategory}
          onCancel={this.handleCancel}
        >
         <AddFrom  categorys = {categorys} parentId={parentId} setForm = {(from)=>{this.from = from}}  />
        </Modal>


       <Modal
          title="修改分类"
          visible={showStatus===2}
          onOk={this.updateCategory}
          onCancel={this.handleCancel}
        >
           <UpdateForm   categoryName = {category.title}
               setForm = {(from)=>{this.from = from}}    />
       
        
        </Modal>


     
    </Card>
        )
    }
}



