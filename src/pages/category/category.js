import React,{Component} from 'react';
import {Card,Table,Button,Icon} from "antd";
import LinkButton from "../../components/link-button";

export default class Category extends Component{
    render(){

     const title = '一级分类列表'
            const extra = (
                <Button type = 'primary'>
                    <Icon type = 'plus'/>
                添加
                </Button>

            )



const dataSource = [
 {
    title : "2019新款-全棉磨毛镂空臻丝绒四件套 床单款1.5m（5英尺）床 吉祥如意",
    subname : "圣悦家纺",
},

{

    title : "2019新款纯棉磨毛-卡通系四件套 1.5m床单款 比心",
    subname : "薏思家纺",
},

{

    title : "2019新款全棉生态磨毛四件套-棚拍图 1.8m床单款四件套 梦想",
    subname : "银石家居",
}

];

const columns = [
  {
    title: '分类的名称',
    dataIndex: 'subname',
  },
  {
    title: '操作',
    width:300,
    render:() => (
      <span >
      
     <LinkButton > 修改分类 </LinkButton>
     <LinkButton > 查看子分类 </LinkButton>
  
      </span>

    )
  },
 
];


        return (
           <Card title={title} extra={extra}>
    <Table  bordered  rowKey = "subname" dataSource={dataSource} columns={columns} />;
    </Card>
        )
    }
}



