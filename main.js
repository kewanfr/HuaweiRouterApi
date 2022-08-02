var router = require('@p4d/huawei-router')
require('dotenv').config()

router.setHost('192.168.2.252')
router.setUsername('admin')
router.setPassword(process.env.PASSWORD)

var networkType = {
  0: "Aucun Service",
  4: "3G",
  9: "3G",
  19: "4G",
}

router.getStatus().then((data) => {
  var result = {
    Signal: data.SignalIcon,
    NetworkType: networkType[data.CurrentNetworkType] || "Aucun service",
    datas: data
  }
  console.log(JSON.stringify(result));
})