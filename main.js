"ui";
importClass(android.view.View);
//设置状态栏为透明
ui.statusBarColor(colors.TRANSPARENT);
//透明状态栏{沉浸模式}
activity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
setScreenMetrics(1080, 1920);

var bflogo = "data:image/png;base64,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";


ui.layout(
    <frame w="{{device.width}}px" h="{{device.height}}px">

            <vertical padding="25 25 25 0">
                <card w="*" h="50" margin="0 25 0 25" padding="0" cardCornerRadius="14" cardElevation="0" cardBackgroundColor="#ffffff">
                    <horizontal w="*" h="*" >
                        <text layout_gravity="center|left" marginLeft="15" w="auto" h="auto" textSize="15" textStyle="bold">缤纷</text>
                        <text layout_gravity="center|left"  marginLeft="5"  w="auto" h="auto" textSize="12">- by </text>
                        <card w="auto" h="20" margin="3 0 0 0" padding="0" layout_gravity="center" gravity="center"cardCornerRadius="5" cardElevation="0" cardBackgroundColor="#edf6fc">
                            <text textSize="10" padding="5 3 5 0">Zeb</text>
                        </card>
                        <vertical w="*" h="*"gravity="center|right">
                        <img id="logo"h="30" w="30" radius="40"  layout_gravity="right" marginRight="15" src="{{bflogo}}"/>
                        </vertical>
                    </horizontal>
                </card>
            </vertical>

            <vertical w="*" h="auto" padding="0 75 0 5" layout_gravity="center">
                <card gravity="center" layout_gravity="center" w="*" h="auto" margin="25 0 25 5" cardCornerRadius="14" cardElevation="0" cardBackgroundColor="#ffffff">
                    <vertical w="*" h="*" padding="20" >

                        <text id="urltext" textSize="15sp" textColor="black" text="🌎️ 请输入服务器地址" />
                        <input w="*" h="55" inputType="textUri" layout_gravity="left|center" id="server_input" text="" singleLine="true" lines="1" textSize="13sp" textColor="#6c6c6c"/>

                    
                        <button w="150" h="auto" layout_gravity="center" id="login" margin="0" style="Widget.AppCompat.Button.Colored" text="进入" />
                        
                        <horizontal id="loadbox" w="*" gravity="center" visibility="gone" margin="45">
                            <text textSize="12sp" w="auto" gravity="center" textColor="black" text="⌛️ 请求中 "  />
                            <text id="loadtext"  w="20sp" textSize="13sp" gravity="left" textColor="black" text="."  />
                        </horizontal>
                    </vertical>
                </card>

                <vertical id="slistbox" w="*" h="250" gravity="center" layout_gravity="center" margin="25 0 25 0" padding="10"  visibility="gone" >
                    <list id="slist" gravity="center" w="*" h="*" padding="20">


                        <card w="*" h="45" margin="5" cardCornerRadius="13" cardElevation="0" cardBackgroundColor="#03a9f4">
                            <card  w="*" h="*"  margin="5 0 -1 0" cardCornerRadius="13" cardElevation="0" cardBackgroundColor="#ffffff" >
                                <text w="*" h="*"textSize="13sp" gravity="center" textColor="black" text="{{this.name}}"/>
                            </card>
                        </card>
 
                    </list>
                </vertical>



            </vertical>
            <vertical w="*" h="*" gravity="center|bottom" layout_gravity="bottom" margin="25 0 25 30" padding="30">
                    <frame w="*" h="*" gravity="center|bottom" layout_gravity="bottom">
                        <vertical w="65" h="7"bg="#edf6fc" layout_gravity="bottom" gravity="bottom"></vertical>
                        <text id="clear_" h="20" textSize="12" gravity="center">清除地址缓存</text>
                    </frame>
            </vertical>




        <card id="tipsbox"w="*" h="0" margin="35 35 35 10" cardCornerRadius="13dp" gravity="left" align="left" cardElevation="2" visibility="gone">
            <text w="*" id="tipstext" gravity="center" color="#000000" size="16" text=""/>
        </card>



    </frame>
);

var storage = storages.create("server");


// log(storage.get("server_url"));

ui.login.click(function(){
    //通过getText()获取输入的内容
    var server_url = ui.server_input.getText();
    if(server_url != ""){
        storage.put("server_url",server_url);
        start_(server_url);
        loading(true);
    }else{
        msgbox("❌ 地址不能为空");
    }

});




ui.clear_.on("click",()=>{
    storage.clear();
    ui.server_input.setText("");
    msgbox("✔️ 清除完成")
    let dir = "/sdcard/bfcore/";
    let jsFiles = files.listDir(dir, function(name){
        return name.endsWith(".js") && files.isFile(files.join(dir, name));
    });

    if(jsFiles.length != 0){
        for(let i = 0;i<jsFiles.length;i++){
            files.remove(dir+jsFiles[i]);
        }
    }
    reload();

})


ui.logo.on("click", () => {
    msgbox("😘 欢迎使用缤纷");
})



//⚠️❌✔️
function msgbox(data) {
    let tipsbox_w=ui.tipsbox.visibility
    if(tipsbox_w == "8"){
    ui.run(() => {
    ui.tipstext.setText(data);
    ui.tipsbox.attr("visibility", "visible");
    let i = 0;
    let intervalId = setInterval(function() {
        if(i >= 70) {
            clearInterval(intervalId);
            // 在2秒后，h从100开始每隔10毫秒减少10，直到为0
            setTimeout(function() {
                let j = 70;
                let intervalId2 = setInterval(function() {
                    if(j <= 0) {
                        clearInterval(intervalId2);
                        ui.tipsbox.attr("visibility", "gone"); 
                    } else {
                        ui.tipsbox.attr("h", j.toString());
                        j -= 10
                        ;
                    }
                }, 10);
            }, 1500);
        } else {
            ui.tipsbox.attr("visibility", "visible"); 
            ui.tipsbox.attr("h", i.toString());
            i += 10;
        }
    }, 10); // 10毫秒*10次=100毫秒
    });
    }else{
        ui.run(() => {
            ui.tipstext.setText(data);
        });
    };
}


function reload(){
    if(storage.get("server_url") != undefined){
        ui.server_input.setText(storage.get("server_url"))
    }
    let dir = "/sdcard/bfcore/";
    let jsFiles = files.listDir(dir, function(name){
        return name.endsWith(".js") && files.isFile(files.join(dir, name));
    });
    var jslist = [];

    if(jsFiles.length != 0){
        ui.run(() => {
            ui.slistbox.setVisibility(0);
        });
        
        // console.log(jsFiles)
        for(let i = 0;i<jsFiles.length;i++){
            let data = {name:jsFiles[i]}
            jslist.push(data);
        }
        ui.run(() => {
            ui.slist.setDataSource(jslist);
        });

        
    } else{
        ui.run(() => {
            ui.slistbox.setVisibility(8);
        });
    }

}



ui.slist.on('item_click', function (item, i, itemView, listView) {
    console.log(item.name);
    let filename = item.name;
    // console.log(i)
    itemView.attr("cardElevation","3");
    engines.execScriptFile("/sdcard/bfcore/"+filename);

    setTimeout(function(){
        ui.run(() => { 
            itemView.attr("cardElevation", "0");
        });
    }, 3000);



});

reload();

http.__okhttp__.setTimeout(10000);
var headers = {headers:{
    'Accept-Language': 'zh-cn,zh;q=0.5',
    'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
}};

function start_(url){
    // msgbox("⏳ 正在载入脚本")
    threads.start(function() {
        try { 
                let r = http.get(url, headers);
                if (r.statusCode == 200) {
                    let codeStr = r.body.string()
                    threads.shutDownAll;
                    let filename = getfilename(url);
                    files.createWithDirs("/sdcard/bfcore/"+filename);
                    let file = open("/sdcard/bfcore/"+filename, "w");
                    file.write(codeStr);
                    file.close();
                    ui.run(() => {
                        // engines.execScript(b, codeStr)
                        // toastLog(b)
                        // engines.execScript("/sdcard/bfcore/bfcore.js", codeStr)
                        engines.execScriptFile("/sdcard/bfcore/"+filename);
                        loading(false);
                        
                    });
                    reload();

                } else {
                    toastLog("远程连接超时");
                    loading(false);
                    reload();
                }

            } catch (err) {
                loading(false);
                toastLog("访问服务地址错误");
                reload();

            }
            

    });  

}

function loading(display_){
    if(display_){
        ui.login.setVisibility(8);
        ui.server_input.setVisibility(8);
        ui.urltext.setVisibility(8);

        ui.loadbox.setVisibility(0);
        // 启动加载指示器
        loadingIndicator(false);
    }else{
        ui.login.setVisibility(0);
        ui.server_input.setVisibility(0);
        ui.urltext.setVisibility(0);

        ui.loadbox.setVisibility(8);
        // 停止加载指示器
        loadingIndicator(true);
    }

}

function loadingIndicator(stop) {
    let intervalId = null;
    let dotCount = 0;

    function updateText() {
        dotCount = (dotCount + 1) % 4; // 句号数量从0到3循环
        let dots = ".".repeat(dotCount);
        ui.loadtext.setText(dots); // 更新UI元素的文本
    }

    if (stop && intervalId !== null) {
        clearInterval(intervalId); // 清除定时器
        intervalId = null; // 重置ID，表示没有活动的定时器
        return;
    }

    if (intervalId === null) { // 如果定时器未启动，则启动它
        updateText(); // 立即显示初始状态
        intervalId = setInterval(updateText, 500); // 每隔0.5秒更新一次
    }
}


function getfilename(url) {
    // 确保url是一个字符串并去除可能存在的开头和结尾的空白字符
    url = String(url).trim();
    // 去除URL中的查询参数和片段标识符（如果有）
    url = url.split('?')[0].split('#')[0];
    // 分割路径部分
    const pathSegments = url.split('/');
    // 获取最后一个非空的路径段，即为文件名
    let fileName = pathSegments.pop() || pathSegments.pop(); // 处理以斜杠结尾的情况
    return fileName;
}


