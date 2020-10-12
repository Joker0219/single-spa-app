import $ from 'jquery'
// import createHistory from 'history/browser'
// var history = createHistory();
// import Cesium from 'cesium/Build/Cesium/Cesium'

export function bootstrap(props){
    return Promise
    .resolve()
    .then(() => {
        var viewer = new Cesium.Viewer('cesiumContainer');
    })
}

export function mount(props){
    return Promise
    .resolve()
    .then(() => {
        $("<button>To React</button>").appendTo("#thirdPartyApp")
        .click(() => {
            window.open("react");
        })
    })
}

export function unmount(props) {
    return Promise
        .resolve()
        .then(() => {
            $("#myapp").text("")
        })
}