import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest'
import OSM from "ol/source/OSM"
import XYZ from 'ol/source/XYZ'

let maptype=2          //0表示部署的离线瓦片地图，1表示OSM,2表示使用Arcgis在线午夜蓝地图服务

var streetmap=function(){
    var maplayer=null;
    switch(maptype){
        case 0:
            maplayer=new TileLayer({
                source: new XYZ({
                    url:'http://127.0.0.1:7080/streetmap/shenzhen/{z}/{x}/{y}.jpg'
                })
            })
        break;
        case 1:
            maplayer=new TileLayer({
                source: new OSM()
            })
        break;
        case 2:
            maplayer=new TileLayer({
                source:new TileArcGISRest({
                    // 经典彩色版："http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer",
                    // 国际英文版："http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer",
                    // 低调灰色版："http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer",
                    // 典雅蓝黑版："http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer
                    url:'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
                    // url:'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
                    // url:'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunityENG/MapServer'
                })
            })
        break;
        case 3:
            maplayer=new TileLayer({
                source: new OSM()
            })
        break;
    }
    return [maplayer];
}

var mapconfig={
    x:120.741638,     //中心点经度和纬度
    y:31.260344,
    zoom:15,          //地图缩放级别
    projection: 'EPSG:4326',
    rotate: true, // 指北针控件
    streetmap:streetmap
};

export default mapconfig
