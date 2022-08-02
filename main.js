var router = require('@p4d/huawei-router')
require('dotenv').config()

router.setHost('192.168.2.252')
router.setUsername('admin')
router.setPassword(process.env.PASSWORD)

var networkType = {
  0: "Aucun Service",
  2: "Edge",
  3: "Edge",
  4: "3G",
  5: "3G",
  6: "3G",
  7: "3G",
  8: "3G",
  9: "3G",
  10: "3G",
  11: "3G",
  12: "3G",
  13: "3G",
  14: "3G",
  15: "3G",
  16: "3G",
  17: "3G",
  18: "3G",
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