// 托盘
(function(){
	var isShowWindow = true;

    var win = gui.Window.get();

	// Create a tray icon
	var tray = new gui.Tray({
		title: '天马',
		icon: 'img/app.png'
	});

	// Give it a menu
	var menu = new gui.Menu();

    menu.append(new gui.MenuItem({
        click : function(){
            console.log('hello');
        },
        // type: 'checkbox',
        label: '选择目录',
        tooltip : 'hello'
    }));

	menu.append(new gui.MenuItem({
		// type: 'checkbox',
		label: '启动'
	}));

    menu.append(new gui.MenuItem({
        // type: 'checkbox',
        label: '停止'
    }));
    menu.append(new gui.MenuItem({
        type: 'separator'
    }));

    menu.append(new gui.MenuItem({
        // type: 'checkbox',
        label: '关闭',
        click : function(){
            win.close(true);
        }
    }));

    tray.menu = menu;



	tray.on('click',
		function(o)
		{
            console.log(o);
            var win = gui.Window.get();
            win.show();
		}
	);

})();