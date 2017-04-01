import _ from 'lodash';

require('./index.css');
require('./main.scss');
require('./hello.js');

function component () {
    var element = document.createElement('div');

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = _.join(['Hello','webpack!!???'], ' ');

    return element;
}

document.body.appendChild(component());