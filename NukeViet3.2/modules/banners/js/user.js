function nv_login_info(a){nv_ajax("get",nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"=banners&"+nv_fc_variable+"=logininfo&num="+nv_randomPassword(8),"",a);return!1}
function nv_cl_login_submit(a,c,h,f,b,i,e,j,k,l){var g=nv_fc_variable+"=logininfo&save=1";e=document.getElementById(e);if(e.value.length>a||e.value.length<c||!nv_namecheck.test(e.value))return b=nv_error_login.replace(/\[max\]/g,a),b=b.replace(/\[min\]/g,c),alert(b),e.focus(),!1;g+="&login="+e.value;c=document.getElementById(j);if(c.value.length>h||c.value.length<f||!nv_namecheck.test(c.value))return b=nv_error_password.replace(/\[max\]/g,h),b=b.replace(/\[min\]/g,f),alert(b),c.focus(),!1;g+="&password="+
c.value;if(i){f=document.getElementById(k);if(f.value.length!=b)return b=nv_error_seccode.replace(/\[num\]/g,b),alert(b),f.focus(),!1;g+="&seccode="+f.value}nv_settimeout_disable(l,5E3);nv_ajax("post",nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"=banners",g+"&num="+nv_randomPassword(8),"","nv_cl_login_submit_res");return!1}
function nv_cl_login_submit_res(a){if(a=="OK")return window.location.href=window.location.href,!1;alert(nv_login_failed);nv_login_info(a);return!1}function nv_cl_info(a){nv_ajax("get",nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"=banners&"+nv_fc_variable+"=clinfo&num="+nv_randomPassword(8),"",a);return!1}
function nv_cl_edit(a){nv_ajax("get",nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"=banners&"+nv_fc_variable+"=cledit&num="+nv_randomPassword(8),"",a);return!1}
function nv_cl_edit_save(a,c,h,f,b,i,e,j,k,l,g){var d=nv_fc_variable+"=cledit&save=1";d+="&full_name="+rawurlencode(strip_tags(trim(document.getElementById(a).value.replace(/[\s]{2,}/g," "))));d+="&email="+rawurlencode(strip_tags(document.getElementById(c).value.replace(/[^a-zA-Z0-9\_\-\.\@]/g,"")));d+="&website="+rawurlencode(strip_tags(trim(document.getElementById(h).value.replace(/[^a-zA-Z0-9\:\#\!\:\.\?\+\=\&\%\@\-\/\,]/g,""))));d+="&location="+rawurlencode(strip_tags(trim(document.getElementById(f).value.replace(/[\s]{2,}/g,
" "))));d+="&yim="+rawurlencode(strip_tags(trim(document.getElementById(b).value.replace(/[^a-zA-Z0-9\.\-\_]/g,""))));d+="&phone="+rawurlencode(strip_tags(trim(document.getElementById(i).value.replace(/[^0-9\.\+\-\#\(\) ]/g,"").replace(/[\s]{2,}/g," "))));d+="&fax="+rawurlencode(strip_tags(trim(document.getElementById(e).value.replace(/[^0-9\.\+\-\#\(\) ]/g,"").replace(/[\s]{2,}/g," "))));d+="&mobile="+rawurlencode(strip_tags(trim(document.getElementById(j).value.replace(/[^0-9\.\+\-\#\(\) ]/g,"").replace(/[\s]{2,}/g,
" "))));d+="&pass="+rawurlencode(strip_tags(trim(document.getElementById(k).value)));d+="&re_pass="+rawurlencode(strip_tags(trim(document.getElementById(l).value)));d+="&num="+nv_randomPassword(8);nv_settimeout_disable(g,5E3);nv_ajax("post",nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"=banners",d,"","nv_cl_edit_save_res");return!1}
function nv_cl_edit_save_res(a){a=a.split("|");if(a[0]=="OK")nv_cl_info(a[1]);else{var c=a[0].replace(/\&[l|r]dquo\;/g,"");alert(c);a[1]&&document.getElementById(a[1]).focus()}return!1};