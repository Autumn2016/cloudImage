var tencentyun = require('tencentyun');
var logger = require('./logService');

var bucket = 'source';
var fileid = 'sample' + parseInt(Date.now() / 1000);

tencentyun.conf.setAppInfo('10062882', 'AKIDrrNvDo2RF2tpVytJDBmJVAulfWTblYDI', 'LPizBNrjmZ9pKHvsfO371DvkXcAZyibk', bucket);

//图片上传
tencentyun.imagev2.upload('/tmp/apple.jpg', bucket, fileid, function(ret){
    logger.ndump('ret', ret);
});
