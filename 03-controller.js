const model = require('./04-model');

function getIndex(req, res) {
  model.getAllHero((arr) => {
    res.render('index', { arr });
  })

}

function getEdit(req, res) {
  res.render('edit');
}

// 使用模板引擎动态渲染的修改页面
function getEdit2(req, res) {
  // 需要把要修改的旧的数据已经带回浏览器
  let id = req.query.id;
  // console.log(id);
  // 根据id把旧的数据获取出来
  model.getHeroById(id, target => {
    // console.log(target);
    res.render('edit2', target);
  })
  // res.send('ok');
}



//修改英雄
function editHeroById(req, res) {
  let data = req.body;
  // console.log(data)
  model.editHeroById(data.id, data, (result) => {
    let response = {};
    if (result) {
      response.code = 200;
      response.msg = '成功';
      response.data = result;
    } else {
      response.code = 500;
      response.msg = '失败';
    }
    res.send(response);
  })

}


// 处理新增页面的请求
function getAdd(req, res) {
  res.render('add');
}


//处理新增英雄的请求
function addNewHeroById(req, res) {
  // console.log(req.body)

  model.addNewHeroById(req.body, (result) => {
    let response = {
      code: 500,
      msg: '失败'
    }
    if (result.affectedRows == 1) {
      response.code = 200;
      response.msg = '成功'
    }
    res.send(response);
  })
}


// 处理删除英雄的请求
function deleteHero(req, res) {
  let id = req.query.id
  model.deleteHero(id, (result) => {
    let response = {
      code: 500,
      msg: '失败'
    }
    if (result.affectedRows == 1) {
      response.code = 200;
      response.msg = '成功';
    }
    res.send(response);
  })
}

// 根据id获取英雄
function getHeroById(req, res) {
  let id = req.query.id;
  console.log(id)
  model.getHeroById(id, (result) => {
    let response = {};
    if (result) {
      response.code = 200;
      response.msg = '成功';
      response.data = result;
    } else {
      response.code = 500;
      response.msg = '失败';
    }
    res.send(response);
  })
}



const controller = {
  getIndex, getEdit, getHeroById, editHeroById, getEdit2, getAdd, addNewHeroById, deleteHero
}

module.exports = controller;