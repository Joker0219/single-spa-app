import $ from 'jquery'

export function bootstrap(props){
    return Promise
    .resolve()
    .then(() => {
        $("<div id='myapp'><div>").appendTo("body");
    })
}

export function mount(props){
    return Promise
    .resolve()
    .then(() => {
        $("#myapp").html("<h1>my app is mounted</h1>")
    })
}

export function unmount(props) {
    return Promise
        .resolve()
        .then(() => {
            $("#myapp").text("")
        })
}