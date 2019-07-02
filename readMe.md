	# create:page 一键生成页面，绑定redux，配置好route

    根目录运行npm run create:page命令，会在/page下面创建用户输入的名称的文件夹，
    创建好index.js,actions.js,constants.js,style.scss,reducer.js
    这些创建好的文件是以/script/createPage/template 下的文件为模板创建的

    然后会自动的帮你绑定好redux，配置好route，默认将路由配置为根路由的子路由

	⚠️: 可以创建深层目录，比如可以在创建的时候输入order/list模块，
	那么脚本就会在page下新建order，然后在order下新建list模块，这个模块的名称为orderList
	route路径为order/list,这个特点在pc端的管理系统会常用，比如订单模块
	order/list
	order/new
	order/update
	order/detail
	那么这样的目录结构会更加清晰，可维护。