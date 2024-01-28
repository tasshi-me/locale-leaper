const getLoginUser = async ()=> {
  if(typeof kintone === 'object'){
    return kintone.getLoginUser()
  }
  if (typeof garoon === 'object'){
    return garoon.base.user.getLoginUser()
  }
}

const getRequestToken = async ()=> {
  if(typeof kintone === 'object'){
    return kintone.getRequestToken()
  }
  if (typeof garoon === 'object'){
    return await garoon.connect.kintone.getRequestToken();
  }
}

(async ()=> {
  const loginUser = await getLoginUser();
  if (loginUser !== undefined){
    document.body.dataset.userId = loginUser.id;
    document.body.dataset.locale = loginUser.language;
    document.body.dataset.timezone = loginUser.timezone;
    document.body.dataset.requestToken = await getRequestToken();

    document.body.dispatchEvent(new CustomEvent("locale-leaper-initialized"));
  }
})()

