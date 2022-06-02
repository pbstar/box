import { Toast } from 'vant';
function tipSuccess (text) {
    if (text) Toast.success(text);
}
function tipFail (text) {
    if (text) Toast.fail(text);
}
export default {
    tipSuccess,
    tipFail
}