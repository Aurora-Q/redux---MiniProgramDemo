import { Provider } from 'lib/mp-redux'
import { store } from 'redux/store';

let appConfig = {
    onLaunch() {}
}

// 这里就是redux架构成功的关键之一，Provider函数接收了store数据源的数据，页面appConfig的数据，成功启动redux层
App(Provider(store)(appConfig))