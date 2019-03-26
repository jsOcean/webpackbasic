/* var config = require('../config.json')

module.exports = {
    sayhello:function() {
        console.log(config.world);
    }
} */

import React,{Component} from 'react'
import config from '../config.json'

import helloone from '../css/hello.css' //引入css

class hello extends Component {
    render() {
        return (
            <div className={helloone.rootchild}> {/* className 是添加类名 */}
                <div>{config.world}</div><br></br>
              {/*   <div className={helloone.imgsch}></div> */}
            </div>
        )
    }
}
export default hello