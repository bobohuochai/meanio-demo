var faker = require('faker'),
  moment = require('moment');

function generateMockData() {
  faker.locale = "zh_CN";
  var mock = {};

  //test module
  mock.test = {
    data: [],
    // errors:[{code: '209',message:'error test'}],
    errors: [],
    extraData: {},
    meta: {
      paging: {
        direction: 'DESC',
        pageIndex: 0,
        pageSize: 10,
        sortBy: "id",
        total: 50
      }
    }
  };
  mock.tests = mock.test.data;
  for (var id = 0; id < 10; id++) {
    var lineName = faker.name.firstName();
    var time = faker.name.lastName();
    var partNo = faker.phone.phoneNumberFormat();
    mock.test.data.push({
      "id": id,
      "lineName": lineName,
      "time": time,
      "partNo": partNo
    });
  }
  // line module
  mock.line = {
    data: [],
    // errors:[{code: '209',message:'error test'}],
    errors: [],
    extraData: {},
    meta: {
      paging: {
        direction: 'DESC',
        pageIndex: 0,
        pageSize: 10,
        sortBy: "id",
        total: 50
      }
    }
  };
  mock.lines = mock.line.data;
  for (var id = 0; id < 10; id++) {
    var lineName = faker.name.firstName();
    var time = faker.name.lastName();
    var partNo = faker.phone.phoneNumberFormat();
    mock.line.data.push({
      "id": id,
      "lineName": lineName,
      "time": time,
      "partNo": partNo
    });
  }


  //stores module
  mock.client = {
    data: [],
    // errors:[{code: '209',message:'error stores'}],
    errors: [],
    extraData: {},
    meta: {
      paging: {
        direction: 'DESC',
        pageIndex: 0,
        pageSize: 10,
        sortBy: "id",
        total: 50
      }
    }
  };
  mock.stores = mock.client.data;
  for (var id = 0; id < 10; id++) {
    var lineName = faker.name.firstName();
    var time = faker.name.lastName();
    var partNo = faker.phone.phoneNumberFormat();
    mock.client.data.push({
      "id": id,
      "time": time,
      "partNo": partNo,
      "phone":partNo,
      "address":lineName,
      "regionId":1,
      "regionName":"杭州",
      "serviceEndTime":time,
      "serviceStartTime":time,
      "status":"E",
      "contactName":lineName,
      "locationName":lineName,
      "positionStatus":"正常",
      "latitude":30,
      "longitude":120,
      "picUrl":["https://tse4-mm.cn.bing.net/th?id=OIP.H8Mz7P4jaZKYVBf-Wz930wEgDY&p=0&pid=1.1","http://www.comicyu.com/UploadFiles/News/2011/6/20116814352.jpg","http://pic40.nipic.com/20140406/13742213_222659817000_2.jpg","http://imgstore.cdn.sogou.com/app/a/100540002/593503.jpg"],
    });
  }

 //user module
  mock.user = {
    data: [],
    // errors:[{code: '209',message:'error stores'}],
    errors: [],
    extraData: {},
    meta: {
      paging: {
        direction: 'DESC',
        pageIndex: 0,
        pageSize: 10,
        sortBy: "userName",
        total: 50
      }
    }
  };
  mock.users = mock.user.data;
  for (var userId = 0; userId < 10; userId++) {
    var lineName = faker.name.firstName();
    var time = faker.name.lastName();
    var partNo = faker.phone.phoneNumberFormat();
    var status = "E";
    mock.user.data.push({
      "id":userId,
      "userId": userId,
      "userName": lineName,
      "roleName": status,
      "status": status,
    });
  }

// employee module
  mock.employee = {
    data: [],
    // errors:[{code: '209',message:'error test'}],
    errors: [],
    extraData: {},
    meta: {
      paging: {
        direction: 'DESC',
        pageIndex: 0,
        pageSize: 10,
        sortBy: "employeeId",
        total: 50
      }
    }
  };
  mock.employees = mock.employee.data;
  for (var employeeId = 0; employeeId < 10; employeeId++) {
    var lineName = faker.name.firstName();
    var time = faker.name.lastName();
    var partNo = faker.phone.phoneNumberFormat();
    mock.employee.data.push({
      "id":partNo,
      "employeeId": partNo,
      "employeeNo": partNo,
      "userName":lineName,
      "name":lineName,
      "phone":partNo,
      "departmentId":lineName,
    });
  }


  //monitor
  mock.routes = {
    data: [],
    // errors:[{code: '209',message:'error test'}],
    errors: [],
    extraData: {},
    meta: {}
  };
  for (var id = 11; id < 17; id++) {
    var routeName = '路线' + id;
    var deliveryman = [];
    var routePlanId = id;
    if (id % 2 === 0) {
      deliveryman.push('老王' + id);
    } else {
      deliveryman.push(faker.name.lastName());
      deliveryman.push(faker.name.lastName());
    }
    var storeCount = faker.random.number();
    var vehicleLoad = faker.random.number();
    var distance = faker.random.number();
    var duration = faker.random.number() * 1000 * 60;
    var vehicleLicense = faker.name.lastName();
    mock.routes.data.push({
      id,
      routePlanId,
      routeName,
      deliveryman,
      storeCount,
      vehicleLoad,
      distance,
      duration,
      vehicleLicense
    })
  };

  mock.warehouses = {
    data: [],
    errors: [],
    extraData: {},
    meta: {}
  };
  var warehouses = [{ warehouseId: 1, lng: 120.0949530000, lat: 30.2633650000, warehouseName: '仓库1' },
    { warehouseId: 2, lng: 120.0942770000, lat: 30.2632310000, warehouseName: '仓库2' },
    { warehouseId: 3, lng: 120.0938740000, lat: 30.2631570000, warehouseName: '仓库3' }
  ];
  mock.warehouses.data = warehouses;
  mock.taskbrief = {
    data: [],
    errors: [],
    extraData: {},
    meta: {}
  };
  for (var id = 0; id < 69; id++) {
    var isDelay = (id%2 === 0) ? true : false;
    var taskStatus = 'success';
    if(id % 3 === 1) {
      taskStatus = 'notstart';
    }
    if(id % 3 ===2 ){
      taskStatus = 'warning';
    }
    var locationId = faker.random.number();
    var locationName = "No." + faker.random.number() + "(" + faker.address.country() + ")";
    var routePlanSequenceId = 10001 + id;
    var sequence = id;
    var lng = 120.0949530000 + id / 100000;
    var lat = 30.2633650000 + id / 100000;
    var realCoordinate = [lng.toString(), lat.toString()];
    var signCoordinate = [(lng + 0.00002).toString(), (lat - 0.00002).toString()];
    mock.taskbrief.data.push({
      realCoordinate,
      signCoordinate,
      locationId,
      locationName,
      routePlanSequenceId,
      sequence,
      taskStatus,
      isDelay
    });
  }

  mock.track = {
    data: [],
    errors: [],
    extraData: {},
    meta: {}
  };
  var trace = [];
  for (var id = 100; id < 2000; id++) {
    var lng = 120.1025930000 + id / 100000;
    var lat = 30.2763190000 + id / 100000;
    trace.push([lng, lat]);
  }

  mock.track.data.push({ trace });

  mock.taskdetail = {
    data: [],
    errors: [],
    extraData: {},
    meta: {}
  };
  mock.taskdetail.data.push({
    "actualTime": faker.random.number() * 1000 * 60,
    "address": faker.address.country(),
    "contactName": faker.name.firstName(),
    "contactPhone": faker.phone.phoneNumberFormat(),
    "locationId": 23,
    "orderQuantity": faker.random.number(),
    "predicatedTime": faker.random.number() * 1000 * 60
  });


  // routeDelivery
  mock.deliveredtrack = {
    data: [],
    errors: [],
    extraData: {},
    meta: {}
  };
  var routeDeliveryTrace = [];
  for (var id = 100; id < 2000; id++) {
    var lng = 120.1024930000 + id / 100000;
    var lat = 30.2764190000 + id / 100000;
    routeDeliveryTrace.push([lng, lat]);
 }

  mock.deliveredtrack.data.push({ trace: routeDeliveryTrace });
  
  mock.routedeliverydetail = {
    data: [],
    errors: [],
    extraData: {},
    meta: {}
  };

  var routedeliverydetail = {
      "routeName": "路线" + id,
      "deliveryman": [faker.name.findName()],
      "vehicleLoad": faker.random.number(),
      "predictedDuration": faker.random.number() * 1000,
      "actualDuration": faker.random.number() * 1000,
      "predictedDistance": faker.random.number()/1000,
      "actualDistance": faker.random.number()/1000,
      "warehouse":[ '120.0949530000','30.2633650000','仓库1'],
      "deliveryPrecision":'90.12%'
  };
  mock.routedeliverydetail.data.push(routedeliverydetail);

  mock.routedelivery = {
    data: [],
    // errors:[{code: '209',message:'error test'}],
    errors: [],
    extraData: {},
    meta: {
      paging: {
        direction: 'DESC',
        pageIndex: 0,
        pageSize: 10,
        sortBy: "id",
        total: 30
      }
    }
  };
  mock.routeplans = mock.routedelivery.data;
  for (var id = 1; id < 30; id++) {
    var deliveryman = []
    if (id % 2 === 0) {
      deliveryman.push('老王' + id);
    } else {
      deliveryman.push(faker.name.findName());
      deliveryman.push(faker.name.findName());
    }
    var routePlan = {
      "id": id,
      "routePlanId": id,
      "routeDeliveryId": id,
      "deliveryDate": new moment(faker.date.past()).format('YYYY-MM-DD'),
      "routeName": "路线" + id,
      "deliveryman": deliveryman,
      "vehicleLicense": "浙AT3F" + id,
      "storeCount": faker.random.number(),
      "vehicleLoad": faker.random.number(),
      "predictedDuration": faker.random.number() * 1000,
      "actualDuration": faker.random.number() * 1000,
      "predictedDistance": faker.random.number()/1000,
      "actualDistance": faker.random.number()/1000,
      "deliveredStatus": '已完成',
      "regionName": '区域1'
    }
    mock.routedelivery.data.push(routePlan);
  }

  //regions
  mock.regions = {
  "meta": {},
  "data": [
    {
      "regionId": 1,
      "regionName": "西湖区",
      "province": "浙江",
      "city": "杭州",
      "status": "E"
    },
    {
      "regionId": 2,
      "regionName": "拱墅区",
      "province": "浙江",
      "city": "杭州",
      "status": "E"
    },
    {
      "regionId": 3,
      "regionName": "滨江区",
      "province": "浙江",
      "city": "杭州",
      "status": "E"
    },
    {
      "regionId": 4,
      "regionName": "江干区",
      "province": "浙江",
      "city": "杭州",
      "status": "E"
    },
    {
      "regionId": 5,
      "regionName": "上城区",
      "province": "浙江",
      "city": "杭州",
      "status": "E"
    }
  ],
  "extraData": {},
  "errors": []
};

// user me
mock.userme = {
    data: [],
    // errors:[{code: '209',message:'error test'}],
    errors: [],
    extraData: {},
    meta: {}
  };
mock.userme.data.push({
  userName:'test',
  roleDTOs:[{
    'roleId':1,
    'roleName':"admin"
  }],
  status:null
});


// posts
mock.posts = [];
for( let i=0;i< 10;i++){
  mock.posts.push({
    "id": i,
    "title":faker.commerce.productName(),
    "content": faker.commerce.department()
  })
};
return mock;

}

module.exports = generateMockData;
