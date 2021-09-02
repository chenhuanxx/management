import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest'
let maplayer
var streetmap=function(){
    maplayer=new TileLayer({
        source:new TileArcGISRest({
            url:'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
        })
    })
    return [maplayer];
}

var mapconfig={
    x:120.741638,     //中心点经度和纬度
    y:31.260344,
    zoom:14,          //地图缩放级别
    streetmap:streetmap
};

export default mapconfig
