export function request(url, options = {}) {
    let { data, method, complete, success, fail } = options;
    const baseUrl = "https://uatyslcontentcenter.lorealchina.com";
    method = method || "POST";
    complete = complete || function() {};
    success = success || function() {};
    fail = fail || function() {};
    return wx.request({
        url: baseUrl + url,
        method,
        dataType: 'json',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data,
        success: function(response) {
            if (response.statusCode < 200 || response.statusCode > 300) {
                wx.showToast({
                    title: '服务器繁忙',
                    icon: 'none',
                    duration: 2000
                })
                return;
            }

            success(response.data);
        },
        fail,
        complete
    })
}