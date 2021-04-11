<!--
 * @Descripttion: 
 * @version: 
 * @Author: xds
 * @Date: 2021-03-29 21:28:56
 * @LastEditors: xds
 * @LastEditTime: 2021-04-11 22:53:11
-->
<template>
  <div id="svg-container">
    
  </div>
</template>

<script>

  import * as dg from 'dagre-d3'
  import * as d3 from 'd3'

  export default{
    name: 'dagre',
    data(){
      return {
        dataset: {
          nodes: [
            {id: 0,label: "流动人员",shape: "rect"},
            {id: 1,label: "安全筛查",shape: "rect"},
            {id: 2,label: "热像仪人体测温筛查",shape: "diamond"},
            {id: 3,label: "人工复测",shape: "diamond"},
            {id: 4,label: "快速通过",shape: "rect"},
            {id: 5,label: "紧急处理",shape: "rect"}
          ],
          edges: [
            {source: 0,target: 1,label: ""},
            {source: 1,target: 2,label: ""},
            {source: 2,target: 4,label: "正常"},
            {source: 2,target: 3,label: "不正常"},
            {source: 2,target: 5,label: "不正常"},
            // {source: 3,target: 4,label: "正常"}
          ]
        }
      }
    },
    created(){},
    mounted(){
      this.creatGraph()
    },
    methods:{
      creatGraph(){
        let svgGroup = d3.select("#svg-container").append('svg').attr('width', 1000).attr('height', 1000).append('g')
        let g = new dg.graphlib.Graph()
        g.setGraph({
          rankdir:'LR',
          align:'DL',
          nodesep: 100,
          edgesep:50,
          ranksep: 50,
          marginx:50,
          marginy:100
        });
        
        this.dataset.nodes.forEach(item => {
          g.setNode(item.id, {
            // node label
            label: item.label,
            // node shape
            shape: item.shape,
            // node style
            style: 'fill: #fff; stroke:#000'
          });
        });
        this.dataset.edges.forEach(item => {
          g.setEdge(item.source,item.target, {
              //边标签
              label: item.label,
              //边样式
              style: "fill:#fff;stroke:#333;stroke-width:1.5px"
          });
        });
        let render = new dg.render();
        render(svgGroup, g)
        svgGroup.selectAll("g.node")
        .on("click", function (e, v) {
          console.log(typeof v)
          // let newG = g.removeNode(v)
          // console.log(newG.setNode)
          // render(svgGroup, newG)
        })
      }
    },
  }
</script>