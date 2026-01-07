// maneger
// ポップアップ
function userMailLog(url){
	window.open(url, "", "width=320,height=480,scrollbars=yes,resizable=no,status=no");
}
// 会員ポイント消費履歴ポップアップ
function pointlog(url){
	window.open(url, "", "width=740,height=870,scrollbars=yes,resizable=yes,status=no");
}
// 購入履歴ポップアップ
function paymentlog(url){
	window.open(url, "", "width=740,height=870,scrollbars=yes,resizable=no,status=no");
}
// 絵文字一覧ポップアップ
function emojiWindow(url){
	window.open(url, "", "width=380,height=740,scrollbars=yes,resizable=yes,status=no,location=no,menubar=no");
}
// 添付画像倉庫
function pictArchive(url){
	window.open(url, "", "width=740,height=600,scrollbars=yes,resizable=yes,status=no");
}
// 直電話処理
function telProc(url){
	window.open(url, "", "width=380,height=480,scrollbars=yes,resizable=yes,status=no");
}

// SUPPORT-482 本文内ドメイン、FROMドメイン 会員レベル毎の設定編集画面呼び出し
function editUserLevelDomain(url){
	window.open(url, "", "width=1280,height=870,scrollbars=yes,resizable=yes,status=no");
}


// 添付画像のアタッチメント
function select_attach(fname,no,mode){
	
	var no; // 要素番号
	var fObj = window.opener.mailform; // オブジェクト

	try{
		if(mode == 1){
			fObj.attach_no_mod.value = no;
		}else{
			fObj.attach_no.value = no;
		}
		fObj.submit();
		window.close();
	}catch(e){
		alert(e);
	}
}
// 会員ﾚﾍﾞﾙ名編集画面のﾎﾟｯﾌﾟｱｯﾌﾟ
function userlevel(url){
	//window.open(url, "_blank", "width=280,height=630,scrollbars=yes,resizable=yes,status=no");
	window.open(url, "_blank", "width=580,height=630,scrollbars=yes,resizable=yes,status=no");
}

// 地域詳細指定制御
// 全都道府県指定が変更された場合にコールされる
function ableControl(){

	fObj = document.search;
	// 地域が指定されていれば全て向こう
	if(fObj.elements['sch_area'].value != 99){
		fObj.elements['sch_cb_allarea'].disabled = true;
		for(i=1; i<48; i++){
			fObj.elements['sch_cb_area['+i+']'].checked = false;
			fObj.elements['sch_cb_area['+i+']'].disabled = true;
		}

	}else{
		// 全都道府県がONにされた場合
		if(fObj.elements['sch_cb_allarea'].checked){
			for(i=1; i<48; i++){
				fObj.elements['sch_cb_area['+i+']'].checked = false;
				fObj.elements['sch_cb_area['+i+']'].disabled = true;
				
			}
		}else{
			for(i=1; i<48; i++){
				fObj.elements['sch_cb_area['+i+']'].disabled = false;
			}
		}
	}
	
	// メアド生死の制御
	if(fObj.elements['sch_mail_alive'].checked){
		fObj.elements['sch_mail_arrive_pc'].disabled = true;
		fObj.elements['sch_mail_arrive_mb'].disabled = true;
	}else{
		fObj.elements['sch_mail_arrive_pc'].disabled = false;
		fObj.elements['sch_mail_arrive_mb'].disabled = false;
	}
}
// 
function changeArea(){
	fObj = document.search;
	
	fObj.sch_town.value=0;
	fObj.submit();
}
function pictConfirm(id,no){
	fObj = document.confirm;
	
	fObj.user_id.value=id;
	if(no){
		fObj.no.value=no;
	}else{
		fObj.no.value=0;
	}
	fObj.submit();
}

function uniqueControl(user,char){
	fObj = document.search;

	if(fObj.elements[user].value != ''){
		fObj.elements[char].value = '';
		fObj.elements[char].disabled = true;
	}else{
		fObj.elements[char].disabled = false;
	}
	
	if(fObj.elements[char].value != ''){
		fObj.elements[user].value = '';
		fObj.elements[char].disabled = true;
	}else{
		fObj.elements[user].disabled = false;
	}
	
}
// ---------------------
// 問合せ画面用
// ---------------------
function send(no,mail){
	
	try{
		
		fObj = document.list;
		fObj.t_subject.value = fObj.elements["subject["+no+"]"].value;
		fObj.t_body.value = fObj.elements["body["+no+"]"].value;
		fObj.target_form_no.value = no;
		fObj.target_user_mail.value = mail;
		fObj.smtSendOneCfm.value = 1;
		fObj.submit();
		
	}catch(e){
		alert(e);	
	}
}
function del(no,mail){
	
	try{
		
		fObj = document.list;
		fObj.target_form_no.value = no;
		fObj.target_user_mail.value = mail;
		fObj.smtDelCfm.value = 1;
		fObj.submit();
		
	}catch(e){
		alert(e);	
	}
}
function link(mail){
	
	try{

		tObj = document.edit;
		tObj.customer_id.value = mail;
		tObj.submit();
		
	}catch(e){
		alert(e);	
	}
}
// 全てのチェックボックスをオン
function checkAll()
{
	for ( i=0; i<document.list.length; i++ ){
        if ( document.list.elements[i].type == "checkbox" ) {
            document.list.elements[i].checked = true;
        }
    }
}
// 全てのチェックボックスをオフ
function checkClear()
{
    for ( i=0; i<document.list.length; i++ ){
        if ( document.list.elements[i].type == "checkbox" ) {
            document.list.elements[i].checked = false;
        }
    }
}
// メールコピー処理
function copyMail(){

	var no; // 要素番号
	var fObj = document.list; // オブジェクト

	try{

		// チェックボックスがONのフォームへメールデータをコピー
		for ( i=0; i<fObj.length; i++ ){
			
			// エレメントがチェックボックスだった場合
			if ( fObj.elements[i].type == "checkbox" ) {
				
				// チェックされている場合
				if( fObj.elements[i].checked ){
					
					// フォーム名から要素番号を取得
					fname = fObj.elements[i].name;
					fname = fname.replace("chk_target[","");
					fname = fname.replace("]","");
					
					// 該当要素番号の件名と本文にコピー
					fObj.elements["subject["+fname+"]"].value = fObj.top_subject.value;
					fObj.elements["body["+fname+"]"].value = fObj.top_body.value;
					fObj.elements["send_line_mode["+fname+"]"].value = fObj.top_send_line_mode.value;
					document.getElementsByClassName("js-upload-filename["+fname+"]")[0].innerText = document.getElementsByClassName('top_imgfilename')[0].innerText;
					document.getElementsByClassName("js-upload-filename["+fname+"]")[0].classList.add("green");
					document.getElementsByClassName("js-upload-fileclear-multiple["+fname+"]")[0].style.display = "block";
					fObj.elements["line_operators_id["+fname+"]"].value = fObj.top_line_operators_id.value;
					// document.getElementsByClassName("display-line-operator-name-"+fname)[0].textContent = fObj.getElementsByClassName('display-line-operator-name-top')[0].innerText;

					//***** SUPPORT-537 2019/07/23 *********************************************
					if(document.getElementsByName('top_send_mode').length > 0 ){
						var top_send_mode_obj = document.getElementsByName('top_send_mode');//反映元の SMS ラジオボタン取得
						var send_mode_obj = document.getElementsByName('send_mode['+fname+']');//SMS ラジオボタン取得
						if(top_send_mode_obj.item(0).checked == true){
							send_mode_obj.item(0).checked = true;
						}else if(top_send_mode_obj.item(1).checked == true){
							send_mode_obj.item(1).checked = true;
						}
						
					}
					//**************************************************************************/
					
				}
			}
		}

	}catch(e){
		alert(e);
	}
}
// 指定チェックボックスON/OFFを操作
function checkboxctrl_mng(fname,ontarget,val)
{
	try{
		for ( i=0; i<document.forms[fname].length; i++ ){
			if ( document.forms[fname].elements[i].name == ontarget ) {
				document.forms[fname].elements[i].checked = val;
			}
			
		}
	}catch(e){
		alert(e);	
	}
	
}

function checkboxctrl_mngE(fname,ontarget,val)
{
	try{
		fObj = document.search;

		for(i=1; i<=40; i++){
			fObj.elements['sch_pair_level['+i+']'].checked = val;
		}

	}catch(e){
		alert(e);	
	}
	
}

/***** 指定チェックボックスON/OFFを操作 by otaki 2016/07/25 *****/
/* target_vague(bool): 名前を前方一致にするフラグ SUPPORT-531 2018/10/19 */
function checkboxctrl_mng2(id,ontarget,val, target_vague)
{
	try{
		var block_elm = document.getElementById(id);
		var chk_box_elm = block_elm.getElementsByTagName('input');
		var chk_box_elm_num = chk_box_elm.length;
		
		//alert('chk_box_elm_num:' + chk_box_elm_num);
		if(chk_box_elm_num){
			for( i=0; i<chk_box_elm_num; i++ ){
				if(target_vague && ( chk_box_elm[i].name.indexOf(ontarget)==0) ){// SUPPORT-531 2018/10/19
					chk_box_elm[i].checked = val;
				}
				else if( chk_box_elm[i].name == ontarget ){
					chk_box_elm[i].checked = val;
				}
				
				
			}
		}
		
		block_elm = '';
		chk_box_elm = '';
	
	}catch(e){
		alert(e);	
	}
}
/*****************************************************************/


// 指定したdiv要素を表示/非表示切替
function toggleP (pname) {
	if (document.getElementById(pname).style.display == 'none') {
		document.getElementById(pname).style.display = 'block';
	}
	else {
		document.getElementById(pname).style.display = 'none';
	}
}

// 折りたたみ
function displayBox(id) {
	if(document.getElementById(id).style.display=="block")
		document.getElementById(id).style.display="none";
	else document.getElementById(id).style.display="block";
}

// 折りたたみ(CLASS)
function displayClass(classname){
	var class_name_elm = document.getElementsByClassName(classname);
	//alert('style:' + class_name_elm.length);
	
	for( i=0; i < class_name_elm.length; i++ ){
		if(class_name_elm.item(i).style.display=="block")
			class_name_elm.item(i).style.display = "none";
		else class_name_elm.item(i).style.display = "block";
	}
}

// サイト基本設定等の説明文
// 汎用性が高い共通ライブラリ用
function viewItem(id,mode,block) {
	if(mode) {
		if(block) {
			var dType = "block";
		} else {
			var dType = "inline";
		}
	} else {
		var dType = "none";
	}

	if (document.getElementById) {
		document.getElementById(id).style.display = dType;
	}
}

// 特殊な設定に合わせたページ記述用
function viewClmn(view) {
	if(view) {
		viewItem("up",1,0);
		viewItem("down",0,0);
		viewItem("explain",1,1);
	} else {
		viewItem("up",0,0);
		viewItem("down",1,0);
		viewItem("explain",0,0);
	}
}

// スマートフォン用プレビュー処理
function preview(page_type,page_id,carrier){

	$.ajaxSetup({
		cache: false
	});
	window.open("preview.php?default=%20", "preview_w", "width=640,height=800,scrollbars=yes,resizable=yes,status=no");
	$.get("axprv.php", { type: page_type, id: page_id, carrier_type: carrier},function(data) {
		var preform = document.getElementById('pre_form');
		if(!carrier) {
			document.getElementById('sp_flag').value = 1;
		} else {
			document.getElementById('sp_flag').value = 0;
		}
		document.getElementById('pre_page').value = data;
		preform.submit();

	} );
}

/*
 * GET形式からinput要素を作成
 *
 */
function get2post(url,target_id) {

	var para = url.split('&');
	var len = para.length
	if(len) {
		var inp = new Array();
		var _target = document.getElementById(target_id);
		_target.innerHTML = "";
		for(var i=0 ; i < len ; i++) {
			p = para[i].split('=');
			inp[i] = document.createElement('input');
			inp[i].type = "hidden";
			inp[i].name = p[0];
			inp[i].value = p[1];
			_target.appendChild(inp[i]);
		}
		_target.submit();
	}
	return false;
}

// set cookie
function setCookie(name, value, expire) {
　　document.cookie = name + "=" + escape(value) + ((expire == null) ? "" : (";expires =" + expire.toGMTString()))
}

// get cookie
function getCookie(c_name){
	var st="";
	var ed="";
	if (document.cookie.length>0){
		st=document.cookie.indexOf(c_name + "=");
		if (st!=-1){ 
			st=st+c_name.length+1;
			ed=document.cookie.indexOf(";",st);
			if (ed==-1) ed=document.cookie.length;
			return unescape(document.cookie.substring(st,ed));
		} 
	}
	return "";
}

// 地域詳細指定制御
// 全都道府県指定が変更された場合にコールされる
function ableControlE(){

	fObj = document.search;

		if(fObj.elements['sch_exclude_pair_level'].checked){
			for(i=1; i<=40; i++){
				fObj.elements['sch_pair_level['+i+']'].checked = false;
				fObj.elements['sch_pair_level['+i+']'].disabled = true;
				
			}
		}else{
			for(i=1; i<=40; i++){
				fObj.elements['sch_pair_level['+i+']'].disabled = false;
			}
		}

}


// 管理画面用ユーザープロフィールのチェックボックスを全選択・全解除 by otaki 2013/10/24
function checkboxctrl_mngprof_mng(id,val){
	var id_elements = document.getElementById(id).childNodes.item(1).childNodes;// tbodyの子要素取得
	if(id_elements){
		//console.log(id_elements);
		var maxs = id_elements.length;
		//console.log(maxs);	
		for(i=0; i<maxs; i++){
			if(id_elements.item(i).nodeName != '#text' && 
				id_elements.item(i).nodeName != '#comment'){// 空白ノード(改行),コメントは無視
				//console.log(id_elements.item(i).nodeName);
				var inputs = id_elements.item(i).getElementsByTagName('input');
				//alert('inputs['+ i +']：'+inputs);
				//console.log(inputs);
				for(j=0; j<inputs.length; j++){
					if(inputs[j].type == 'checkbox'){
						//alert('inputs['+ i +']['+ j +']：'+inputs[j].name);
						inputs[j].checked = val;
					}
				}
			}
		}
	}	
}

function subject_body_count(stringId,countId) {
	var obj = document.getElementById(stringId);
	if(obj){
		var str = obj.value;
		//前後の改行空白削除後、改行だけ削除
		str = str.replace(/(^\s+)|(\s+$)|(^[\s ]+)|([\s ]+$)/g,"");
		str = str.replace(/\r/g,"");
		str = str.replace(/\n/g,"");
		if(str.length > 0)document.getElementById(countId).textContent = str.length;
		else document.getElementById(countId).textContent = '0';
	}
}

/***** 対象のフォーム(id)をsubmit by otaki 2014/03/19 *******/
function submit_to_id(id){
	document.getElementById(id).submit();
}
/***** 対象のフォームに list 設定後 submit by otaki 2014/03/19 *******/
function submit_to_checklist_max(form_id,checkbox_id,value_list_id,max_num){
	var returnlist = null;/*alert(checkbox_id);*/
	if(max_num){/*alert(max_num);*/
		for(var i=0; i < max_num; i++){
			$obj = document.getElementById(checkbox_id + i);
			/*alert(checkbox_id + i);*/
			if($obj){
				if($obj.checked == true || $obj.checked == 'checked'){
					if(returnlist == null)returnlist = new Array;
					/* 対象の会員を含むメールIDを list に記録 */
					returnlist[i] = $obj.value;
					/*alert(returnlist[i]);*/
				}
			}
		}
		
		/* post するリストの value へセット */
		if(returnlist && value_list_id){
			/*alert(returnlist);*/
			$list_obj = document.getElementById(value_list_id);
			$list_obj.value = returnlist;
			
			/* submit させる */
			if(form_id){
				submit_to_id(form_id);
			}
		}
		
	}
	
	//$obj = document.getElementById(id);
}


/***** 指定IDの input を 指定form の input へ値を設定後 submit する by otaki 2014/06/09 *******/
function submit_to_checklist(post_id,form_id,post_list){
	
	if(post_id != "undefined" && form_id != "undefined" && post_list != "undefined"){/*alert(max_num);*/
		var post_id_elm = document.getElementById(post_id).getElementsByTagName('input');
		var form_id_elm = document.getElementById(form_id).getElementsByTagName('input');
		var post_id_elm_max = post_id_elm.length;
		//alert('check_post_id:'+ post_id + ' check_form_id:'+ form_id + ' post_id_elm_max:' + post_id_elm_max);
		//alert('post_list:'+ post_list);
		
		//リスト(post_list)を元に input 取得
		for(var i=0; i < post_id_elm_max; i++){
			var class_name = post_id_elm.item(i).className;
			//alert('check_class_name:'+ class_name);
			if( class_name in post_list){				
				// post する form の input を確認
				if(form_id_elm){
					//alert('form_id_elm:exist');
					var form_input_max = form_id_elm.length;
					
					for(j=0; j < form_input_max; j++){
						// post_ "class_name" というIDの INPUT があるか確認
						if(form_id_elm.item(j).id == 'post_' + class_name){
							form_id_elm.item(j).value = post_id_elm.item(i).value;// ポストする値をセット
							//alert('check_form_id:' + 'post_' + class_name + '='+post_id_elm.item(i).value);
						}
					
					}
				}
			}/*else{
				alert('not_exist_class_name:'+ class_name);
			} */
		}
		post_id_elm = 'undefined';
		form_id_elm = 'undefined';
		
		submit_to_id(form_id);
		
	}
}


// 指定チェックボックスON/OFFを自動操作(id の 子要素)
function checkboxctrl_mng_outo(id,ontarget){
	try{
		var main_obj = document.getElementById(id);
		var obj = document.getElementById(id).getElementsByTagName("input");
		//alert(id + '_len:'+ obj.length);
		
		for ( i=0; i < obj.length; i++ ){
			if ( obj.item(i).className == ontarget ) {
				
				// 同オブジェクト内にある起点の チェックBOX が有効無効か確認して判断する
				//alert(obj.item(i).name + '_checked:' + obj.item(i).checked);
				var check_all_val = main_obj.getElementsByClassName(ontarget+'_all');
				obj.item(i).checked = check_all_val.item(0).checked;
			}
		}
	}catch(e){
		alert(e);
	}
}

// チェック項目があるか確認後に一括処理 by otaki 2014/06/09
function edit_check_confirm(message, cansel_msg, miss_msg, form_id,class_name, type2=false, name='', value=''){
	var class_name_elm = document.getElementById(form_id).getElementsByClassName(class_name);
	//alert('all_edit_relay_check_len:'+ class_name_elm.length);
	var checked_num = 0;
	
	for( i=0; i < class_name_elm.length; i++ ){
		//alert('class_name_elm.item(' + i +').checked:'+ class_name_elm.item(i).checked);
		if(class_name_elm.item(i).checked == true)
			checked_num++;
	}
	//alert('checked_num:'+ checked_num);
	if(checked_num > 0){
		/*if(window.confirm(message)){
			document.getElementById(form_id).submit();
			//alert(checked_num);
		}else{// キャンセル
			alert(cansel_msg);
		}*/
		
		if(type2){
			win_conf_submit_setval(form_id, message, cansel_msg, name, value);
		}else{
			win_conf_submit(form_id,message,cansel_msg);
		}
		
	}else alert(miss_msg);
}

function confirmCheckboxToSubmit(
	cnfMsg, cxlMsg, errMsg, inputName, formId, addHiddenName=null, addHiddenValue=null
) {
	let checked = [];
	$('input[name="'+inputName+'"]:checked').each(function() {
		checked.push($(this).val());
	});
	if (checked.length < 1) {
		alert(errMsg);
		return;
	}
	if (!window.confirm(cnfMsg)) {
		alert(cxlMsg);
		return;
	}

	// Add <input type="hidden" name="inputName" value="v">
	$.each(checked, function(k, v) {
		addInputElement(formId, 'hidden', inputName, v);
	});

	if (addHiddenName && addHiddenValue) {
		addInputElement(formId, 'hidden', addHiddenName, addHiddenValue);
	}
}

// 指定した ID の子要素(INPUT)へ 対応した名前の値を設定  by otaki 2014/07/16
// 例 
// name="setTest_aa" : セット元の値を持つ要素(name)
// class="setTest"    : セット先の要素(class '_'で分解した物)
function edit_setval(form_id){
	if(form_id){
		var arg_num = arguments.length;
		
		//alert('arg_num:'+arg_num);
		if(arg_num > 1){// form_id 以外に引数があれば処理する
		
			var setElm = document.getElementById(form_id);
			
			if(setElm){//alert('setElm:exist');
			}else {//alert('setElm:not_exist');
			}
			
			for(var i=1; i< arg_num; i++){
				// name で設定する value 取得
				//alert('arguments['+ i +']:'+arguments[i]);
				var getValElem = document.getElementsByName(arguments[i]);
				//***** by otaki 2014/11/11 ************************************************
				if( getValElem.length > 1 ){
					//alert('Elem_num:' + getValElem.length);
					for(var j=0; j < getValElem.length; j++){
						// チェックBOX, ラジオボタン か確認
						//alert('type:' + getValElem.item(j).type);
						if(getValElem.item(j).type == 'checkbox' || getValElem.item(j).type == 'radio' ){
							//alert('checked:' + getValElem.item(j).checked);
							if(getValElem.item(j).checked == true){// 選択中の値取得
								var getVal = getValElem.item(j).value;
								//alert('true_set_val:' + getVal);
							}
						}else{// チェック等で無い場合は取得
							var getVal = getValElem.item(j).value;
							break;
						}
					}
				}
				else {// 単一だった場合
					var getVal = getValElem.item(0).value;
					//alert('Elem_Single');
				}
				//***** by otaki 2014/11/11 ************************************************
				
				//var getVal = document.getElementsByName(arguments[i]).item(0).value;
				
				var set_in_name = arguments[i].split('_');
				
				//alert('getVal:'+getVal+' set_in_name[0]:'+set_in_name[0]);
				var set_in_elem = setElm.getElementsByClassName(set_in_name[0]).item(0);
				
				if(set_in_elem){// 存在した場合は設定
					set_in_elem.value = getVal;
					//alert('set_in_elem.value:'+set_in_elem.value);
				}else{
					//alert('MISS:');
				}
				
			}
			// 設定終了時
			//setElm.submit();
		}
	
	}else{
		//alert('form_id:not exist');
	}

}

// 指定した ID の子要素(INPUT)へ 対応した名前の値を設定  by otaki 2016/07/26
// 例 
// class="setTest_aa" : セット元の値を持つ要素(name)
// class="setTest"    : セット先の要素(class '_'で分解した物)
function edit_setval_class2class(form_id){
	if(form_id){
		var arg_num = arguments.length;
		
		//alert('arg_num:'+arg_num);
		if(arg_num > 1){// form_id 以外に引数があれば処理する
		
			var setElm = document.getElementById(form_id);
			
			if(setElm){//alert('setElm:exist');
			}else {//alert('setElm:not_exist');
			}
			
			for(i=1; i< arg_num; i++){
				// name で設定する value 取得
				//alert('arguments['+ i +']:'+arguments[i]);
				var getValElem = document.getElementsByClassName(arguments[i]);
				//***** by otaki 2014/11/11 ************************************************
				if( getValElem.length > 1 ){
					//alert('Elem_num:' + getValElem.length);
					for(var j=0; j < getValElem.length; j++){
						// チェックBOX, ラジオボタン か確認
						//alert('type:' + getValElem.item(j).type);
						if(getValElem.item(j).type == 'checkbox' || getValElem.item(j).type == 'radio' ){
							//alert('checked:' + getValElem.item(j).checked);
							if(getValElem.item(j).checked == true){// 選択中の値取得
								var getVal = getValElem.item(j).value;
								//alert('true_set_val:' + getVal);
							}
						}else{// チェック等で無い場合は取得
							var getVal = getValElem.item(j).value;
							break;
						}
					}
				}
				else {// 単一だった場合
					var getVal = getValElem.item(0).value;
					//alert('Elem_Single');
				}
				//***** by otaki 2014/11/11 ************************************************
				
				//var getVal = document.getElementsByName(arguments[i]).item(0).value;
				
				var set_in_name = arguments[i].split('_');
				//alert('getVal:'+getVal+' set_in_name[0]:'+set_in_name[0]);
				
				var set_in_elem = setElm.getElementsByClassName(set_in_name[0]).item(0);
				
				if(set_in_elem){// 存在した場合は設定
					set_in_elem.value = getVal;
					//alert('set_in_elem.value:'+set_in_elem.value);
				}else{
					//alert('MISS:');
				}
				
			}
			// 設定終了時
			//setElm.submit();
		}
	
	}else{
		//alert('form_id:not exist');
	}

}

// 確認メッセージで はい を選択した場合, form_id を submit する
function win_conf_submit(form_id, message, cansel_msg){
	if(window.confirm(message)){
		//alert('submit:' + form_id);
		submit_to_id(form_id);
		
	}else{// キャンセル
		//alert('cancel:' + form_id);
		alert(cansel_msg);
	}
}

// 確認メッセージで はい を選択した場合, form_id を submit する
// 登録・更新・削除対応
function win_conf_validate_reg_upd_del(form_id, message, cansel_msg, event){
	if(window.confirm(message)){
		submit_to_id(form_id);
		
	}else{// キャンセル
		alert(cansel_msg);
		event.preventDefault();
	}
}

// 更新ボタン押下後、ダイアログメッセージの表示
function win_conf_validate(form_id, mail_id, event) {
    if (window.confirm(`${mail_id}の内容を更新する場合はOKを押して下さい`)) {
		submit_to_id(form_id);
    } else {
		alert("更新をキャンセルしました");
		event.preventDefault();
        return false;
    }
}

// 送信データ確認用サブウィンドウ表示メソッド(お知らせメール用)
function openPreviewWindowInfo(siteDomain) {
	const stringSiteDomain = siteDomain;                                 // サイトドメイン

	const subject = document.getElementById("MailSubject").value;        // メール件名入力内容
	const body = document.getElementById("MailBody").value;				 // メール本文入力内容
	const bodyDeco = document.getElementById("MailBodyDeco").value;      // メール本文HTML入力内容
	const imgElement = document.getElementById('line-image-link');       // LINEメッセージ用画像の登録内容(確認画面表示後)
	const fileInput = document.getElementById('image-input');            // LINEメッセージ用画像の入力内容(ファイル選択ボタン押下後)
	
	let imgSrc = null;
	if (imgElement) {
		imgSrc = imgElement.getAttribute('src');                         // LINWメッセージ用画像のリンク(確認画面表示後)
	}
	let file = null;
	let imageUrl = null;
	file = fileInput.files[0];                                           // 選択されたFile情報
	if (file) {
		imageUrl = URL.createObjectURL(file);                            // LINEメッセージ用画像のリンク(ファイル選択ボタン押下後) * Blob URLを生成
	}
	
	let inputFieldValueArray = [subject, body, bodyDeco];
	// 入力値にサイトドメイン情報があれば置換する
	inputFieldValueArray = inputFieldValueArray.map((text) => {
		return text.includes("%SITE_DOMAIN%") 
			? text.replace(/%SITE_DOMAIN%/g, stringSiteDomain) // 正規表現を使用して全て置換
			: text;
	});

	let [updatedSubject, updatedBody, updatedBodyDeco] = inputFieldValueArray; 
	updatedSubject = encodeHTML(updatedSubject);					 // HTML特殊文字をエスケープする関数
	updatedBody  = encodeHTML(updatedBody);                          // HTML特殊文字をエスケープする関数

	updatedSubject = tagColor(updatedSubject);
	updatedBody = tagColor(updatedBody);
	updatedBodyDeco = tagColor(updatedBodyDeco);
	
	updatedBody = updatedBody.replace(/\n/g, '<br>'); // 改行を <br> に変換

	const truncatedSubject = truncateText(updatedSubject, 40); // LINEメッセージ(件名)表示内容 40文字目から省略
	const truncatedBody = truncateText(updatedBody, 60);      // 6LINEメッセージ(件名)表示内容 0文字目から省略

	const subw = 600;   // サブウィンドウの横幅
	const subh = 600;   // サブウィンドウの高さ
	// 表示座標の計算
	const subx = (window.innerWidth) / 2 + window.screenX;  // X座標（左右中央）
	const suby = (window.innerHeight) / 2 + window.screenY; // Y座標（上下中央）
	// ウィンドウオプション
	const SubWinOpt = "width=" + subw + ",height=" + subh + ",top=" + suby + ",left=" + subx;
	const newWindow = window.open('about:blank', 'kaime_prev', SubWinOpt + ',scrollbars=yes,resizable=yes,status=no');
	// サブウィンドウ表示内容
	newWindow.document.write(`
		<!DOCTYPE html>
		<html lang="ja">
		<head>
			<title>プレビュー</title>
			<style>
				body {
					margin: 0;
					padding: 0;
					line-height: 1.6em;
					font-size: 10px;
				}
				.header {
					background-color: #f0f0f0;
					font-weight: bold;
					padding: 10px;
				}
				.content {
					padding: 10px;
				}
				.image-preview {
					max-width: 300px; 
					margin: 0 auto;   
				}
				.image-preview img {
					max-width: 100%; 
					height: auto;    
				}
			</style>
		</head>
		<body>
			<div class="header">メール件名</div>
			<div class="content">${updatedSubject}</div>

			<div class="header">メール本文（テキスト）</div>
			<div class="content">${updatedBody}</div>

			<div class="header">メール本文（HTML）</div>
			<div class="content">${updatedBodyDeco}</div>
			<div class="header">LINEメッセージ</div>
			<div class="image-preview">
				${imageUrl ? `<img src="${imageUrl}" alt="プレビュー画像">` : ''}
				${!imageUrl && imgSrc ? `<img src="${imgSrc}" width="300" alt="既存画像">` : ''}
				<p>
					<b>${truncatedSubject}</b><br>
					${truncatedBody}
				</p>
			</div>
		</body>
		</html>
	`);
	newWindow.document.close();
}
// 送信データ確認用サブウィンドウ表示メソッド(お知らせメール用)
function openPreviewWindowDoho(siteDomain) {                 
	const stringSiteDomain = siteDomain;                                 // サイトドメイン
	const subject = document.getElementById("MailSubject").value;        // メール件名入力内容
	let   body = document.getElementById("MailBodyDeco").value;          // メール本文入力内容
	const bodyDeco = document.getElementById("MailBodyHtml").value;      // メール本文HTML入力内容
	const imgElement = document.getElementById('line-image-link');       // LINEメッセージ用画像の登録内容(確認画面表示後)
	const fileInput = document.getElementById('image-input');            // LINEメッセージ用画像の入力内容(ファイル選択ボタン押下後)
	
	let imgSrc = null;
	if (imgElement) {
		imgSrc = imgElement.getAttribute('src');                         // LINWメッセージ用画像のリンク(確認画面表示後)
	}
	let file = null;
	let imageUrl = null;
	file = fileInput.files[0];                                           // 選択されたFile情報
	if (file) {
		imageUrl = URL.createObjectURL(file);                            // LINEメッセージ用画像のリンク(ファイル選択ボタン押下後) * Blob URLを生成
	}
	
	let inputFieldValueArray = [subject, body, bodyDeco];

	// 入力値にサイトドメイン情報があれば置換する
	inputFieldValueArray = inputFieldValueArray.map((text) => {
		return text.includes("%SITE_DOMAIN%") 
			? text.replace(/%SITE_DOMAIN%/g, stringSiteDomain) // 正規表現を使用して全て置換
			: text;
	});
    // 新しい値を変数に格納
	let [updatedSubject, updatedBody, updatedBodyDeco] = inputFieldValueArray; 
	updatedSubject = encodeHTML(updatedSubject);					 // HTML特殊文字をエスケープする関数
	updatedBody  = encodeHTML(updatedBody);                          // HTML特殊文字をエスケープする関数

	updatedSubject = tagColor(updatedSubject);
	updatedBody = tagColor(updatedBody);
	updatedBodyDeco = tagColor(updatedBodyDeco);
	
	updatedBody = updatedBody.replace(/\n/g, '<br>'); // 改行を <br> に変換

	const truncatedSubject = truncateText(updatedSubject, 40); // LINEメッセージ(件名)表示内容 40文字目から省略
	const truncatedBody = truncateText(updatedBody, 60);      // 6LINEメッセージ(件名)表示内容 0文字目から省略

	const subw = 600;   // サブウィンドウの横幅
	const subh = 600;   // サブウィンドウの高さ
	// 表示座標の計算
	const subx = (window.innerWidth) / 2 + window.screenX;  // X座標（左右中央）
	const suby = (window.innerHeight) / 2 + window.screenY; // Y座標（上下中央）
	// ウィンドウオプション
	const SubWinOpt = "width=" + subw + ",height=" + subh + ",top=" + suby + ",left=" + subx;
	const newWindow = window.open('about:blank', 'kaime_prev', SubWinOpt + ',scrollbars=yes,resizable=yes,status=no');
	// サブウィンドウ表示内容
	newWindow.document.write(`
		<!DOCTYPE html>
		<html lang="ja">
		<head>
			<title>プレビュー</title>
			<style>
				body {
					margin: 0;
					padding: 0;
					line-height: 1.6em;
					font-size: 10px;
				}
				.header {
					background-color: #f0f0f0;
					font-weight: bold;
					padding: 10px;
				}
				.content {
					padding: 10px;
				}
				.image-preview {
					max-width: 300px; 
					margin: 0 auto;   
				}
				.image-preview img {
					max-width: 100%; 
					height: auto;    
				}
			</style>
		</head>
		<body>
			<div class="header">メール件名</div>
			<div class="content">${updatedSubject}</div>

			<div class="header">メール本文（テキスト）</div>
			<div class="content">${updatedBody}</div>

			<div class="header">メール本文（HTML）</div>
			<div class="content">${updatedBodyDeco}</div>
			<div class="header">LINEメッセージ</div>
			<div class="image-preview">
				${imageUrl ? `<img src="${imageUrl}" alt="プレビュー画像">` : ''}
				${!imageUrl && imgSrc ? `<img src="${imgSrc}" width="300" alt="既存画像">` : ''}
				<p>
					<b>${truncatedSubject}</b><br>
					${truncatedBody}
				</p>
			</div>
		</body>
		</html>
	`);
	newWindow.document.close();
}

/**
 * HTMLタグを除去し、改行を1文字としてカウントしながら、指定文字数で切り詰める関数
 * @param {string} text - 処理対象のHTML文字列
 * @param {number} maxLength - 最大文字数
 * @returns {string} - 指定文字数で切り詰められた文字列
 */
function truncateText(text, maxLength) {
    let currentLength = 0;
    let result = '';
    
    // 正規表現でタグとエンティティ、テキストを分離
    const regex = /(<br\s*\/?>|<[^>]+>|&[a-zA-Z0-9#]+;|[^<&]+)/g; // タグ、エンティティ、またはテキスト部分を抽出
    let match;

    while ((match = regex.exec(text)) !== null) {
        const fragment = match[0];
        if (fragment.startsWith('<br') || fragment === '<br>') {
            // 改行タグの場合
            if (currentLength + 1 > maxLength) {
                result += '...';
                break;
            }
            result += '<br>';
            currentLength += 1; // 改行を1文字とカウント
        } else if (fragment.startsWith('<')) {
            // その他のHTMLタグはそのまま追加
            result += fragment;
        } else if (fragment.startsWith('&') && fragment.endsWith(';')) {
            // エンティティの場合
            if (currentLength + 1 > maxLength) {
                result += '...';
                break;
            }
            result += fragment;
            currentLength += 1; // エンティティを1文字とカウント
        } else {
            // テキスト部分の場合
            const remainingLength = maxLength - currentLength;
            if (fragment.length > remainingLength) {
                result += fragment.slice(0, remainingLength) + '...';
                break;
            }
            result += fragment;
            currentLength += fragment.length;
        }
    }

    return result;
}

function encodeHTML(source) {
	return String(source)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}
/**
 * @description %で囲まれた文字列を赤色で強調表示する
 * @param {string} inputText - 処理対象のHTML文字列
 * @returns {string} - 強調表示を適用した文字列
 */
function tagColor(inputText) {
	return inputText.replace(
	  /(?<!href="|src="|href='|src=')%([0-9a-zA-Z_]+)%/g,
	  '<font color="red">%$1%</font>'
	);
}

// select を変更後、他の select(name 同じ) を同期させる
// id : 値の取得元  select_name：変更対象
// type 捜索基準を決める(デフォルト:name)// by otaki 2015/01/27
function setSelectSynchronize(id,select_name,type){
	if(type == null ){// undefined  void 0
		type = 'name';// 変更する select の捜索基準を name にする
	}
	
	var setValue = document.getElementById(id).value;// 同期させる値
	
	var chgSelectElm;
	if(type == 'name'){
		chgSelectElm = document.getElementsByName(select_name);// 同期対象の select_name
	}else if(type == 'class'){
		chgSelectElm = document.getElementsByClassName(select_name);// 同期対象の select_class
	}
	
	var elm_num = chgSelectElm.length;
	if(elm_num){
		for(var i=0; i < elm_num; i++ ){
			chgSelectElm.item(i).value = setValue;
		}
	}
	
}

// buttonn 無効化 by otaki 2015/06/10 
function chk_dis(button,id,msg){
	if(button){
		//button_elm.setAttribute('disabled','disabled');
		button.disabled = true;
		var button_elm = document.getElementById(id);
		button_elm.value = msg;
	}
}


/* ***** 手動メール設定専用 時間、時刻設定 by otaki 2015/07/15 ********************** */
function set_date_hour(setnum,type,interval){
	/*alert('setnum:'+setnum);*/
	if(setnum){
		/*alert('type:'+type);*/
		switch(type){
			case 'date':
				var now_dates = new Date();
				date = now_dates.getFullYear() + '-'
				 + (now_dates.getMonth() + 1) + '-'
				 + now_dates.getDate() + ' '
				 + now_dates.getHours() + ':'
				 + now_dates.getMinutes();
				/*alert('set_now_base:');*/
				
			break;
						
			case 'hour':/* hour 設定は起点日の値をベース */
				date = document.getElementById('StYear0').value + '-'
				 + document.getElementById('StMonth0').value + '-'
				 + document.getElementById('StDay0').value + ' '
				 + document.getElementById('StHour0').value + ':'
				 + document.getElementById('StMin0').value;
				/*alert('set_hour_base:');*/
			break;
			
			default:
			break;
		}/* switch(type) */
		
		/*alert('date:'+date);*/
		if(date){
			// 引数の時間文字列分解
			var ags_date_arr = date.split(' ');
			// ags_date_arr[0] date
			// ags_date_arr[1] time
			if(ags_date_arr[0]){// 日付分解
				var date_arr = ags_date_arr[0].split('-');
				/*alert('date_arr[0]:'+date_arr[0] +' date_arr[1]:'+date_arr[1] + ' date_arr[2]:'+date_arr[2]);*/
			}
			if(ags_date_arr[1]){// 時間分解
				var time_arr = ags_date_arr[1].split(':');
				/*alert('time_arr[0]:'+time_arr[0] + 'time_arr[1]:'+time_arr[1] + ' time_arr[2]:'+time_arr[2]);*/
			}
			
			// 時間を'タイマー送信'の全項目に設定
			for(var i=0; i<setnum; i++){
				
				var base_year = date_arr[0];
				var base_month = date_arr[1];
				var base_day = date_arr[2];
				var base_hour = time_arr[0];
				var base_minit = time_arr[1];
				
				/*alert('interval:'+interval);*/
				if(interval){
					switch(type){
						case 'date':
							base_day = parseInt(date_arr[2]) + parseInt(interval);
						break;
									
						case 'hour':
							/* 1時間単位 */
							if(parseInt(interval) > 59){ 
								base_hour = parseInt(time_arr[0]) + parseInt((interval * i) / 60);
							}else{/* 分単位 */
								base_minit = parseInt(time_arr[1]) + parseInt(interval * i);
							}
						break;
						
						default:
						break;
					}/* switch(type) */
					
				}/* if(interval) */
				
				
				/*alert('i:' + i + ' ' + base_year +'-'+ (base_month-1) +'-'+ base_day +' '+ base_hour +':'+ base_minit);*/
				/* 時間データ作成 */
				var set_date = new Date(
					base_year,
					base_month-1,
					base_day,
					base_hour,
					base_minit
				);
				
				/* 項目に設定 */
				document.getElementById('StYear'+i).value = set_date.getFullYear();
				document.getElementById('StMonth'+i).value = set_date.getMonth()+1;
				document.getElementById('StDay'+i).value = set_date.getDate();
				document.getElementById('StHour'+i).value = set_date.getHours();
				document.getElementById('StMin'+i).value = set_date.getMinutes();
				
			}/* for(var i=0;i<setnum;i++) */
			
		}/*else{
			alert('date:feild');
		}/* if(date) */
		
	}/* if(setnum) */
}
/* ********************************************************************** */



//***** ラジオボタン 指定の値を一括チェックさせる by otaki 2016/07/11 **************
function radiobutton_all_checked(id,check_val){
	try{
		var chk_elm = document.getElementById(id);
		var obj = document.getElementById(id).getElementsByTagName("input");
		//alert(id + '_len:'+ obj.length);
		
		for( i=0; i < obj.length; i++ ){
			if( obj.item(i).type == 'radio' ){
				if( obj.item(i).value == check_val ){
					obj.item(i).checked = true;
				}
				
			}
		}
	}catch(e){
		alert(e);
	}
}
//**********************************************************************************


// js用 number_format by otaki 2016/08/02
function number_format(num){
	return num.toString().replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g , '$1,');
}

//***** BS-2187 by otaki 2016/08/16 *******************************************
function CopyEventPointLevel(pointlist_name, level_max, level_name, event_class, list_name){
	var cp_user_level = document.getElementsByName(level_name).item(0).value;
	//if($event_name) var cp_event_level = document.getElementsByName(event_name).item(0).value;
	
	//alert('cp_user_level:' + cp_user_level);
	
	if(window.confirm(list_name + cp_user_level + 'のポイントを他の'+ list_name +'へ反映します、よろしいですか？')){
	
		var event_class_num = event_class.length;
		//alert('event_class:' + event_class);
		//alert('event_class_num:' + event_class_num);
		
		// copy 対象のポイント情報取得
		// name="addPointConfList[2][30000][1]
		var copy_point_arr = new Array();
		
		for(var i=0; i< event_class_num; i++){// 2 max:
			
			for(var lv_i=1; lv_i < (level_max +1); lv_i++){// 2 max:100
				
				if(copy_point_arr[i] == 'undefined' || copy_point_arr[i] == null){
					var copy_val_name = pointlist_name +'[' + event_class[i] + '][' + cp_user_level + ']';
					//alert('copy_val_name:' + copy_val_name);
					var copy_point_val_elm = document.getElementsByName(copy_val_name).item(0);
					
					copy_point_arr[i] = copy_point_val_elm.value;
					//alert('set copy_point_arr[' + i + ']:' + copy_point_val_elm.value);
				}
				
				// コピー対象と設定対象が異なる場合は実行
				//alert('cp_user_level:'+ cp_user_level + ' lv_i:' + lv_i);
				if(lv_i != cp_user_level){
					var set_val_name = pointlist_name +'[' + event_class[i] + '][' + lv_i + ']';
					//alert('set_val_name:' + set_val_name);
					var set_point_val_elm = document.getElementsByName(set_val_name).item(0);
					set_point_val_elm.value = copy_point_arr[i];
				}
				
			}// for(var lv_i=1; lv_i < (level_max +1); lv_i++)
			
		}//for(var i=0; i< event_class_num; i++)
		
		copy_point_arr = '';
		
		alert(list_name + cp_user_level + 'のポイントをコピーしました、反映させる場合は"一括修正ボタン"を押して変更の保存を行ってください');
		
	}else{
		alert('反映をキャンセルしました');
	}
	
}

/* SUPPORT-392 by otaki 2017/02/20 */
function set_value2name(name,value){
	document.getElementsByName(name).item(0).value = value;// 同期させる値
}

/* SUPPORT-458 対象フォームのアクションを変更 by otaki 2017/08/18 */
function setFormAction(formid, action_str){
	document.getElementById(formid).action = action_str;
}


/***** SUPPORT-482 ***************************************************************/
function CopyAllCommonDomain(chk_class, valname, domain_id, carrier_id){
	var chk_list = document.getElementsByClassName(chk_class);
	var carrier = 0;
	if(carrier_id)carrier = document.getElementById(carrier_id).value;
	var chk_list_num = chk_list.length;
	//alert('carrier:'+ carrier);
	//alert('chk_list_num:'+ chk_list_num);
	
	if( chk_list_num ){
	
		if(window.confirm('チェックした会員レベルに反映します、よろしいですか？')){
			
			// 一括設定するドメインID 取得
			var cp_domain_id = document.getElementById(domain_id).value;
			
			for(var i=0; i< chk_list_num; i++){// max:100				
				if(chk_list.item(i).checked){
					var set_val_name = valname +'['+ i +'][carrier]['+ carrier +']';// 共通ドメイン,各ドメイン
					document.getElementsByName(set_val_name).item(0).value = cp_domain_id;
				}				
			}//for(var i=0; i< money_pattern_num; i++)
			
			chk_list = '';
			alert('ドメインを反映致しました、更新する際は"チェックした会員レベル設定を更新"を押して変更の保存を行ってください');
			
		}else{
			alert('反映をキャンセルしました');
		}
		
	}else{
		alert('対象の会員レベルがチェックされていません');
	}
}

function ChangeAllDomainFlag(chk_class, flag_id, valname, columnname){
	var chk_list = document.getElementsByClassName(chk_class);
	var check_val = document.getElementById(flag_id).value;
	var chk_list_num = chk_list.length;
	
	if( chk_list_num ){
	
		if(window.confirm('チェックした会員レベルの"'+ columnname +'"に反映します、よろしいですか？')){
			for(var i=0; i< chk_list_num; i++){// max:100
				if(chk_list.item(i).checked){
					var set_val_name = valname +'['+ i +'][useflag]';
					var flag_obj = document.getElementsByName(set_val_name);
					var flag_obj_num = flag_obj.length;
					
					if(flag_obj_num){
						if( flag_obj.item(0).value == check_val ){
							flag_obj.item(0).checked = true;
						
						}else if( flag_obj.item(1).value == check_val ){
							flag_obj.item(1).checked = true;
						}
					}
				}
			}//for(var i=0; i< money_pattern_num; i++)
			
			chk_list = '';
			alert('"'+ columnname +'"に反映致しました、更新する際は"チェックした会員レベル設定を更新"を押して変更の保存を行ってください');
			
		}else{
			alert('反映をキャンセルしました');
		}
		
	}else{
		alert('対象の会員レベルがチェックされていません');
	}
}
//********************************************************************************

//***** SUPPORT-579 2019/11/22 ***********************
function chk_class_disable_mng(chk_id, chk_class){
	var chk_btn = document.getElementById(chk_id);
	var chk_list = document.getElementsByClassName(chk_class);
	var chk_list_num = chk_list.length;
	
	//alert('chk_btn.checked'+chk_btn.checked);
	if(chk_btn == 'undefined' || chk_btn == null){
	}else{
		if(chk_btn.checked){
			if(chk_list_num){
				for(var i=0; i< chk_list_num; i++){
					chk_list.item(i).disabled = true;
				}
			}
		}else{
			if(chk_list_num){
				for(var i=0; i< chk_list_num; i++){
					chk_list.item(i).disabled = false;
				}
			}
		}
		
	}
}
//****************************************************

// jQ
function chkBoxReset( cname ){
	$("."+cname).prop('checked', false);
}

function set_value2name_to_id(name,value,id){
	//document.getElementById(id).getElementsByName(name).item(0).value = value;// 同期させる値
	$("#"+id +" [name='"+name+"']").val(value);
}

// 確認メッセージで はい を選択した場合, form_id を submit する
function win_conf_submit_setval(form_id, message, cansel_msg, name, value){
	if(window.confirm(message)){
		//alert('submit:' + form_id);
		set_value2name_to_id(name, value,form_id);
		submit_to_id(form_id);
	}else{// キャンセル
		//alert('cancel:' + form_id);
		alert(cansel_msg);
	}
}

// 指定したdiv要素を表示/非表示切替
function toggleOnOff(pname, type='revert'){
	if(document.getElementById(pname).style.display == 'none'){
		document.getElementById(pname).style.display = type;
	}
	else {
		document.getElementById(pname).style.display = 'none';
	}
}

// 選択画面ポップアップ
function PopUpWin(url){
	window.open(url, "", "width=740,height=870,scrollbars=yes,resizable=yes,status=no");
}
function PopUpWinBig(url){
	window.open(url, "", "width=1024,height=870,scrollbars=yes,resizable=yes,status=no");
}
function PopUpWinSP(url){
	// window.open(url, "", "width=400,height=870,scrollbars=yes,resizable=yes,status=no");
	window.open(url, "", "width=400,height=870,scrollbars=yes,resizable=yes,status=no");
}


/**
 * キャンペーンページの削除.
 * @param {string} name
 * @param {string} id 
 */
function deletePage(name, id) {
	const res = confirm(name+'を削除しますか');
	if (res) {
		document.getElementById(id).submit();
	} else {
		alert('削除を取り消しました。');
	}
}

/**
 * LINEメッセージ用画像 単体用
 */
$(function() {
  $('.js-upload-file').on('change', function () { //ファイルが選択されたら
    let file = $(this).prop('files')[0]; //ファイルの情報を代入(file.name=ファイル名/file.size=ファイルサイズ/file.type=ファイルタイプ)
    $('.js-upload-filename').text(file.name); //ファイル名を出力
    $('.js-upload-fileclear').show(); //クリアボタンを表示
  });
  $('.js-upload-fileclear').click(function() { //クリアボタンがクリックされたら
    $('.js-upload-file').val(''); //inputをリセット
    // $('.js-upload-filename').text('ファイルが未選択です'); //ファイル名をリセット
		$('.js-upload-filename').text(''); //ファイル名をクリア
    $(this).hide(); //クリアボタンを非表示
  });
});

/**
 * LINEメッセージ用画像 複数用
 * - mng/user/inq.php
 * - mng/site/line_bots_tbl_edit.php
 */
$(function() {
  $('.js-upload-file-multiple').on('change', function () {
    let file = $(this).prop('files')[0];
		let parent = $(this).closest('.js-upload-file-wrap');
		parent.find("[class^='js-upload-filename']").text(file.name);
		parent.find("[class^='js-upload-fileclear-multiple']").show();
  });
	$("[class^='js-upload-fileclear-multiple']").click(function() {
		let parent = $(this).closest('.js-upload-file-wrap');
    parent.find("[class^='js-upload-file']").val('');
		parent.find("[class^='js-upload-filename']").text('');
		parent.find("[class^='js-upload-filename']").removeClass("green");
    $(this).hide();
  });

});


/**
 * Submit form with alert confirm dialog.
 * 
 * @param {string} fromId 
 * @param {string} cnfMsg
 * @param {string} cxlMsg
 * @param {string} addInputType
 * @param {string} addInputName
 * @param {string} addInputValue
 */
function alertConfirmSubmit(
	fromId, 
	cnfMsg, 
	cxlMsg, 
	addInputType='', 
	addInputName='', 
	addInputValue=''
) {
	const form = '#'+fromId;
	const confirmMessage = cnfMsg.replace(/<br>/g, '\n');

	if(!confirm(confirmMessage)) { 
		alert(cxlMsg);
		return false;
	}

	if (!addInputType || !addInputName || !addInputValue) {
		$(form).submit();
		return false;
	}

	// 配列の場合は複数のinputタグを追加
	if (Array.isArray(addInputType) && Array.isArray(addInputName) && Array.isArray(addInputValue)) {
		// 配列の長さが一致していることを確認
		const length = Math.min(addInputType.length, addInputName.length, addInputValue.length);
		for (let i = 0; i < length; i++) {
			addInputElement(fromId, addInputType[i], addInputName[i], addInputValue[i]);
		}
	} else {
		// 従来の単一inputタグの追加
		addInputElement(fromId, addInputType, addInputName, addInputValue);
	}

	$(form).submit();
	return false;
}

/**
 * 
 * @param {string} fromId 
 * @param {string} addInputType 
 * @param {string} addInputName 
 * @param {string} addInputValue 
 */
function addInputElement(fromId, addInputType, addInputName, addInputValue) {

	const form = '#'+fromId;

	$('<input>').attr({
		type: addInputType,
		name: addInputName,
		value: addInputValue
	}).appendTo(form);
}

function removeInputElement(fromId, addInputType, addInputName) {
	$('#'+fromId+' input[type="'+addInputType+'"][name="'+addInputName+'"]').remove();
}

/**
 * 
 * @param {string} fromId 
 */
function resetSerchForm(fromId) {

	const form = '#'+fromId;

	$(form).find("input[type='text']").val('');
	
	$(form).submit();
	return false;
}

function changeActionToSubmitById(fromId, action) {

	const form = '#'+fromId;

	$(form).attr('action', action);

	$(form).submit();
	return false;
}

/**
 * 全てのチェックボックスを チェック/非チェック
 * @param {string} check_list_class 
 */
function checkAllCheckbox(event, check_list_class) {
	const all = event.target; // クリックされた要素を取得
	const list = $('.' + check_list_class); // チェックリスト
	
	// チェックリストが空
	if (list.length === 0) {
		console.log('checkAllCheckbox: list is empty');
		return false;
	}

	// 配列list の各要素が checkbox であることを確認
	list.each(function() {
		console.dir($(this));
		if ($(this).prop('type') === 'checkbox') return;
		// チェックリストに checkbox 以外の要素が含まれている
		console.log('checkAllCheckbox: list contains non-checkbox elements');
		return false;
	});

	// 全てのチェックボックスをチェック/非チェック
	list.prop('checked', $(all).is(':checked'));
}

// LINE operator
fetch('../../js/line_operator.js').then(r=>{return r.text()}).then(t=>{
	eval(t);
});