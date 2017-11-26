import React from 'react'

export default class BaiduMap extends React.Component {
 
componentDidMount () {
  var BMap = window.BMap
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(118.78365, 32.08332);
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
  map.centerAndZoom(point, 35);
  map.enableScrollWheelZoom(); 

  const addressText = {
    chinese: {
      title: "智道公司：",
      address: "地址：南京市新模范马路5号科技创新大楼21楼B座"
    },
    english: {
      title: "Wisdom：",
      address: "Address：No.5 Xinmofan Road, Nanjing, Nanjing Sci-Tech Center, 21F-B"
    }
  }
  const popText = this.props.language==="zh"? addressText.chinese: addressText.english;

	var opts = {
	  width : 200,     // 信息窗口宽度
	  height: 100,     // 信息窗口高度
	  title : popText.title, // 信息窗口标题
	  enableMessage:true,//设置允许信息窗发送短息
	  message: popText.title
	}
	var infoWindow = new BMap.InfoWindow(popText.address, opts);  // 创建信息窗口对象 
	marker.addEventListener("click", function(){          
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}); 
}
 
render () {
  return (
    <div>
      <div
        id='allmap'
        style={{
          width:'100vw',
          height:'60vh',
        }} 
      />
    </div>
    )
  }
}